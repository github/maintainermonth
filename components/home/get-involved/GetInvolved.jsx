import md from 'markdown-it'

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
            {examples.map(({ title, image }) => (
              <div key={`example-${title}`} className="get-involved__example">
                <span className="get-involved__image" />
                <p>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInvolved
