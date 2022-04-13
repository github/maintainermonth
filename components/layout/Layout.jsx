import clsx from 'clsx'

import { useBackground } from '../../contexts/BackgroundContext'

import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = ({ children }) => {
  const { animationStep } = useBackground()

  const classes = clsx('layout', { [`step-${animationStep}`]: true })

  return (
    <div className={classes}>
      <div className="layout__bubbles">
        <span className="layout__back-bubble" />
        <span className="layout__front-bubble" />
      </div>

      <div className="layout__content">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
