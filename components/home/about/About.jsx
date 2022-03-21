import md from 'markdown-it'

const About = ({ title, image, content }) => {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">{title}</h2>
        {/* TODO: add image */}

        <div
          className="about__text"
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        />
      </div>
    </section>
  )
}

export default About
