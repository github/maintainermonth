const fs = require('fs')
const os = require('os')
const path = require('path')

const matter = require('gray-matter')

const {
  buildPullRequestBody,
  normalizeIssueSubmission,
  parseEventDate,
  parseTime,
  renderEventMarkdown,
  run,
  slugify,
  writeEventFile,
} = require('../scripts/event-from-issue')

const issueBody = `### Event Name

Discussion: How should corporations support OSS maintainers?

### Event Date

05/14/2026

### Event End Date

05/14/2026

### Start time in UTC

19:00

### End time in UTC

20:00

### Event Type

meetup

### Event Language

English

### Event Location

Virtual

### Organizer name

Sophia Vargas - Google OSPO

### Organizer URL

_No response_

### Event URL

meet.google.com/asd-hucu-syf

### Event Description

This meetup will be facilitated as an open discussion focused on how corporations can best support OSS maintainers today.

What programs most effectively support maintainers today and why? How can they be improved? What's missing?

### Participants

_No response_

### Maintainers

_No response_
`

const baseIssue = {
  number: 387,
  title: 'Discussion: How should corporations support OSS maintainers?',
  body: issueBody,
  url: 'https://github.com/github/maintainermonth/issues/387',
}

describe('event issue automation', () => {
  test('normalizes a rendered add-to-calendar issue body', () => {
    const submission = normalizeIssueSubmission(baseIssue)

    expect(submission.frontmatter).toEqual({
      title: 'Discussion: How should corporations support OSS maintainers?',
      metaTitle: 'Discussion: How should corporations support OSS maintainers?',
      metaDesc:
        'This meetup will be facilitated as an open discussion focused on how corporations can best support OSS maintainers today. What programs most effectively supp...',
      date: '05/14',
      endDate: '05/14',
      UTCStartTime: '19:00',
      UTCEndTime: '20:00',
      type: 'meetup',
      language: 'English',
      location: 'Virtual',
      userName: 'Sophia Vargas - Google OSPO',
      linkUrl: 'https://meet.google.com/asd-hucu-syf',
    })
    expect(submission.slug).toBe(
      'discussion-how-should-corporations-support-oss-maintainers',
    )
    expect(submission.filenameDate).toBe('2026-05-14')
  })

  test('renders markdown frontmatter and body', () => {
    const submission = normalizeIssueSubmission(baseIssue)
    const rendered = renderEventMarkdown(submission)
    const parsed = matter(rendered)

    expect(parsed.data.title).toBe(submission.frontmatter.title)
    expect(parsed.data.date).toBe('05/14')
    expect(parsed.content).toContain(
      'This meetup will be facilitated as an open discussion',
    )
  })

  test('writes deterministic filenames with the source issue number', () => {
    const outputDir = fs.mkdtempSync(path.join(os.tmpdir(), 'events-'))
    const submission = normalizeIssueSubmission(baseIssue)
    const outputPath = writeEventFile(submission, outputDir)

    expect(path.basename(outputPath)).toBe(
      '2026-05-14-discussion-how-should-corporations-support-oss-maintainers-issue-387.md',
    )
    expect(fs.existsSync(outputPath)).toBe(true)
  })

  test('updates an existing file for the same issue number', () => {
    const outputDir = fs.mkdtempSync(path.join(os.tmpdir(), 'events-'))
    const existingPath = path.join(outputDir, '2026-05-14-old-title-issue-387.md')
    fs.writeFileSync(existingPath, 'old content', 'utf8')

    const submission = normalizeIssueSubmission(baseIssue)
    const outputPath = writeEventFile(submission, outputDir)

    expect(outputPath).toBe(existingPath)
    expect(fs.readFileSync(existingPath, 'utf8')).toContain(
      'Discussion: How should corporations support OSS maintainers?',
    )
  })

  test('validates dates, times, and event types', () => {
    expect(parseEventDate('5/4', 'Event Date')).toEqual(
      expect.objectContaining({
        frontmatter: '05/04',
        filenameDate: '2026-05-04',
      }),
    )
    expect(parseTime('all day', 'Start time in UTC')).toBe('all-day')
    expect(parseTime('tbd', 'Start time in UTC')).toBe('TBD')

    expect(() => parseEventDate('05/40', 'Event Date')).toThrow(
      'valid calendar date',
    )
    expect(() => parseEventDate('05/14/2025', 'Event Date')).toThrow(
      'must be in 2026',
    )
    expect(() =>
      normalizeIssueSubmission({
        ...baseIssue,
        body: issueBody.replace('meetup', 'webinar'),
      }),
    ).toThrow('Event Type must be one of')
  })

  test('rejects missing required fields', () => {
    expect(() =>
      normalizeIssueSubmission({
        ...baseIssue,
        body: issueBody.replace(
          'Sophia Vargas - Google OSPO',
          '_No response_',
        ),
      }),
    ).toThrow('Missing required fields: Organizer name')
  })

  test('does not allow description headings to override form fields', () => {
    const submission = normalizeIssueSubmission({
      ...baseIssue,
      body: issueBody.replace(
        "What's missing?",
        "What's missing?\n\n### Event URL\n\nhttps://evil.example.com\n\n### Event Type\n\nmisc",
      ),
    })

    expect(submission.frontmatter.linkUrl).toBe(
      'https://meet.google.com/asd-hucu-syf',
    )
    expect(submission.frontmatter.type).toBe('meetup')
    expect(submission.content).toContain('https://evil.example.com')
  })

  test('keeps slugs ascii and readable', () => {
    expect(slugify('Café + maintainers: AI/OSS & funding!')).toBe(
      'cafe-maintainers-ai-oss-and-funding',
    )
  })

  test('creates a PR body with submission context', () => {
    const submission = normalizeIssueSubmission({
      ...baseIssue,
      body: issueBody
        .replace('### Participants\n\n_No response_', '### Participants\n\n50')
        .replace('### Maintainers\n\n_No response_', '### Maintainers\n\n20'),
    })
    const body = buildPullRequestBody(
      submission,
      'content/events/test-event.md',
    )

    expect(body).toContain(
      'Adds a Maintainer Month calendar event from https://github.com/github/maintainermonth/issues/387.',
    )
    expect(body).toContain('- Participants: 50')
    expect(body).toContain('- Maintainers: 20')
  })

  test('runs from a body file for local debugging', () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'event-run-'))
    const bodyFile = path.join(tempDir, 'issue.md')
    const outputDir = path.join(tempDir, 'events')
    const summaryFile = path.join(tempDir, 'summary.md')
    fs.writeFileSync(bodyFile, issueBody, 'utf8')

    const result = run([
      '--issue',
      '387',
      '--body-file',
      bodyFile,
      '--output-dir',
      outputDir,
      '--summary-file',
      summaryFile,
    ])

    expect(fs.existsSync(result.outputPath)).toBe(true)
    expect(fs.readFileSync(summaryFile, 'utf8')).toContain(
      'Generated event file:',
    )
  })
})
