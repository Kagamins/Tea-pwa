import Navibar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navibar />
      <main>{children}</main>
      <Footer />
    </>
  )
}