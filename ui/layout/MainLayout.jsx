import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
