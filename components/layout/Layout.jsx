import clsx from 'clsx'

import { useBackground } from '../../contexts/BackgroundContext'

import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = ({ children }) => {
  const { animationStep } = useBackground()

  const classes = clsx('layout', { [`step-${0}`]: true })

  return (
    <div className={classes}>
      <a className="skip-to-content" href="#main-content">
        Skip to main content
      </a>

      <div className="layout__bubbles" aria-hidden="true">
        <span className="layout__back-bubble" />
        <span className="layout__front-bubble" />
      </div>

      <div className="layout__content">
        <Header />
        <main id="main-content" role="main" tabIndex="-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
