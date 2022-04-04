const PlayLink = ({ href, children }) => {
  return (
    <a className="play-link" href={href} target="_blank" rel="noreferrer">
      <span className="play-link__icon"></span> {children}
    </a>
  )
}

export default PlayLink
