import { useState } from 'react'

const TransportDirectory = () => {
  const [selectedCategory, setSelectedCategory] = useState('transporter')
  const [selectedTypes, setSelectedTypes] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('top-result')
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    { id: 'transporter', name: 'Transporter', count: 21551 },
    { id: 'packers-movers', name: 'Packers And Movers', count: 799 }
  ]

  const transporterTypes = [
    { id: 'fleet-owner', name: 'Fleet Owner', count: 12868 },
    { id: 'transport-contractor', name: 'Transport Contractor', count: 8859 },
    { id: 'commission-agent', name: 'Commission Agent', count: 7974 },
    { id: 'transport-broker', name: 'Transport Broker', count: 1066 },
    { id: 'logistics', name: 'Logistics Transporters', count: 273 }
  ]

  const transporters = [
    {
      id: 1,
      name: 'Amit Singh',
      company: 'Amit Singh Transport',
      contactPerson: 'Amit Singh',
      address: 'Mumbai, Maharashtra, India - 400001',
      rating: 4.5,
      verified: true,
      image: '/placeholder-avatar.png'
    },
    {
      id: 2,
      name: 'Safar Cargo Logistics',
      company: 'Safar Cargo Logistics Pvt Ltd',
      contactPerson: 'Rajesh Kumar',
      address: 'Delhi, Delhi, India - 110001',
      rating: 4.8,
      verified: true,
      image: '/placeholder-logo.png'
    },
    {
      id: 3,
      name: 'Sachin Mane',
      company: 'STEEL AND PIPES',
      contactPerson: 'Sachin Mane',
      address: 'Pune, Maharashtra, India - 411001',
      rating: 4.2,
      verified: true,
      image: '/placeholder-company.png'
    },
    {
      id: 4,
      name: 'Satinder Singh Padam',
      company: 'Padam Transport Services',
      contactPerson: 'Satinder Singh',
      address: 'Chandigarh, Punjab, India - 160001',
      rating: 4.6,
      verified: true,
      image: '/placeholder-avatar.png'
    }
  ]

  const handleTypeToggle = (typeId) => {
    setSelectedTypes(prev => 
      prev.includes(typeId) 
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    )
  }

  const clearFilters = () => {
    setSelectedCategory('transporter')
    setSelectedTypes([])
    setSearchQuery('')
  }

  return (
    <div className="space-y-6">
      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full flex items-center justify-between px-6 py-4 bg-white rounded-2xl shadow-lg border border-gray-200"
        >
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span className="text-lg font-semibold text-gray-800">Filters & Search</span>
          </div>
          <svg 
            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Mobile Filters Panel */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        showFilters ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          {/* Quick Search */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Search</h3>
            <div className="flex">
              <input
                type="text"
                placeholder="Eg. Company Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                Go
              </button>
            </div>
          </div>

          {/* Category Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Select Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={selectedCategory === category.id}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mr-3 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{category.name}</span>
                  <span className="ml-auto text-sm text-gray-500">({category.count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Transporter Types */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Transporter Type</h3>
            <div className="space-y-2">
              {transporterTypes.map((type) => (
                <label key={type.id} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type.id)}
                    onChange={() => handleTypeToggle(type.id)}
                    className="mr-3 text-blue-600 focus:ring-blue-500 rounded"
                  />
                  <span className="text-gray-700">{type.name}</span>
                  <span className="ml-auto text-sm text-gray-500">({type.count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Search by Area */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Search by Area</h3>
            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Search By Pin Code"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Search By State</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                  <option>Punjab</option>
                </select>
              </div>
              <div>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Search By District</option>
                  <option>Mumbai</option>
                  <option>New Delhi</option>
                  <option>Chandigarh</option>
                </select>
              </div>
              <div>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Search By City</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Pune</option>
                </select>
              </div>
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={clearFilters}
            className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Left Sidebar - Filters */}
        <div className={`lg:w-80 lg:block ${showFilters ? 'block' : 'hidden'}`}>
          <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar pr-4 space-y-8">
            {/* Quick Search */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[#021445] mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#4fa7ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Quick Search
              </h3>
              <input
                type="text"
                placeholder="Search transporters..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4fa7ff] focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[#021445] mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#f54eb8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Category
              </h3>
              <div className="space-y-4">
                {['Transport', 'Logistics', 'Warehousing', 'Packers & Movers'].map((category) => (
                  <label key={category} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-[#4fa7ff] border-gray-300 rounded focus:ring-[#4fa7ff]" />
                    <span className="text-gray-700 group-hover:text-[#4fa7ff] transition-colors">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Transporter Type Filter */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[#021445] mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#9dd15a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2h-1V4H4v2H3V4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h1v8a1 1 0 001 1h10a1 1 0 001-1V6h1v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6z" />
                </svg>
                Vehicle Type
              </h3>
              <div className="space-y-4">
                {['Open Truck', 'Closed Truck', 'Container', 'Trailer', 'Mini Truck'].map((type) => (
                  <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-[#9dd15a] border-gray-300 rounded focus:ring-[#9dd15a]" />
                    <span className="text-gray-700 group-hover:text-[#9dd15a] transition-colors">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Search by Area Filter */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[#021445] mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#f54eb8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Search by Area
              </h3>
              <input
                type="text"
                placeholder="Enter city or area..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f54eb8] focus:border-transparent"
              />
            </div>

            {/* Rating Filter */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[#021445] mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#4fa7ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Minimum Rating
              </h3>
              <div className="space-y-4">
                {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                  <label key={rating} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="radio" name="rating" value={rating} className="w-4 h-4 text-[#4fa7ff] border-gray-300 focus:ring-[#4fa7ff]" />
                    <span className="text-gray-700 group-hover:text-[#4fa7ff] transition-colors">{rating}+ Stars</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Apply Filters Button */}
            <button className="w-full bg-gradient-to-r from-[#4fa7ff] to-[#f54eb8] text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Right Content - Results */}
        <div className="lg:col-span-3">
          {/* Result Tabs */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('top-result')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'top-result'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Top Result
              </button>
              <button
                onClick={() => setActiveTab('user-rating')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'user-rating'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                User Rating
              </button>
            </div>
          </div>

          {/* Transporter Listings - Scrollable Container */}
          <div className="max-h-[calc(100vh-12rem)] overflow-y-auto pr-2 space-y-4">
            {transporters.map((transporter) => (
              <div key={transporter.id} className="bg-white rounded-2xl shadow-lg p-4 lg:p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
                  {/* Profile Image */}
                  <div className="flex-shrink-0 flex justify-center lg:justify-start">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xl font-bold">
                          {transporter.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{transporter.name}</h3>
                        <p className="text-gray-600 mb-2">{transporter.company}</p>
                        <div className="flex items-center justify-center lg:justify-start text-sm text-gray-500 mb-2">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                          {transporter.contactPerson}
                        </div>
                        <p className="text-gray-600 text-sm">{transporter.address}</p>
                      </div>

                      {/* Rating and Verification */}
                      <div className="flex flex-col items-center lg:items-end space-y-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(transporter.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-sm text-gray-600 ml-1">{transporter.rating}</span>
                        </div>
                        
                        {transporter.verified && (
                          <div className="flex items-center space-x-1 text-green-600">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs font-medium">Verified</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-3 mt-6">
                      <button className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                        View Detail
                      </button>
                      <button className="w-full sm:w-auto px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium">
                        Send SMS
                      </button>
                      <button className="w-full sm:w-auto px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium">
                        Add Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransportDirectory
