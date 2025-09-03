import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import Dashboard from '../components/Dashboard'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <About />
      <Dashboard />
    </div>
  )
}

export default Home
