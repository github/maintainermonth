import Head from 'next/head'
import { useEffect } from 'react'
import { useBackground } from '../contexts/BackgroundContext'
import { marked } from 'marked'

export default function SecurityChallenge() {
  const { setAnimationStep } = useBackground()

  useEffect(() => {
    // Use a distinctive animation step for Security Challenge
    setAnimationStep(3)
  }, [setAnimationStep])

  // Skills course data
  const skillsCourses = [
    {
      title: "Introduction to Repository Management",
      description: "Learn best practices for effective repository management and security",
      link: "https://github.com/skills/introduction-to-repository-management",
      icon: "📚"
    },
    {
      title: "Secure Your Repository's Supply Chain",
      description: "Learn how to secure your repository's supply chain with proper dependency management",
      link: "https://github.com/skills/secure-repository-supply-chain",
      icon: "🔒"
    },
    {
      title: "Introduction to Secret Scanning",
      description: "Learn how to prevent accidental secret leaks and secure your repositories",
      link: "https://github.com/skills/introduction-to-secret-scanning",
      icon: "🔍"
    }
  ]

  // Convert markdown content to HTML
  const content = marked(`
This Maintainer Month, we're inviting open source maintainers to build their security skills through a hands-on challenge. Complete **three free GitHub Skills courses** and get a free voucher to take the [GitHub Advanced Security certification exam](https://examregistration.github.com/certification/GHAS).

## How it Works

### Step 1: Complete these 3 GitHub Skills
Each one takes about 1 hour
  `)


    // Convert markdown content to HTML
  const content_end = marked(`
### Thank you for your interest!
The 2025 Security Challenge submission period has ended. Form submissions closed on May 31, 2025. We are currently reviewing submissions and will be distributing vouchers to eligible participants in June 2025.

> **Please check back during Maintainer Month 2026 for next year's security challenge opportunities!**

### About the Certification
The GitHub Advanced Security certification exam (valued at $99 USD) helps showcase your security expertise with an official GitHub certification.

## Why This Matters
Maintainers often carry the responsibility of software security—but don't always have access to the right training or recognition. This challenge helps you build real-world skills and gives you an opportunity to earn a GitHub-backed credential that showcases your expertise.

## FAQ
#### Who can participate?
Anyone! While we're celebrating open source maintainers, this challenge is open to all contributors who want to grow their security skills.

#### How long does it take?
Each GitHub Skill takes about 1 hour, so expect to spend around 3 hours total for preparation, plus additional time for the certification exam itself.

#### How many vouchers are available?
Exam vouchers are limited and offered on a first-come, first-served basis. [Submit your form](https://forms.gle/HhPm3VofYDCiXeBB9) by May 31 to qualify!

#### I have more questions!
If you have any questions about the challenge or certification exam, please reach out to us at [maintainermonth@github.com](mailto:maintainermonth@github.com).
  `)
  return (
    <div>
      <Head>
        <title>Security Challenge - Maintainer Month 2025</title>
        <meta name="description" content="Complete security courses and earn a free GitHub Advanced Security certification during Maintainer Month 2025!" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:title" content="Security Challenge - Maintainer Month 2025" />
        <meta property="og:description" content="Complete security courses and earn a free GitHub Advanced Security certification during Maintainer Month 2025!" />
        <meta
          property="og:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Security Challenge - Maintainer Month 2025" />
        <meta name="twitter:description" content="Complete security courses and earn a free GitHub Advanced Security certification during Maintainer Month 2025!" />
        <meta
          name="twitter:image"
          content="https://maintainermonth.github.com/images/og/generic.png"
        />
      </Head>

      <div className="container page-content partner-pack">
        <div className="partner-pack__hero">
          <h1 className="partner-pack__title">Security Challenge</h1>
          <p className="partner-pack__subtitle">Secure Your Open Source Projects & Earn a Free Certification!</p>
        </div>
        <div className="partner-pack__content">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
            <div className="offers-grid-container">
            <div className="offers-grid">
              {skillsCourses.map((course, index) => (
                <div key={index} className="offer-card">
                  <div className="offer-card__logo">
                    <span style={{ fontSize: '3rem' }}>{course.icon}</span>
                  </div>
                  <div className="offer-card__description">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                  </div>
                  <div className="offer-card__cta-container">
                    <a href={course.link} className="offer-card__cta" target="_blank" rel="noopener noreferrer">
                      Start this course
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
          <div dangerouslySetInnerHTML={{ __html: content_end }}></div>

        </div>
      </div>
    </div>
  )
}