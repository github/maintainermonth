import Link from 'next/link'

import { getRelativeURL } from '../../common/routes'
import { getLiteral } from '../../common/i18n'

const Header = () => {
  return (
    <header className="header">
      <Link href={getRelativeURL('/')}>
        <a className="header__logo">{`${getLiteral('page:title')} ${getLiteral(
          'page:date',
        )}`}</a>
      </Link>

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
