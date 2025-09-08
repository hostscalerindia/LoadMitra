const Platform = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center">
        {/* Main Heading */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold text-neutral-800 leading-tight mb-6">
            <span className="block">Our</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Platform
            </span>
          </h1>
        </div>

        {/* Platform Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Dashboard */}
          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-400 transform hover:scale-105 hover:-translate-y-2 border border-neutral-100">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-3">Dashboard</h3>
            <p className="text-neutral-600 text-para">Comprehensive overview of all Truck operations</p>
          </div>

          {/* Analytics */}
          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-400 transform hover:scale-105 hover:-translate-y-2 border border-neutral-100">
            <div className="w-16 h-16 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-3">Analytics</h3>
            <p className="text-neutral-600 text-para">Deep insights into performance metrics</p>
          </div>

          {/* Reports */}
          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-400 transform hover:scale-105 hover:-translate-y-2 border border-neutral-100">
            <div className="w-16 h-16 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-3">Reports</h3>
            <p className="text-neutral-600 text-para">Detailed reports and documentation</p>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-400 transform hover:scale-105 hover:-translate-y-2 border border-neutral-100">
            <div className="w-16 h-16 bg-gradient-to-r from-success-400 to-success-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-3">Settings</h3>
            <p className="text-neutral-600 text-para">Customize your platform experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Platform
