#!/usr/bin/env node

const { execFileSync } = require('child_process')
const fs = require('fs')
const os = require('os')
const path = require('path')

const matter = require('gray-matter')

const EVENT_YEAR = Number(process.env.MAINTAINER_MONTH_YEAR || '2026')
const DEFAULT_OUTPUT_DIR = path.join('content', 'events')
const NO_RESPONSE = /^_?No response_?$/i
const VALID_EVENT_TYPES = [
  'conference',
  'podcast',
  'stream',
  'talk',
  'meetup',
  'fundraising',
  'workshop',
  'misc',
]

const FIELD_LABELS = {
  eventName: 'Event Name',
  date: 'Event Date',
  endDate: 'Event End Date',
  UTCStartTime: 'Start time in UTC',
  UTCEndTime: 'End time in UTC',
  type: 'Event Type',
  language: 'Event Language',
  location: 'Event Location',
  userName: 'Organizer name',
  userLink: 'Organizer URL',
  linkUrl: 'Event URL',
  eventDescription: 'Event Description',
  expectedParticipants: 'Participants',
  expectedMaintainers: 'Maintainers',
}

const REQUIRED_FIELDS = [
  'eventName',
  'date',
  'type',
  'language',
  'location',
  'userName',
]

function usage() {
  return `Usage:
  node scripts/event-from-issue.js --issue <number> [--repo owner/name] [--output-dir content/events] [--summary-file path]
  node scripts/event-from-issue.js --issue <number> --body-file path [--output-dir content/events] [--summary-file path]
`
}

function parseArgs(argv) {
  const args = {}

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]

    if (!arg.startsWith('--')) {
      throw new Error(`Unexpected argument: ${arg}`)
    }

    const key = arg.slice(2)
    const value = argv[index + 1]

    if (!value || value.startsWith('--')) {
      throw new Error(`Missing value for --${key}`)
    }

    args[key] = value
    index += 1
  }

  if (!args.issue) {
    throw new Error('Missing required --issue value')
  }

  return {
    issueNumber: String(args.issue),
    repo: args.repo || process.env.GITHUB_REPOSITORY,
    bodyFile: args['body-file'],
    outputDir: args['output-dir'] || DEFAULT_OUTPUT_DIR,
    summaryFile: args['summary-file'],
  }
}

function fetchIssue({ repo, issueNumber }) {
  if (!repo) {
    throw new Error('Missing --repo or GITHUB_REPOSITORY')
  }

  const output = execFileSync(
    'gh',
    [
      'issue',
      'view',
      issueNumber,
      '--repo',
      repo,
      '--json',
      'number,title,body,url,author',
    ],
    { encoding: 'utf8' },
  )

  return JSON.parse(output)
}

function readIssue({ issueNumber, repo, bodyFile }) {
  if (bodyFile) {
    return {
      number: Number(issueNumber),
      title: `Issue ${issueNumber}`,
      body: fs.readFileSync(bodyFile, 'utf8'),
      url: '',
      author: null,
    }
  }

  return fetchIssue({ repo, issueNumber })
}

function normalizeValue(value) {
  const trimmed = (value || '').trim()

  if (!trimmed || NO_RESPONSE.test(trimmed)) {
    return ''
  }

  return trimmed
}

function parseIssueForm(body) {
  const sections = {}
  const normalizedBody = String(body || '').replace(/\r\n/g, '\n')
  const headingPattern = /^###\s+(.+?)\s*$/gm
  const recognizedLabels = Object.values(FIELD_LABELS)
  const headings = []
  let match

  while ((match = headingPattern.exec(normalizedBody)) !== null) {
    const label = match[1].trim()

    if (recognizedLabels.includes(label)) {
      headings.push({
        label,
        contentStart: headingPattern.lastIndex,
        headingStart: match.index,
      })
    }
  }

  const selectedHeadings = []
  let lastSelectedIndex = -1

  recognizedLabels.forEach((label) => {
    const headingIndex = headings.findIndex(
      (heading, index) => index > lastSelectedIndex && heading.label === label,
    )

    if (headingIndex !== -1) {
      selectedHeadings.push(headings[headingIndex])
      lastSelectedIndex = headingIndex
    }
  })

  selectedHeadings.forEach((heading, index) => {
    const nextHeading = selectedHeadings[index + 1]
    const contentEnd = nextHeading ? nextHeading.headingStart : normalizedBody.length

    sections[heading.label] = normalizeValue(
      normalizedBody.slice(heading.contentStart, contentEnd),
    )
  })

  return sections
}

function getField(sections, field) {
  return sections[FIELD_LABELS[field]] || ''
}

