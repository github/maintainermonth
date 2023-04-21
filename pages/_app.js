import '../styles/styles.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client';

import smoothscroll from 'smoothscroll-polyfill'

import Layout from '../components/layout/Layout'
import { BackgroundProvider } from '../contexts/BackgroundContext'
import useViewportHeight from '../hooks/useViewportHeight'

function App({ Component, pageProps }) {
  useViewportHeight()

  const router = useRouter()

  useEffect(() => {
    Fathom.load('GSJNLFML', {

      includedDomains: ['maintainermonth.github.com'],

    });
    smoothscroll.polyfill()

    const handleRouteChange = () => {
      Fathom.trackPageview();
      window.scroll({
        top: 0,
        left: 0,
      })
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BackgroundProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BackgroundProvider>
  )
}

export default App
