import { createServer } from "node:http";
import { execSync } from "node:child_process";
import { joinSession, createCanvas, CanvasError } from "@github/copilot-sdk/extension";

const REPO = "github/maintainermonth";

function ghExec(args) {
    return JSON.parse(execSync(`gh ${args} --repo ${REPO}`, { encoding: "utf8", timeout: 15000 }));
}

function fetchRepoData() {
    const issues = ghExec(
        `issue list --state open --limit 50 --json number,title,labels,author,createdAt,updatedAt,assignees,comments`
    );
    const prs = ghExec(
        `pr list --state open --limit 30 --json number,title,labels,author,createdAt,updatedAt,reviewDecision,reviewRequests,changedFiles,additions,deletions,isDraft,assignees`
    );
    return { issues, prs, fetchedAt: new Date().toISOString() };
}

// SSE clients per instance so /api/refresh can push updates to the iframe.
const sseClients = new Map(); // instanceId -> Set<ServerResponse>

function broadcast(instanceId, payload) {
    const clients = sseClients.get(instanceId);
    if (!clients) return;
    const line = `data: ${JSON.stringify(payload)}\n\n`;
    for (const res of clients) res.write(line);
}

function labelChip(label) {
    const bg = `#${label.color}`;
    // Decide text color based on perceived brightness of the hex background.
    const r = parseInt(label.color.slice(0, 2), 16);
    const g = parseInt(label.color.slice(2, 4), 16);
    const b = parseInt(label.color.slice(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    const fg = brightness > 128 ? "#24292e" : "#ffffff";
    return `<span class="label-chip" style="background:${bg};color:${fg}">${escHtml(label.name)}</span>`;
}

function escHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function reviewBadge(pr) {
    if (pr.isDraft) return `<span class="badge draft">Draft</span>`;
    if (pr.reviewDecision === "APPROVED") return `<span class="badge approved">Approved</span>`;
    if (pr.reviewDecision === "CHANGES_REQUESTED") return `<span class="badge changes">Changes requested</span>`;
    if (pr.reviewRequests && pr.reviewRequests.length > 0) {
        const names = pr.reviewRequests.map((r) => escHtml(r.login)).join(", ");
        return `<span class="badge pending">Review: ${names}</span>`;
    }
    return `<span class="badge no-review">No reviewers</span>`;
}

function issueCard(issue) {
    const labels = (issue.labels || []).map(labelChip).join(" ");
    const commentCount = Array.isArray(issue.comments) ? issue.comments.length : 0;
    const assigned = (issue.assignees || []).map((a) => escHtml(a.login)).join(", ") || "—";
    return `
<a class="card-link" href="https://github.com/${REPO}/issues/${issue.number}" target="_blank">
  <div class="card">
    <div class="card-meta">
      <span class="item-number">#${issue.number}</span>
      <span class="labels">${labels}</span>
    </div>
    <div class="card-title">${escHtml(issue.title)}</div>
    <div class="card-footer">
      <span class="avatar-chip">${escHtml(issue.author.login)}</span>
      ${commentCount > 0 ? `<span class="meta-pill">💬 ${commentCount}</span>` : ""}
      <span class="meta-pill">Assigned: ${assigned}</span>
      <span class="meta-pill age" data-ts="${escHtml(issue.updatedAt)}"></span>
    </div>
  </div>
</a>`;
}

function prCard(pr) {
    const labels = (pr.labels || []).map(labelChip).join(" ");
    const diffSign = `<span class="add">+${pr.additions}</span> <span class="del">-${pr.deletions}</span>`;
    return `
<a class="card-link" href="https://github.com/${REPO}/pull/${pr.number}" target="_blank">
  <div class="card">
    <div class="card-meta">
      <span class="item-number">#${pr.number}</span>
      ${reviewBadge(pr)}
      <span class="labels">${labels}</span>
    </div>
    <div class="card-title">${escHtml(pr.title)}</div>
    <div class="card-footer">
      <span class="avatar-chip">${escHtml(pr.author.login)}</span>
      <span class="meta-pill">${diffSign} · ${pr.changedFiles} file${pr.changedFiles !== 1 ? "s" : ""}</span>
      <span class="meta-pill age" data-ts="${escHtml(pr.updatedAt)}"></span>
    </div>
  </div>
</a>`;
}

function renderHtml(data) {
    const issueCards = data.issues.length
        ? data.issues.map(issueCard).join("")
        : `<p class="empty">No open issues.</p>`;
    const prCards = data.prs.length
        ? data.prs.map(prCard).join("")
        : `<p class="empty">No open pull requests.</p>`;

    return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Maintainer Triage · ${REPO}</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--background-color-default, #ffffff);
    color: var(--text-color-default, #1f2328);
    font-family: var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
    font-size: var(--text-body-medium, 14px);
    line-height: var(--leading-body-medium, 20px);
    padding: 0;
  }

  header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color-default, #d0d7de);
    background: var(--background-color-default, #ffffff);
    position: sticky;
    top: 0;
    z-index: 10;
  }

  header h1 {
    font-size: var(--text-body-medium, 14px);
    font-weight: var(--font-weight-semibold, 600);
    flex: 1;
    color: var(--text-color-default, #1f2328);
  }

  header h1 span {
    font-weight: 400;
    color: var(--text-color-muted, #636c76);
  }

  #last-updated {
    font-size: 12px;
    color: var(--text-color-muted, #636c76);
  }

  button#refresh-btn {
    padding: 4px 10px;
    font-size: 12px;
    font-family: inherit;
    cursor: pointer;
    border: 1px solid var(--border-color-default, #d0d7de);
    border-radius: 6px;
    background: var(--background-color-default, #ffffff);
    color: var(--text-color-default, #1f2328);
  }

  button#refresh-btn:hover {
    background: var(--background-color-subtle, #f6f8fa);
  }

  button#refresh-btn:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    min-height: calc(100vh - 45px);
  }

  .column {
    padding: 12px 16px;
    border-right: 1px solid var(--border-color-default, #d0d7de);
  }

  .column:last-child { border-right: none; }

  .column-header {
    font-size: 12px;
    font-weight: var(--font-weight-semibold, 600);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-color-muted, #636c76);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .count-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    border-radius: 9px;
    font-size: 11px;
    font-weight: 600;
    background: var(--background-color-subtle, #f6f8fa);
    border: 1px solid var(--border-color-default, #d0d7de);
    color: var(--text-color-default, #1f2328);
  }

  .card-link {
    text-decoration: none;
    color: inherit;
    display: block;
    margin-bottom: 8px;
  }

  .card {
    border: 1px solid var(--border-color-default, #d0d7de);
    border-radius: 6px;
    padding: 10px 12px;
    background: var(--background-color-default, #ffffff);
    transition: border-color 0.15s;
  }

  .card-link:hover .card {
    border-color: var(--color-accent-fg, #0969da);
  }

  .card-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 4px;
  }

  .item-number {
    font-size: 12px;
    color: var(--text-color-muted, #636c76);
    font-weight: var(--font-weight-semibold, 600);
    flex-shrink: 0;
  }

  .labels { display: flex; flex-wrap: wrap; gap: 3px; }

  .label-chip {
    display: inline-block;
    padding: 1px 6px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 500;
    line-height: 18px;
    white-space: nowrap;
  }

  .card-title {
    font-size: 13px;
    font-weight: var(--font-weight-semibold, 600);
    color: var(--text-color-default, #1f2328);
    margin-bottom: 6px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
  }

  .avatar-chip {
    font-size: 11px;
    font-weight: 500;
    color: var(--text-color-muted, #636c76);
  }

  .meta-pill {
    font-size: 11px;
    color: var(--text-color-muted, #636c76);
  }

  .meta-pill:not(:first-child)::before {
    content: "·";
    margin-right: 5px;
    color: var(--border-color-default, #d0d7de);
  }

  .add { color: #1a7f37; font-weight: 500; }
  .del { color: #cf222e; font-weight: 500; }

  .badge {
    display: inline-block;
    padding: 1px 7px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 500;
    line-height: 18px;
    white-space: nowrap;
  }

  .badge.approved    { background: #dafbe1; color: #1a7f37; }
  .badge.changes     { background: #fff0b3; color: #9a6700; }
  .badge.pending     { background: #ddf4ff; color: #0969da; }
  .badge.draft       { background: var(--background-color-subtle, #f6f8fa); color: var(--text-color-muted, #636c76); border: 1px solid var(--border-color-default, #d0d7de); }
  .badge.no-review   { background: var(--background-color-subtle, #f6f8fa); color: var(--text-color-muted, #636c76); border: 1px solid var(--border-color-default, #d0d7de); }

  .empty {
    color: var(--text-color-muted, #636c76);
    font-size: 13px;
    padding: 8px 0;
  }
</style>
</head>
<body>
<header>
  <h1>Maintainer Triage <span>· ${REPO}</span></h1>
  <span id="last-updated"></span>
  <button id="refresh-btn">↻ Refresh</button>
</header>
<div class="grid">
  <div class="column" id="issues-col">
    <div class="column-header">
      Issues <span class="count-badge" id="issue-count">${data.issues.length}</span>
    </div>
    <div id="issues-list">${issueCards}</div>
  </div>
  <div class="column" id="prs-col">
    <div class="column-header">
      Pull Requests <span class="count-badge" id="pr-count">${data.prs.length}</span>
    </div>
    <div id="prs-list">${prCards}</div>
  </div>
</div>
<script>
  const FETCHED_AT = ${JSON.stringify(data.fetchedAt)};

  function relTime(iso) {
    const diff = Date.now() - new Date(iso).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return mins + "m ago";
    const hours = Math.floor(mins / 60);
    if (hours < 24) return hours + "h ago";
    const days = Math.floor(hours / 24);
    return days + "d ago";
  }

  function updateAges() {
    for (const el of document.querySelectorAll(".age[data-ts]")) {
      el.textContent = relTime(el.dataset.ts);
    }
  }

  function updateLastUpdated() {
    const el = document.getElementById("last-updated");
    if (el) el.textContent = "Updated " + relTime(FETCHED_AT);
  }

  updateAges();
  updateLastUpdated();
  setInterval(() => { updateAges(); updateLastUpdated(); }, 30000);

  // Refresh button
  const btn = document.getElementById("refresh-btn");
  btn.addEventListener("click", async () => {
    btn.disabled = true;
    btn.textContent = "…";
    await fetch("/api/refresh", { method: "POST" });
    // SSE will push a reload event; if SSE is down, reload the page.
    setTimeout(() => { if (btn.disabled) window.location.reload(); }, 3000);
  });

  // SSE for live updates pushed by the agent's refresh action or the button.
  const es = new EventSource("/events");
  es.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.type === "reload") window.location.reload();
  };
</script>
</body>
</html>`;
}

const servers = new Map();

async function startServer(instanceId) {
    let cached = fetchRepoData();

    const server = createServer((req, res) => {
        const url = new URL(req.url, "http://127.0.0.1");

        if (url.pathname === "/events") {
            res.setHeader("Content-Type", "text/event-stream");
            res.setHeader("Cache-Control", "no-cache");
            res.setHeader("Connection", "keep-alive");
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.write(": connected\n\n");
            if (!sseClients.has(instanceId)) sseClients.set(instanceId, new Set());
            sseClients.get(instanceId).add(res);
            req.on("close", () => sseClients.get(instanceId)?.delete(res));
            return;
        }

        if (url.pathname === "/api/refresh" && req.method === "POST") {
            try {
                cached = fetchRepoData();
                broadcast(instanceId, { type: "reload" });
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ ok: true, fetchedAt: cached.fetchedAt }));
            } catch (err) {
                res.statusCode = 500;
                res.end(JSON.stringify({ ok: false, error: String(err) }));
            }
            return;
        }

        // Default: serve the triage page (re-renders with current cached data).
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(renderHtml(cached));
    });

    await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
    const address = server.address();
    const port = typeof address === "object" && address ? address.port : 0;
    return { server, url: `http://127.0.0.1:${port}/` };
}

await joinSession({
    canvases: [
        createCanvas({
            id: "maintainer-triage",
            displayName: "Maintainer Triage",
            description: "Live triage board for github/maintainermonth: open issues and pull requests with labels, review status, and age.",
            actions: [
                {
                    name: "refresh",
                    description: "Re-fetch open issues and PRs from GitHub and push updated data to the canvas.",
                    handler: async (ctx) => {
                        const entry = servers.get(ctx.instanceId);
                        if (!entry) throw new CanvasError("not_open", "Canvas is not open.");
                        const data = fetchRepoData();
                        broadcast(ctx.instanceId, { type: "reload" });
                        return {
                            issues: data.issues.length,
                            prs: data.prs.length,
                            fetchedAt: data.fetchedAt,
                        };
                    },
                },
            ],
            open: async (ctx) => {
                let entry = servers.get(ctx.instanceId);
                if (!entry) {
                    entry = await startServer(ctx.instanceId);
                    servers.set(ctx.instanceId, entry);
                }
                return { title: "Maintainer Triage · github/maintainermonth", url: entry.url };
            },
            onClose: async (ctx) => {
                const entry = servers.get(ctx.instanceId);
                if (entry) {
                    servers.delete(ctx.instanceId);
                    sseClients.delete(ctx.instanceId);
                    await new Promise((resolve) => entry.server.close(() => resolve()));
                }
            },
        }),
    ],
});
