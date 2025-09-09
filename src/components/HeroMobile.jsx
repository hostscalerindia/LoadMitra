import { useState } from 'react'
import { bannerMain } from '../assets'

const HeroMobile = () => {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <div className="relative h-[22vh] sm:hidden">
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
          <source src={bannerMain} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-2 py-1 w-full mt-[50px]">
          
          {/* Text Content - Ultra Compact Mobile */}
          <div className="max-w-2xl space-y-1 text-white">
            {/* Main Heading */}
            <h1 className="text-black font-bold leading-tight drop-shadow-lg" style={{fontSize: '0.6rem'}}>
              <span className="block">Deliver what Riders want: <span className='text-lightblue'>Live Tracking & Easy Booking</span></span>
            </h1>
            
            {/* Subheadings */}
            <div className="space-y-0.5">
              <p className="text-black leading-relaxed drop-shadow-md" style={{fontSize: '0.5rem'}}>
                Live Tracking & Easy Booking for Riders. Automated Tools for Drivers and Staff.
              </p>
            </div>
            
            {/* CTA Button */}
            <button className="bg-lightblue hover:bg-darkblue text-white font-semibold py-0.5 px-1.5 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 relative overflow-hidden group" style={{fontSize: '0.5rem'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="flex items-center space-x-0.5 relative z-10">
                <span>1-ON-1 DEMO</span>
              </div>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default HeroMobile
