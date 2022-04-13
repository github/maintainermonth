const PlayLink = ({ href, children }) => {
  return (
    <a className="play-link" href={href} target="_blank" rel="noreferrer">
      <span className="play-link__icon"></span>{' '}
      <span className="play-link__text">{children}</span>
    </a>
  )
}

export default PlayLink
