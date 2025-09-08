import TransportDirectory from '../components/TransportDirectory'

const Directory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lightblue/10 via-white to-darkblue/5 pt-16 sm:pt-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-32 h-32 sm:w-72 sm:h-72 bg-lightblue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-darkblue/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-2 sm:py-4 lg:py-6">
        {/* Page Header */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          {/* Main Heading */}
          <h1 className="text-heading font-bold text-darkblue mb-2 sm:mb-3 leading-tight px-2">
            Find Your Perfect <span className='text-lightblue'>Transport Partner</span>
          </h1>
          
          {/* Separator Line */}
          <div className="w-12 sm:w-16 lg:w-20 h-0.5 bg-gradient-to-r from-lightblue to-darkblue mx-auto mb-2 sm:mb-3 rounded-full"></div>
          
          {/* Description */}
          <p className="text-para max-w-3xl mx-auto leading-relaxed px-4">
            Connect with <span className="font-semibold text-darkblue">21,551+ verified transporters</span>, 
            fleet owners, and logistics experts across India. 
            <span className="block mt-1 sm:mt-2">Get instant quotes, reviews, and contact information.</span>
          </p>
        </div>
            
        {/* Directory Component - Filters and Driver List */}
        <TransportDirectory />
      </div>
    </div>
  )
}

export default Directory
