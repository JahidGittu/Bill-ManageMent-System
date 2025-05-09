import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { AuthContext } from '../Provider/AuthProvider'
import Loading from '../Components/Loading'

const Route = () => {
  const { loading, balance } = useContext(AuthContext)

  if (loading) {
    return <Loading />
  }

  return (
    <div className='space-y-10'>
      <header>
        <nav>
          <Navbar balance={balance} />
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Route
