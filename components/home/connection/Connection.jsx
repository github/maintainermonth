import Link from 'next/link'

const Connection = ({ title, buttonText, buttonLink }) => {
  return (
    <section className="connection">
      <h2>{title}</h2>

      <Link href={buttonLink}>{buttonText}</Link>
    </section>
  )
}

export default Connection
