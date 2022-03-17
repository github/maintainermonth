const GetInvolved = ({ title, examplesTitle, examples }) => {
  return (
    <section className="get-involved">
      <h2>{title}</h2>

      <h3>{examplesTitle}</h3>
      <div className="get-involved__examples">
        {examples.map(({ title, image }) => (
          <div key={`example-${title}`} className="get-involved__example">
            <p>{title}</p>
            {/* TODO: image */}
          </div>
        ))}
      </div>
    </section>
  )
}

export default GetInvolved
