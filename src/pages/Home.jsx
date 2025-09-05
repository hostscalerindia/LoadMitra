import React from 'react'
import FirstHomeSection from '../components/FirstHomeSection'
import Banner from '../components/Banner'
import About from '../components/About'
import Dashboard from '../components/Dashboard'
import RecentLoads from '../components/RecentLoads'

const Home = () => {
  return (
    <div className="min-h-screen">
      <FirstHomeSection />
      {/* <Banner /> */}
      <About />
      <RecentLoads />
      <Dashboard />
    </div>
  )
}

export default Home
