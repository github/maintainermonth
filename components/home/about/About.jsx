import md from 'markdown-it'

const About = ({ title, image, content }) => {
  return (
    <section className="about">
      <h2>{title}</h2>
      {/* image */}

      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </section>
  )
}

export default About
