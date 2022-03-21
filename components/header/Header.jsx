import { useMemo } from 'react'
import Link from 'next/link'

import * as ROUTES from '../../common/routes'
import { getLiteral } from '../../common/i18n'
import useWindowSize from '../../hooks/useWindowSize'

import GitHubLogo from '../../public/icons/github-logo'
import IconCalendar from '../../public/icons/calendar'
import IconBooks from '../../public/icons/books'
import { BREAKPOINTS } from '../../common/constants'

const Header = () => {
  const { width } = useWindowSize()

  const isMobile = useMemo(() => {
    return width < BREAKPOINTS.MD
  }, [width])

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <Link href={ROUTES.HOME.path}>
            <a className="header__home-link">
              <GitHubLogo />
              {getLiteral(isMobile ? 'page:title-mobile' : 'page:title')}
            </a>
          </Link>

          <p className="header__chip">{getLiteral('page:date')}</p>
        </div>

        <nav className="header__navigation">
          <ul className="header__list">
            <li>
              <Link
                href={ROUTES.SCHEDULE.path}
                aria-label={getLiteral('navigation:schedule')}
              >
                <a className="header__link">
                  <IconCalendar />
                  <span className="header__link-text">
                    {getLiteral('navigation:schedule')}
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.RESOURCES.path}
                aria-label={getLiteral('navigation:resources')}
              >
                <a className="header__link">
                  <IconBooks />
                  <span className="header__link-text">
                    {getLiteral('navigation:resources')}
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
