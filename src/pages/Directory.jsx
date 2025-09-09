import TransportDirectory from '../components/TransportDirectory'

const Directory = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Professional Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Driver Directory
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Find verified drivers and transporters across India. Get instant quotes and connect directly.
            </p>
          </div>
        </div>
      </div>

      {/* Directory Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <TransportDirectory />
      </div>
    </div>
  )
}

export default Directory
