import ButtonLink from '../../button-link/ButtonLink'

const Connection = ({ title, buttonText, buttonLink }) => {
  return (
    <section className="connection">
      <div className="connection__content">
        <h2 className="connection__title">{title}</h2>

        <div className="connection__button">
          <ButtonLink href={buttonLink}>{buttonText}</ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default Connection
