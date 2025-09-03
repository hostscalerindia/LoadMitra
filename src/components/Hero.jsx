import { useState } from 'react'

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <div className="relative min-h-screen">
      {/* Full Width Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="/src/assets/images/banner-main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 w-full">
          
          {/* Text Content - Left Side */}
          <div className="max-w-2xl space-y-8 text-white">
            {/* Main Heading */}
            <h1 className="text-3xl lg:text-5xl text-black font-bold leading-tight drop-shadow-lg">
              <span className="block">Deliver what Riders</span>
              <span className="block">want: Live Tracking</span>
              <span className="block">& Easy Booking.</span>
            </h1>
            
            {/* Subheadings */}
            <div className="space-y-4">
              <p className="text-xl text-black leading-relaxed drop-shadow-md">
                Live Tracking & Easy Booking for Riders.
              </p>
              <p className="text-xl text-black leading-relaxed drop-shadow-md">
                Automated Tools for Drivers and Staff.
              </p>
            </div>
            
            {/* CTA Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg uppercase tracking-wide text-lg drop-shadow-lg">
              1-ON-1 DEMO
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero
