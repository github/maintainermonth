import Link from "next/link"

const MainLayout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>{/* <li><Link href={`/post/${slug}`}></li> */}</ul>
      </nav>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}

export default MainLayout
