import TransportDirectory from '../components/TransportDirectory'

const Directory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lightblue/10 via-white to-darkblue/5 pt-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-lightblue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-darkblue/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-20">
          {/* Main Heading */}
          <h1 className="text-heading font-bold text-darkblue mb-8 leading-tight">
            Find Your Perfect <span className='text-lightblue'>Transport Partner</span>
          </h1>
          
          {/* Separator Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-lightblue to-darkblue mx-auto mb-8 rounded-full"></div>
          
          {/* Description */}
          <p className="text-para max-w-4xl mx-auto leading-relaxed">
            Connect with <span className="font-semibold text-darkblue">21,551+ verified transporters</span>, 
            fleet owners, and logistics experts across India. 
            <span className="block mt-3">Get instant quotes, reviews, and contact information.</span>
          </p>
            </div>
            
        {/* Main Container with Search and Directory */}
        <div className="bg-blue-50 shadow-lg rounded-[10px] border border-lightblue/30 p-10">
          {/* Directory Component - Filters and Driver List */}
          <TransportDirectory />
        </div>
      </div>
    </div>
  )
}

export default Directory
