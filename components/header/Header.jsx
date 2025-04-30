import { useMemo, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import * as ROUTES from '../../common/routes'
import { getLiteral } from '../../common/i18n'
import useWindowSize from '../../hooks/useWindowSize'

import GitHubLogo from '../../public/icons/github-logo'
import IconCalendar from '../../public/icons/calendar'
import IconBooks from '../../public/icons/books'
import IconBell from '../../public/icons/bell'
import BoxGift from '../../public/icons/box-gift'
import { BREAKPOINTS } from '../../common/constants'

const Header = () => {
  const { pathname } = useRouter()
  const { width } = useWindowSize()
  const year = Number(pathname.split('/')[1]) > 404 ? Number(pathname.split('/')[1]) : null

  const isHome = useMemo(() => pathname === ROUTES.HOME.path, [pathname])
  const [hideYear, setHideYear] = useState(isHome)

  const yearClasses = clsx('header__chip', { hide: hideYear })

  const isMobile = useMemo(() => width < BREAKPOINTS.SM, [width])

  useEffect(() => {
    if (!isHome) {
      setHideYear(false)
      return
    }

    setHideYear(true)

    const handleScroll = (event) => {
      const clientHeight = event.target.scrollingElement.clientHeight
      const scrollTop = event.target.scrollingElement.scrollTop

      const ifHalfScreenOrMore = scrollTop > clientHeight / 2

      setHideYear(!ifHalfScreenOrMore)
    }

    setHideYear(true)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHome])

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <Link href={ROUTES.HOME.path} className="header__home-link">
            <GitHubLogo />
            {getLiteral(isMobile ? 'page:title-mobile' : 'page:title')}
          </Link>

          <p className={yearClasses}>{year || getLiteral('page:date')}</p>
        </div>

        <nav className="header__navigation">
          <ul className="header__list">
            <li>
              <Link
                href={ROUTES.NEWS.getPath(year)}
                aria-label={getLiteral('navigation:news')}
                className={clsx('header__link', {
                  ['is-active']: pathname === ROUTES.NEWS.getPath(year),
                })}
              >
                <IconBell />
                <span className="header__link-text">
                  {getLiteral('navigation:news')}
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.PARTNER_PACK.getPath(year)}
                aria-label={getLiteral('navigation:partner-pack')}
                className={clsx('header__link', {
                  ['is-active']: pathname === ROUTES.PARTNER_PACK.getPath(year),
                })}
              >
                <BoxGift />
                <span className="header__link-text">
                  {getLiteral('navigation:partner-pack')}
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.SCHEDULE.getPath(year)}
                aria-label={getLiteral('navigation:schedule')}
                className={clsx('header__link', {
                  ['is-active']: pathname === ROUTES.SCHEDULE.getPath(year),
                })}
              >
                <IconCalendar />
                <span className="header__link-text">
                  {getLiteral('navigation:schedule')}
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.LIBRARY.getPath(year)}
                aria-label={getLiteral('navigation:library')}
                className={clsx('header__link', {
                  ['is-active']: pathname === ROUTES.LIBRARY.getPath(year),
                })}
              >
                <IconBooks />
                <span className="header__link-text">
                  {getLiteral('navigation:library')}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header >
  )
}

export default Header
