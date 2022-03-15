import "../styles/globals.css"
import MainLayout from "../ui/layout/MainLayout"

import "../public/stylesheets/style.scss"

function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default App
