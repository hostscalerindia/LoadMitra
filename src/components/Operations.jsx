import { img2 } from '../assets'

const Operations = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Category Label */}
            <div className="inline-block">
              <span className="text-lightblue text-para font-semibold">
                Complete Visibility for Managers
              </span>
            </div>
            
            {/* Main Heading */}
            <h3 className="text-heading font-bold text-darkblue leading-tight">
              Monitor Operations in Real-Time
            </h3>
            
            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-para text-gray">Ride Monitoring and Dispatch</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-para text-gray">Shuttle Maintenance & Safety Alerts</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-para text-gray">Reports & Analytics</span>
              </div>
            </div>
          </div>

          {/* Right Column - Just the Image */}
          <div className="flex justify-end">
            <img 
              src={img2} 
              alt="Operations monitoring" 
              className="w-full max-w-md h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Operations
