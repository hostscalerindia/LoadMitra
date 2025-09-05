import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Loader = () => {
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Show loader when route changes
    setLoading(true)
    
    // Hide loader after a short delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [location.pathname])

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinning Loader */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-lightblue/20 border-t-lightblue rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-darkblue/30 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <p className="text-darkblue font-semibold text-lg">Loading...</p>
          <p className="text-gray-600 text-sm mt-1">Please wait</p>
        </div>
        
        {/* Progress Dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-lightblue rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-lightblue rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-lightblue rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
