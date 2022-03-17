import Link from 'next/link'

import { getRelativeURL } from '../../common/routes'
import { getLiteral } from '../../common/i18n'

import GitHubLogo from '../../public/icons/github-logo'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link href={getRelativeURL('/')}>
          <a className="header__link">
            <GitHubLogo />
            {getLiteral('page:title')}
          </a>
        </Link>

        <p className="header__chip">{getLiteral('page:date')}</p>
      </div>

      <nav className="header__navigation">
        <ul className="header__list">
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
    </header>
  )
}

export default Header
