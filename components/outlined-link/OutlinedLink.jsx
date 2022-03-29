const OutlinedLink = ({ href, children }) => {
  return (
    <a className="outlined-link" href={href} target="_blank" rel="noreferrer">
      <span className="outlined-link__icon"></span> {children}
    </a>
  )
}

export default OutlinedLink
