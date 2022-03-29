import clsx from 'clsx'

import { useBackground } from '../../contexts/BackgroundContext'

import Footer from '../footer/Footer'
import Header from '../header/Header'

import Filter from './Filter'

const Layout = ({ children }) => {
  const { animationStep } = useBackground()

  const classes = clsx('layout', { [`step-${animationStep}`]: true })

  return (
    <>
      <Filter />
      <div className={classes}>
        <div className="layout__content">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
