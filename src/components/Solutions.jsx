import { ico1, ico2, ico3 } from '../assets'

const Solutions = () => {
  return (
    <div className="relative py-10 bg-lightblue overflow-hidden">
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
        <div className="text-center mb-12">
          <h2 className="text-heading font-bold text-white mb-4">
            Flexible Solutions for Every Scenario
          </h2>
          
          {/* Separator Line */}
          <div className="w-24 h-0.5 bg-white mx-auto mb-4"></div>
          
          <p className="text-para text-white max-w-3xl mx-auto">
            From Fixed Routes to On-Demand Requests, we've got you covered
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Fixed-Route Transport */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src={ico1} 
                  alt="Fixed-Route Transport Icon" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Fixed-Route Transport
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
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
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src={ico2} 
                  alt="On-Demand Transport Icon" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                On-Demand Transport
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                Empower Riders to Book and Track Truck from their Smartphones.
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
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src={ico3} 
                  alt="Fleet Management Icon" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Fleet Management
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
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
