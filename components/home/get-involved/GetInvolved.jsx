/* eslint-disable @next/next/no-img-element */
import md from 'markdown-it'
import SectionDivider from '../../section-divider/SectionDivider'
import ExampleCard from './ExampleCard'

const GetInvolved = ({ title, examplesTitle, examples, content }) => {
  return (
    <section className="get-involved">
      <div className="get-involved__content">
        <div className="get-involved__header">
          <h2 className="get-involved__title">{title}</h2>

          <div
            className="get-involved__text"
            dangerouslySetInnerHTML={{ __html: md().render(content) }}
          />
        </div>

        <SectionDivider title={examplesTitle} />

        <div className="get-involved__examples">
          <div className="get-involved__list">
            {examples.map(({ title, image, imageDescription }) => (
              <ExampleCard
                key={`example-${title}`}
                image={image}
                imageDescription={imageDescription}
                title={title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInvolved
