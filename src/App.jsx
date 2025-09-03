import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { Home, Platform, About, Track, Directory } from './pages'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track" element={<Track />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
