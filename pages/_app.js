import '../styles/styles.scss'

import MainLayout from '../ui/layout/MainLayout'

function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default App
