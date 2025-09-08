import React from 'react'
import FirstHomeSection from '../components/FirstHomeSection'
import Banner from '../components/Banner'
import About from '../components/About'
import Dashboard from '../components/Dashboard'
import RecentLoads from '../components/RecentLoads'
import JourneySteps from '../components/JourneySteps'

const Home = () => {
  return (
    <div className="min-h-screen">
      <FirstHomeSection />
      <About />
      <RecentLoads />
      <Dashboard />
      <JourneySteps />
    </div>
  )
}

export default Home
