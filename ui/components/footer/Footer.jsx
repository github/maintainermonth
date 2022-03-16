import { getLiteral } from '../../../common/i18n'

const Footer = () => {
  return (
    <footer className="footer">
      <p>{getLiteral('footer:copyright')}</p>

      <a href={getLiteral('footer:terms-url')} target="_blank" rel="noreferrer">
        {getLiteral('footer:terms-title')}
      </a>
      <a
        href={getLiteral('footer:privacy-url')}
        target="_blank"
        rel="noreferrer"
      >
        {getLiteral('footer:privacy-title')}
      </a>
      <a
        href={`mailto:${getLiteral('footer:email')}`}
        target="_blank"
        rel="noreferrer"
      >
        {getLiteral('footer:email')}
      </a>
      <a
        href={getLiteral('footer:repository-url')}
        target="_blank"
        rel="noreferrer"
      >
        {getLiteral('footer:repository-title')}
      </a>
      <a href={getLiteral('footer:coc-url')} target="_blank" rel="noreferrer">
        {getLiteral('footer:coc-title')}
      </a>
    </footer>
  )
}

export default Footer
