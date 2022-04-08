import '../styles/styles.scss'

import Layout from '../components/layout/Layout'
import { BackgroundProvider } from '../contexts/BackgroundContext'
import useViewportHeight from '../hooks/useViewportHeight'

function App({ Component, pageProps }) {
  useViewportHeight()

  return (
    <BackgroundProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BackgroundProvider>
  )
}

export default App