function parseEventDate(value, fieldName) {
  const raw = normalizeValue(value)
  const match = raw.match(/^(\d{1,2})\/(\d{1,2})(?:\/(\d{4}))?$/)

  if (!match) {
    throw new Error(`${fieldName} must use MM/DD or MM/DD/YYYY format`)
  }

  const month = Number(match[1])
  const day = Number(match[2])
  const year = match[3] ? Number(match[3]) : EVENT_YEAR

  if (year !== EVENT_YEAR) {
    throw new Error(`${fieldName} must be in ${EVENT_YEAR}`)
  }

  const date = new Date(Date.UTC(year, month - 1, day))
  const isValid =
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day

  if (!isValid) {
    throw new Error(`${fieldName} is not a valid calendar date`)
  }

  return {
    year,
    month,
    day,
    frontmatter: `${pad(month)}/${pad(day)}`,
    filenameDate: `${year}-${pad(month)}-${pad(day)}`,
  }
}

function parseTime(value, fieldName, { allowBlank = true } = {}) {
  const raw = normalizeValue(value)

  if (!raw) {
    if (allowBlank) return ''
    throw new Error(`${fieldName} is required`)
  }

  const normalized = raw.toLowerCase().replace(/[\s_]/g, '-')

  if (normalized === 'tbd') {
    return 'TBD'
  }

  if (normalized === 'all-day' || normalized === 'allday') {
    return 'all-day'
  }

  const match = raw.match(/^([01]?\d|2[0-3]):([0-5]\d)$/)

  if (!match) {
    throw new Error(`${fieldName} must use HH:MM, TBD, or all-day`)
  }

  return `${pad(Number(match[1]))}:${match[2]}`
}

function normalizeUrl(value, fieldName) {
  const raw = normalizeValue(value)

  if (!raw) {
    return ''
  }

  const withProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(raw)
    ? raw
    : `https://${raw}`

  let parsed

  try {
    parsed = new URL(withProtocol)
  } catch (error) {
    throw new Error(`${fieldName} must be a valid URL`)
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    throw new Error(`${fieldName} must use http or https`)
  }

  return parsed.toString()
}

function normalizeType(value) {
  const type = normalizeValue(value).toLowerCase()

  if (!VALID_EVENT_TYPES.includes(type)) {
    throw new Error(
      `Event Type must be one of: ${VALID_EVENT_TYPES.join(', ')}`,
    )
  }

  return type
}

function stripMarkdown(value) {
  return normalizeValue(value)
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_#>~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function buildMetaDescription(description, title) {
  const text = stripMarkdown(description) || title

  if (text.length <= 160) {
    return text
  }

  return `${text.slice(0, 157).trimEnd()}...`
}

