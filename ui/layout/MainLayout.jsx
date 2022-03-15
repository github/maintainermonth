import Link from 'next/link'

import { getRelativeURL } from '../../common/routes'
import { getLiteral } from '../../common/i18n'

const MainLayout = ({ children }) => {
  return (
    <>
      <Link href={getRelativeURL('/')}>{`${getLiteral(
        'page:title',
      )} ${getLiteral('page:date')}`}</Link>
      <nav>
        <ul>
          <li>
            <Link href={getRelativeURL('/schedule')}>
              {getLiteral('navigation:schedule')}
            </Link>
          </li>
          <li>
            <Link href={getRelativeURL('/resources')}>
              {getLiteral('navigation:resources')}
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        <p>{getLiteral('footer:copyright')}</p>

        <a
          href={getLiteral('footer:terms-url')}
          target="_blank"
          rel="noreferrer"
        >
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
    </>
  )
}

export default MainLayout
