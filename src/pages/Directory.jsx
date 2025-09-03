import TransportDirectory from '../components/TransportDirectory'

const Directory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Transport & Logistics Directory
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-8">
            Find Your Perfect
            <span className="block">Transport Partner</span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Connect with <span className="font-semibold text-blue-600">21,551+ verified transporters</span>, 
            fleet owners, and logistics experts across India. 
            <span className="block mt-2">Get instant quotes, reviews, and contact information.</span>
          </p>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/60 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-3">21,551+</h3>
                <p className="text-gray-600 text-lg">Verified Transporters</p>
                <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent mx-auto rounded-full"></div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/60 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-3">799+</h3>
                <p className="text-gray-600 text-lg">Packers & Movers</p>
                <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-transparent mx-auto rounded-full"></div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/60 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-3">28+</h3>
                <p className="text-gray-600 text-lg">States Covered</p>
                <div className="mt-4 w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent mx-auto rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Search Highlight Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-8 border border-blue-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Find Your Transport Partner?</h3>
              <p className="text-gray-700 text-lg mb-6">
                Use the filters below to narrow down your search and find the perfect match for your logistics needs.
              </p>
              <div className="flex items-center justify-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Filter by Location</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span>Filter by Vehicle Type</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Filter by Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Directory Component */}
        <div className="relative">
          <TransportDirectory />
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

export default Directory
