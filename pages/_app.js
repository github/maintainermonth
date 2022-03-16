import '../styles/styles.scss'

import Layout from '../components/layout/Layout'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
