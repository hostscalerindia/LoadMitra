import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const dropdownRefs = useRef({})
  const timeoutRefs = useRef({})

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    // {
    //   name: 'Platform',
    //   path: '/platform',
    //   items: [
    //     { name: 'Dashboard', path: '/platform/dashboard' },
    //     { name: 'Analytics', path: '/platform/analytics' },
    //     { name: 'Reports', path: '/platform/reports' },
    //     { name: 'Settings', path: '/platform/settings' }
    //   ]
    // },
    // {
    //   name: 'Industries',
    //   path: '/industries',
    //   items: [
    //     { name: 'Hotels', path: '/industries/hotels' },
    //     { name: 'Resorts', path: '/industries/resorts' },
    //     { name: 'Theme Parks', path: '/industries/theme-parks' },
    //     { name: 'Events and Conferences', path: '/industries/events' },
    //     { name: 'Car Rental & Parking', path: '/industries/car-rental' },
    //     { name: 'Crew Transportation', path: '/industries/crew' },
    //     { name: 'Corporate', path: '/industries/corporate' },
    //     { name: 'University Campus', path: '/industries/university' }
    //   ]
    // },
    // {
    //   name: 'Company',
    //   path: '/company',
    //   items: [
    //     { name: 'About Us', path: '/about' },
    //     { name: 'Contact', path: '/contact' },
    //     { name: 'Careers', path: '/careers' },
    //     { name: 'Blog', path: '/blog' }
    //   ]
    // }
  ]

  const handleMouseEnter = (dropdownName) => {
    // Clear any existing timeout
    if (timeoutRefs.current[dropdownName]) {
      clearTimeout(timeoutRefs.current[dropdownName])
    }
    setActiveDropdown(dropdownName)
  }

  const handleMouseLeave = (dropdownName) => {
    // Add a small delay before closing the dropdown
    timeoutRefs.current[dropdownName] = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // 150ms delay
  }

  const isActive = (path) => location.pathname === path

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(timeoutRefs.current).forEach(timeout => {
        if (timeout) clearTimeout(timeout)
      })
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200' 
        : 'bg-transparent backdrop-blur-md border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group cursor-pointer">
              <img 
                src="/src/assets/images/logoimage.png" 
                alt="TrackMyLoad Logo" 
                className="h-[140px] w-[140px]"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Home Link */}
            <Link 
              to="/" 
              className={`px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 relative group rounded-xl ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50 shadow-sm border border-blue-200' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 hover:border-blue-200'
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Home</span>
              </div>
              <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full ${
                isActive('/') ? 'w-full bg-blue-600' : 'w-0 bg-blue-600'
              }`}></span>
            </Link>

            {/* Track Link */}
            <Link 
              to="/track" 
              className={`px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 relative group rounded-xl ${
                isActive('/track') 
                  ? 'text-blue-600 bg-blue-50 shadow-sm border border-blue-200' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 hover:border-blue-200'
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4-2V5l-4-2m-6 4V4l4 2" />
                </svg>
                <span>Track</span>
              </div>
              <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full ${
                isActive('/track') ? 'w-full bg-blue-600' : 'w-0 bg-blue-600'
              }`}></span>
            </Link>

            {/* Directory Link */}
            <Link 
              to="/directory" 
              className={`px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 relative group rounded-xl ${
                isActive('/directory') 
                  ? 'text-blue-600 bg-blue-50 shadow-sm border border-blue-200' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 hover:border-blue-200'
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>Directory</span>
              </div>
              <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full ${
                isActive('/directory') ? 'w-full bg-blue-600' : 'w-0 bg-blue-600'
              }`}></span>
            </Link>

            {/* Dropdown Navigation Items */}
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                ref={el => dropdownRefs.current[item.name] = el}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={() => handleMouseLeave(item.name)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 relative group rounded-xl ${
                    isActive(item.path) 
                      ? 'text-blue-600 bg-blue-50 shadow-sm border border-blue-200' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 hover:border-blue-200'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span>{item.name}</span>
                    <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full ${
                    isActive(item.path) ? 'w-full bg-blue-600' : 'w-0 bg-blue-600'
                  }`}></span>
                </Link>
                
                {/* Dropdown Menu */}
                {activeDropdown === item.name && (
                  <div 
                    className="absolute z-100 left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={() => handleMouseLeave(item.name)}
                  >
                    <div className="py-2">
                      {item.items.map((subItem, index) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-6 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-300 hover:pl-8 border-l-2 border-transparent hover:border-blue-500"
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Login Button */}
          <div className="flex items-center">
            <button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold py-2.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 text-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="flex items-center space-x-2 relative z-10">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Log In</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
