import { movingTruck } from '../assets'

const ShuttleMapReplay = () => {
  return (
    <div className="py-6 sm:py-8 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Content - Centered at Top */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          {/* Main Heading */}
          <h3 className="text-2xl sm:text-3xl lg:text-heading font-bold text-darkblue leading-tight mb-3 sm:mb-4">
            Truck <span className='text-lightblue'>Replay</span>
          </h3>
          
          {/* Description */}
          <p className="text-sm sm:text-base lg:text-para leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
            Track and replay Truck routes with real-time monitoring and historical data analysis.
          </p>
        </div>

        {/* Map Frame with Video */}
        <div className="relative w-full">
          {/* Frame Container */}
          <div className="relative bg-gray-100 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg border-2 border-gray-200">
            {/* Top Navigation Bar */}
            <div className="bg-lightblue rounded-lg sm:rounded-t-xl p-2 sm:p-3 mb-2 sm:mb-3 flex items-center justify-between">
              {/* Left - Logo */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-white font-semibold text-xs sm:text-sm">Truck System</span>
              </div>
              
              {/* Center - Truck Replay Button */}
              <div className="flex items-center space-x-1 sm:space-x-2 bg-white px-3 sm:px-6 py-1 sm:py-2 rounded-full">
                <svg className="w-3 h-3 sm:w-5 sm:h-5 text-lightblue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span className="text-lightblue font-semibold text-xs sm:text-sm hidden sm:block">Truck Replay</span>
              </div>
              
              {/* Right - Icons */}
              <div className="flex items-center space-x-1 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 13h6v-2H4v2zM4 7h6V5H4v2z" />
                  </svg>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-xs sm:text-sm">JK</span>
                </div>
              </div>
            </div>
            
            {/* Video Container */}
            <div className="relative bg-gray-50 rounded-lg sm:rounded-xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src={movingTruck} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay Elements to simulate map interface */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-sm rounded-md sm:rounded-lg p-2 sm:p-3 shadow-lg">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Current Location</span>
                </div>
              </div>
              
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-lightblue/90 backdrop-blur-sm rounded-md sm:rounded-lg p-2 sm:p-3 shadow-lg">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold text-white hidden sm:block">Truck Route</span>
                </div>
              </div>
              
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-white/90 backdrop-blur-sm rounded-md sm:rounded-lg p-2 sm:p-3 shadow-lg">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Live Tracking</span>
                </div>
              </div>
              
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-darkblue/90 backdrop-blur-sm rounded-md sm:rounded-lg p-2 sm:p-3 shadow-lg">
                <div className="text-right">
                  <div className="text-white text-xs sm:text-sm font-semibold">ETA</div>
                  <div className="text-white text-sm sm:text-lg font-bold">03 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShuttleMapReplay
