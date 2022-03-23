import '../styles/styles.scss'

import Layout from '../components/layout/Layout'
import { BackgroundProvider } from '../contexts/BackgroundContext'

function App({ Component, pageProps }) {
  return (
    <BackgroundProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BackgroundProvider>
  )
}

export default App
