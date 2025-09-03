const Benefits = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Unlock Benefits for Every Stakeholder
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower Riders, Drivers & Staff
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Just the Image */}
          <div>
            <img 
              src="/src/assets/images/img1.png" 
              alt="Woman with mobile app" 
              className="w-full max-w-md h-auto object-cover rounded-lg"
            />
          </div>

          {/* Right Column - Benefits Text */}
          <div className="space-y-8">
            {/* Category Label */}
            <div className="inline-block">
              <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                Delight Riders
              </span>
            </div>
            
            {/* Main Heading */}
            <h3 className="text-3xl lg:text-4xl font-bold text-blue-900 leading-tight">
              Share Shuttle Booking & Tracking with Riders
            </h3>
            
            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Ride Booking and ETAs</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Exploration & Trip Planning</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Real-time Notifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
