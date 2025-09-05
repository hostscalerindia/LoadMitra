import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logoimage } from '../assets'

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const dropdownRefs = useRef({})
  const timeoutRefs = useRef({})

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
    if (timeoutRefs.current[dropdownName]) {
      clearTimeout(timeoutRefs.current[dropdownName])
    }
    setActiveDropdown(dropdownName)
  }

  const handleMouseLeave = (dropdownName) => {
    timeoutRefs.current[dropdownName] = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const isActive = (path) => location.pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

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
          <div className="flex items-center">
            <Link to="/" className="flex items-center group cursor-pointer" onClick={closeMobileMenu}>
              <div className="relative">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 border-2 border-transparent border-t-lightblue/60 border-r-darkblue/40 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
                {/* Middle pulsing ring */}
                <div className="absolute inset-1.5 border-2 border-lightblue/40 rounded-full animate-ping"></div>
                {/* Inner glow effect */}
                <div className="absolute inset-3 bg-gradient-to-r from-lightblue/40 via-blue-400/50 to-lightblue/40 rounded-full blur-lg animate-pulse"></div>
                {/* Sparkle effects */}
                <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 left-0.5 w-0.5 h-0.5 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                {/* Logo with enhanced effects */}
                <img 
                  src={logoimage} 
                  alt="LoadMitra Logo" 
                  className="relative h-[120px] w-[120px] transition-all duration-300 group-hover:scale-110 drop-shadow-2xl filter brightness-110 contrast-110 saturate-110"
                />
                {/* Shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 rounded-full"></div>
                {/* Floating particles */}
                <div className="absolute -top-0.5 -right-0.5 w-0.5 h-0.5 bg-lightblue rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-darkblue rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group rounded-lg ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50 shadow-md border-2 border-blue-300 ring-2 ring-blue-200' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/70 hover:border-blue-200 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Home</span>
              </div>
            </Link>

            <Link 
              to="/track" 
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group rounded-lg ${
                isActive('/track') 
                  ? 'text-blue-600 bg-blue-50 shadow-md border-2 border-blue-300 ring-2 ring-blue-200' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/70 hover:border-blue-200 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4-2V5l-4-2m-6 4V4l4 2" />
                </svg>
                <span>Track</span>
              </div>
            </Link>

            <Link 
              to="/directory" 
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group rounded-lg ${
                isActive('/directory') 
                  ? 'text-blue-600 bg-blue-50 shadow-md border-2 border-blue-300 ring-2 ring-blue-200' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/70 hover:border-blue-200 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>Directory</span>
              </div>
            </Link>

            {/* {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                ref={el => dropdownRefs.current[item.name] = el}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={() => handleMouseLeave(item.name)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-2.5 text-para font-semibold transition-all duration-300 hover:scale-105 relative group rounded-xl ${
                    isActive(item.path) 
                      ? 'text-blue-600 bg-blue-50 shadow-sm border border-lightblue' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 hover:border-lightblue'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span>{item.name}</span>
                    <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </Link>
                
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
                          className="block px-6 py-3 text-para text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-300 hover:pl-8 border-l-2 border-transparent hover:border-blue-500"
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))} */}
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-lightblue hover:bg-darkblue text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 border border-white/20 text-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="flex items-center space-x-1.5 relative z-10">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Log In</span>
              </div>
            </button>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link 
              to="/" 
              className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50 border-2 border-blue-300 ring-2 ring-blue-200 shadow-md' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/70 hover:border-blue-200'
              }`}
              onClick={closeMobileMenu}
            >
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Home</span>
              </div>
            </Link>

            <Link 
              to="/track" 
              className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive('/track') 
                  ? 'text-blue-600 bg-blue-50 border-2 border-blue-300 ring-2 ring-blue-200 shadow-md' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/70 hover:border-blue-200'
              }`}
              onClick={closeMobileMenu}
            >
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4-2V5l-4-2m-6 4V4l4 2" />
                </svg>
                <span>Track</span>
              </div>
            </Link>

            <Link 
              to="/directory" 
              className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive('/directory') 
                  ? 'text-blue-600 bg-blue-50 border-2 border-blue-300 ring-2 ring-blue-200 shadow-md' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/70 hover:border-blue-200'
              }`}
              onClick={closeMobileMenu}
            >
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>Directory</span>
              </div>
            </Link>

            {navItems.map((item) => (
              <div key={item.name} className="space-y-2">
                <div className="px-4 py-3 text-para font-semibold text-gray-700 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="pl-6 space-y-1">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-300"
                      onClick={closeMobileMenu}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <button className="w-full bg-lightblue hover:bg-darkblue text-white font-medium py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white/20 text-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="flex items-center justify-center space-x-1.5 relative z-10">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Log In</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
