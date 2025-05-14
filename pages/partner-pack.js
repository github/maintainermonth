import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Head from 'next/head'
import { useEffect } from 'react'
import { useBackground } from '../contexts/BackgroundContext'
import Offers from '../components/partner-pack/offers/Offers'

export default function PartnerPack({ content, frontmatter, partnerOffers, additionalSections }) {
  const { setAnimationStep } = useBackground()

  useEffect(() => {
    // Use a distinctive animation step for Partner Pack (could be 3, 4, or 5 
    // depending on which background effect best matches the theme)
    setAnimationStep(3)
  }, [setAnimationStep])

  return (
    <div>
      <Head>
        <title>{frontmatter.metaTitle}</title>
        <meta name="description" content={frontmatter.metaDesc} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.metaDesc} />
        <meta
          property="og:image"
          content="https://maintainermonth.github.com/images/og/partner-pack.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.metaDesc} />
        <meta
          name="twitter:image"
          content="https://maintainermonth.github.com/images/og/partner-pack.png"
        />
      </Head>

      <div className="container page-content partner-pack">
        <div className="partner-pack__hero">
          <h1 className="partner-pack__title">{frontmatter.title}</h1>
          <p className="partner-pack__subtitle">{frontmatter.subtitle}</p>
        </div>
        <div className="partner-pack__content">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
          <Offers partnerOffers={partnerOffers} additionalSections={additionalSections} />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Get main content
  const filePath = path.join(process.cwd(), 'content', 'partner-pack', 'index.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  const htmlContent = marked(content)

  // Get partner offers
  const offersDirectory = path.join(process.cwd(), 'content', 'partner-pack', 'offers')
  const offerFiles = fs.readdirSync(offersDirectory).filter(file => file.endsWith('.md'))
  
  const partnerOffers = offerFiles.map(filename => {
    const filePath = path.join(offersDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContent)
    return data
  }).sort((a, b) => a.name.localeCompare(b.name))

  // Get additional sections content
  const additionalSectionsPath = path.join(process.cwd(), 'content', 'partner-pack', 'additional-sections.md')
  const additionalSectionsContent = fs.readFileSync(additionalSectionsPath, 'utf8')
  const { data: additionalSections } = matter(additionalSectionsContent)

  return {
    props: {
      content: htmlContent,
      frontmatter: data,
      partnerOffers,
      additionalSections
    },
  }
}