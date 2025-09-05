import { img4 } from '../assets'

const Business = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Business Benefits Text */}
          <div className="space-y-8">
            {/* Category Label */}
            <div className="inline-block">
              <span className="text-lightblue text-para font-semibold">
                Supercharge your Sales Team
              </span>
            </div>
            
            {/* Main Heading */}
            <h3 className="text-heading font-bold text-darkblue leading-tight">
              Boost your Business with New <span className='text-lightblue'>Capabilities</span>
            </h3>
            
            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Wow existing customers</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Win new markets</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Empower your Sales Team</span>
              </div>
            </div>
          </div>

          {/* Right Column - Handshake Image with Plus Signs */}
          <div className="relative">
            {/* Background with Plus Signs */}
            <div className="absolute inset-0">
              {/* Scattered Plus Signs */}
              <div className="absolute top-8 left-8 w-4 h-4 text-gray-400 opacity-60">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4v16m8-8H4"/>
                </svg>
              </div>
              <div className="absolute top-16 left-16 w-3 h-3 text-red-400 opacity-60">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4v16m8-8H4"/>
                </svg>
              </div>
              <div className="absolute top-12 left-24 w-5 h-5 text-blue-400 opacity-50">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4v16m8-8H4"/>
                </svg>
              </div>
              <div className="absolute top-20 left-12 w-4 h-4 text-gray-300 opacity-40">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4v16m8-8H4"/>
                </svg>
              </div>
              <div className="absolute top-24 left-20 w-3 h-3 text-gray-400 opacity-30">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4v16m8-8H4"/>
                </svg>
              </div>
            </div>

            {/* Handshake Image */}
            <div className="relative z-10 flex justify-end">
              <img
                src={img4}
                alt="Business handshake agreement"
                className="w-full max-w-md h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Business
