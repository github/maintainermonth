/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import * as ROUTES from '../../common/routes'

import { getLiteral } from '../../common/i18n'

import IconTwitter from '../../public/icons/twitter'
import IconFacebook from '../../public/icons/facebook'
import IconYouTube from '../../public/icons/youtube'
import IconLinkedIn from '../../public/icons/linkedin'
import IconGitHub from '../../public/icons/github'

const Footer = () => {
  const { pathname } = useRouter()

  const isHome = useMemo(() => pathname === ROUTES.HOME.path, [pathname])

  const classes = clsx('footer', { 'is-home': isHome })

  return (
    <footer className={classes}>
      <div className="footer__copyright">
        <a
          className="footer__link"
          href={getLiteral('footer:repository-url')}
          target="_blank"
          rel="noreferrer"
        >
          {getLiteral('footer:repository-title')}
        </a>
        <span className="footer__divider" />

        <p>{getLiteral('footer:copyright')}</p>
      </div>

      <div className="footer__links">
        <div className="footer__social">
          <a
            className="footer__button"
            href={getLiteral('footer:twitter-url')}
            target="_blank"
            rel="noreferrer"
            aria-label={getLiteral('footer:twitter-label')}
          >
            <span aria-hidden="true">
              <IconTwitter />
            </span>
          </a>
          <a
            className="footer__button"
            href={getLiteral('footer:facebook-url')}
            target="_blank"
            rel="noreferrer"
            aria-label={getLiteral('footer:facebook-label')}
          >
            <span aria-hidden="true">
              <IconFacebook />
            </span>
          </a>
          <a
            className="footer__button"
            href={getLiteral('footer:youtube-url')}
            target="_blank"
            rel="noreferrer"
            aria-label={getLiteral('footer:youtube-label')}
          >
            <span aria-hidden="true">
              <IconYouTube />
            </span>
          </a>
          <a
            className="footer__button"
            href={getLiteral('footer:linkedin-url')}
            target="_blank"
            rel="noreferrer"
            aria-label={getLiteral('footer:linkedin-label')}
          >
            <span aria-hidden="true">
              <IconLinkedIn />
            </span>
          </a>
          <a
            className="footer__button"
            href={getLiteral('footer:github-url')}
            target="_blank"
            rel="noreferrer"
            aria-label={getLiteral('footer:github-label')}
          >
            <span aria-hidden="true">
              <IconGitHub />
            </span>
          </a>
        </div>

        <a
          className="footer__link"
          href={getLiteral('footer:privacy-url')}
          target="_blank"
          rel="noreferrer"
        >
          {getLiteral('footer:privacy-title')}
        </a>
      </div>
    </footer>
  )
}

export default Footer
