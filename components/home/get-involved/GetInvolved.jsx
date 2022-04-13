/* eslint-disable @next/next/no-img-element */
import md from 'markdown-it'
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

        <div className="get-involved__examples">
          <h3 className="get-involved__examples-title">{examplesTitle}</h3>

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