function slugify(value) {
  const slug = normalizeValue(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^A-Za-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
    .slice(0, 60)
    .replace(/-$/g, '')

  if (!slug) {
    throw new Error('Event Name must contain at least one letter or number')
  }

  return slug
}

function pad(value) {
  return String(value).padStart(2, '0')
}

function assertRequiredFields(fields) {
  const missing = REQUIRED_FIELDS.filter((field) => !normalizeValue(fields[field]))

  if (missing.length > 0) {
    const labels = missing.map((field) => FIELD_LABELS[field]).join(', ')
    throw new Error(`Missing required fields: ${labels}`)
  }
}

function assertDateRange(startDate, endDate) {
  if (!endDate) return

  const start = Date.UTC(startDate.year, startDate.month - 1, startDate.day)
  const end = Date.UTC(endDate.year, endDate.month - 1, endDate.day)

  if (end < start) {
    throw new Error('Event End Date must be on or after Event Date')
  }
}

function assertTimeRange(startDate, endDate, startTime, endTime) {
  if (
    !startTime ||
    !endTime ||
    startTime === 'TBD' ||
    endTime === 'TBD' ||
    startTime === 'all-day' ||
    endTime === 'all-day'
  ) {
    return
  }

  const effectiveEndDate = endDate || startDate
  const start = Date.UTC(
    startDate.year,
    startDate.month - 1,
    startDate.day,
    ...startTime.split(':').map(Number),
  )
  const end = Date.UTC(
    effectiveEndDate.year,
    effectiveEndDate.month - 1,
    effectiveEndDate.day,
    ...endTime.split(':').map(Number),
  )

  if (end <= start) {
    throw new Error('End time must be after start time')
  }
}

function normalizeIssueSubmission(issue) {
  const sections = parseIssueForm(issue.body)
  const fields = Object.fromEntries(
    Object.keys(FIELD_LABELS).map((field) => [field, getField(sections, field)]),
  )

  assertRequiredFields(fields)

  const startDate = parseEventDate(fields.date, FIELD_LABELS.date)
  const endDate = fields.endDate
    ? parseEventDate(fields.endDate, FIELD_LABELS.endDate)
    : null
  const UTCStartTime = parseTime(fields.UTCStartTime, FIELD_LABELS.UTCStartTime)
  const UTCEndTime = parseTime(fields.UTCEndTime, FIELD_LABELS.UTCEndTime)

  assertDateRange(startDate, endDate)
  assertTimeRange(startDate, endDate, UTCStartTime, UTCEndTime)

  const title = normalizeValue(fields.eventName)
  const description = normalizeValue(fields.eventDescription)
  const frontmatter = {
    title,
    metaTitle: title,
    metaDesc: buildMetaDescription(description, title),
    date: startDate.frontmatter,
    type: normalizeType(fields.type),
    language: normalizeValue(fields.language),
    location: normalizeValue(fields.location),
    userName: normalizeValue(fields.userName),
  }

  if (endDate) frontmatter.endDate = endDate.frontmatter
  if (UTCStartTime) frontmatter.UTCStartTime = UTCStartTime
  if (UTCEndTime) frontmatter.UTCEndTime = UTCEndTime

  const userLink = normalizeUrl(fields.userLink, FIELD_LABELS.userLink)
  const linkUrl = normalizeUrl(fields.linkUrl, FIELD_LABELS.linkUrl)

  if (userLink) frontmatter.userLink = userLink
  if (linkUrl) frontmatter.linkUrl = linkUrl

  return {
    issue,
    fields,
    frontmatter,
    content: description,
    slug: slugify(title),
    filenameDate: startDate.filenameDate,
  }
}

function renderEventMarkdown(submission) {
  const content = submission.content
    ? `${submission.content.trim()}\n`
    : ''

  return matter.stringify(content, submission.frontmatter)
}

function findExistingIssueFile(outputDir, issueNumber) {
  if (!fs.existsSync(outputDir)) {
    return null
  }

  const suffix = `-issue-${issueNumber}.md`
  const matches = fs
    .readdirSync(outputDir)
    .filter((fileName) => fileName.endsWith(suffix))
    .sort()

  if (matches.length > 1) {
    throw new Error(
      `Found multiple existing files for issue ${issueNumber}: ${matches.join(
        ', ',
      )}`,
    )
  }

  return matches[0] ? path.join(outputDir, matches[0]) : null
}

function writeEventFile(submission, outputDir) {
  fs.mkdirSync(outputDir, { recursive: true })

  const issueNumber = submission.issue.number
  const existingPath = findExistingIssueFile(outputDir, issueNumber)
  const fileName = `${submission.filenameDate}-${submission.slug}-issue-${issueNumber}.md`
  const outputPath = existingPath || path.join(outputDir, fileName)
  const markdown = renderEventMarkdown(submission)

  fs.writeFileSync(outputPath, markdown, 'utf8')

  return outputPath
}

function buildPullRequestBody(submission, outputPath) {
  const fields = submission.fields
  const issueUrl = submission.issue.url || `#${submission.issue.number}`
  const lines = [
    `Adds a Maintainer Month calendar event from ${issueUrl}.`,
    '',
    'Generated event file:',
    `- \`${outputPath}\``,
    '',
    'Review checklist:',
    '- Event title, date, and UTC time are correct.',
    '- Event link is intended to be public.',
    '- Event type, language, location, and organizer are correct.',
    '- Description reads well on the schedule page.',
    '',
    'Submission context:',
    `- Participants: ${normalizeValue(fields.expectedParticipants) || 'Not provided'}`,
    `- Maintainers: ${normalizeValue(fields.expectedMaintainers) || 'Not provided'}`,
  ]

  return `${lines.join('\n')}\n`
}

function writeSummaryFile(submission, outputPath, summaryFile) {
  if (!summaryFile) return

  fs.mkdirSync(path.dirname(summaryFile), { recursive: true })
  fs.writeFileSync(summaryFile, buildPullRequestBody(submission, outputPath), 'utf8')
}

function writeGithubOutput(outputPath, submission) {
  const githubOutput = process.env.GITHUB_OUTPUT

  if (!githubOutput) return

  const lines = [
    `event_file=${outputPath}`,
    `event_title=${submission.frontmatter.title}`,
  ]

  fs.appendFileSync(githubOutput, `${lines.join(os.EOL)}${os.EOL}`)
}

function run(argv = process.argv.slice(2)) {
  const options = parseArgs(argv)
  const issue = readIssue(options)
  const submission = normalizeIssueSubmission(issue)
  const outputPath = writeEventFile(submission, options.outputDir)

  writeSummaryFile(submission, outputPath, options.summaryFile)
  writeGithubOutput(outputPath, submission)

  return { outputPath, submission }
}

if (require.main === module) {
  try {
    const result = run()
    console.log(`Generated ${result.outputPath}`)
  } catch (error) {
    console.error(error.message)
    console.error('')
    console.error(usage())
    process.exit(1)
  }
}

module.exports = {
  EVENT_YEAR,
  FIELD_LABELS,
  VALID_EVENT_TYPES,
  buildMetaDescription,
  buildPullRequestBody,
  normalizeIssueSubmission,
  parseArgs,
  parseEventDate,
  parseIssueForm,
  parseTime,
  renderEventMarkdown,
  run,
  slugify,
  writeEventFile,
}
