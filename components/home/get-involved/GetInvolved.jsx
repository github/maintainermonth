/* eslint-disable @next/next/no-img-element */
import md from 'markdown-it'
import SectionDivider from '../../section-divider/SectionDivider'
import ExampleCard from './ExampleCard'

const GetInvolved = ({ title, examplesTitle, examples, content, maintainersTitle, maintainerOptions, partnersTitle, partnerOptions }) => {
  return (
    <section className="get-involved">
      <div className="get-involved__content">

        <SectionDivider title={examplesTitle} />
        <div className="get-involved__header">
          <div
            className="get-involved__column"
            dangerouslySetInnerHTML={{ __html: md().render(content) }}
          />
        </div>

        <div className="get-involved__header">
          <div className="get-involved__title">
          <h2 >{maintainersTitle}</h2>

          <img
            className="get-involved__image"
            src={'/images/thanks.png'}
            alt="Illustration by Ariel Davis of a person thanking an open source maintainer on social media"
          />
          </div>

          <div className="get-involved__text">
            <div
              dangerouslySetInnerHTML={{ __html: md().render(maintainerOptions) }}
            />
          </div>
        </div>

        <div className="get-involved__header">
          <div className="get-involved__title">
          <h2 >{partnersTitle}</h2>

          <img
            className="get-involved__image"
            src={'/images/tools.png'}
            alt="Illustration by Ariel Davis of people at a tool-specific maintainer summit for open source projects"
          />
          </div>

          <div className="get-involved__text">
            <div
              dangerouslySetInnerHTML={{ __html: md().render(partnerOptions) }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInvolved
