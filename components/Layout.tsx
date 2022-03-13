import type { NextPage } from 'next'
import Navbar from './Navbar'

const Layout: NextPage = ({ children }) => {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default Layout