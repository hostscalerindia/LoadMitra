import { img3 } from '../assets'

const Automation = () => {
  return (
    <div className="py-24 bg-lightblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Just the Image */}
          <div>
            <img
              src={img3}
              alt="Automation interface"
              className="w-full max-w-lg h-auto object-cover rounded-lg"
            />
          </div>

          {/* Right Column - Automation Benefits Text */}
          <div className="space-y-8">
            {/* Category Label */}
            <div className="inline-block">
              <span className="text-white text-para font-semibold">
                Efficiency for Staff
              </span>
            </div>
            
            {/* Main Heading */}
            <h3 className="text-heading font-bold text-white leading-tight">
              Automate your Shuttle Operations
            </h3>
            
            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-darkblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-para text-white">Automated Scheduling & Dispatch</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-darkblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-para text-white">Dynamic Route Planning</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-darkblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-para text-white">Customizable Automation Rules</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Automation
