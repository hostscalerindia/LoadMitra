const Solutions = () => {
  return (
    <div className="relative py-24 bg-lightblue overflow-hidden">
      {/* Wavy Background Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <pattern id="wavyLines" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0,100 Q50,50 100,100 T200,100" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.3"/>
              <path d="M0,150 Q50,100 100,150 T200,150" stroke="#60A5FA" strokeWidth="1.5" fill="none" opacity="0.2"/>
              <path d="M0,200 Q50,150 100,200 T200,200" stroke="#93C5FD" strokeWidth="1" fill="none" opacity="0.15"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wavyLines)"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold text-white mb-6">
            Flexible Solutions for Every Scenario
          </h2>
          
          {/* Separator Line */}
          <div className="w-24 h-0.5 bg-white mx-auto mb-6"></div>
          
          <p className="text-para text-white max-w-3xl mx-auto">
            From Fixed Routes to On-Demand Requests, we've got you covered
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Fixed-Route Transport */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 80 80" fill="none">
                  {/* Location Pins */}
                  <circle cx="20" cy="20" r="6" fill="#3B82F6"/>
                  <circle cx="50" cy="35" r="6" fill="#3B82F6"/>
                  <circle cx="60" cy="60" r="6" fill="#3B82F6"/>
                  {/* Dotted Path */}
                  <path d="M20,20 L50,35 L60,60" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="4,4" fill="none"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Fixed-Route Transport
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Seamlessly Create Routes and Delight Riders with Tracking.
              </p>
              
              {/* Button */}
              <button className="bg-lightblue hover:bg-darkblue text-white font-semibold py-2.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 text-para relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="flex items-center space-x-2 relative z-10">
                  <span>LEARN MORE →</span>
                </div>
              </button>
            </div>
          </div>

          {/* Card 2: On-Demand Transport */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 80 80" fill="none">
                  {/* Smartphone */}
                  <rect x="25" y="15" width="30" height="50" rx="5" fill="#9CA3AF" stroke="#6B7280" strokeWidth="2"/>
                  {/* Screen */}
                  <rect x="27" y="17" width="26" height="46" rx="3" fill="#E0F2FE"/>
                  {/* Map Pin */}
                  <circle cx="40" cy="35" r="8" fill="#F97316"/>
                  <path d="M40,43 L40,50 L36,46 L44,46 Z" fill="#F97316"/>
                  {/* Plus Icon */}
                  <circle cx="55" cy="25" r="4" fill="#F97316"/>
                  <path d="M55,23 L55,27 M53,25 L57,25" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                On-Demand Transport
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Empower Riders to Book and Track Shuttles from their Smartphones.
              </p>
              
              {/* Button */}
              <button className="bg-lightblue hover:bg-darkblue text-white font-semibold py-2.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 text-para relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="flex items-center space-x-2 relative z-10">
                  <span>LEARN MORE →</span>
                </div>
              </button>
            </div>
          </div>

          {/* Card 3: Fleet Management */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 80 80" fill="none">
                  {/* Bus/Shuttle */}
                  <rect x="15" y="35" width="50" height="25" rx="3" fill="#9CA3AF" stroke="#6B7280" strokeWidth="2"/>
                  {/* Windows */}
                  <rect x="20" y="38" width="8" height="8" rx="1" fill="#E0F2FE"/>
                  <rect x="32" y="38" width="8" height="8" rx="1" fill="#E0F2FE"/>
                  <rect x="44" y="38" width="8" height="8" rx="1" fill="#E0F2FE"/>
                  {/* Wheels */}
                  <circle cx="25" cy="60" r="4" fill="#374151"/>
                  <circle cx="55" cy="60" r="4" fill="#374151"/>
                  {/* Cloud/Alert Icon */}
                  <circle cx="40" cy="20" r="8" fill="#F97316"/>
                  <path d="M40,16 L40,24 M36,20 L44,20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Fleet Management
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Optimize Your Fleet Operations with Real-Time Insights and Analytics.
              </p>
              
              {/* Button */}
              <button className="bg-lightblue hover:bg-darkblue text-white font-semibold py-2.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 text-para relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="flex items-center space-x-10">
                  <span>LEARN MORE →</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions
