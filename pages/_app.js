import "../styles/globals.css"
import MainLayout from "../ui/layout/MainLayout"

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
