import { useState } from 'react'
import { Search, Filter, MapPin, Star, CheckCircle, Phone, MessageSquare, Eye, Truck, Users, Shield, Clock } from 'lucide-react'

const TransportDirectory = () => {
  const [selectedCategory, setSelectedCategory] = useState('transporter')
  const [selectedTypes, setSelectedTypes] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('top-result')
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    { id: 'transporter', name: 'Transporter', count: 21551, icon: Truck, color: 'bg-blue-500' },
    { id: 'packers-movers', name: 'Packers & Movers', count: 799, icon: Users, color: 'bg-green-500' }
  ]

  const transporterTypes = [
    { id: 'fleet-owner', name: 'Fleet Owner', count: 12868, icon: Truck, color: 'bg-blue-500' },
    { id: 'transport-contractor', name: 'Transport Contractor', count: 8859, icon: Shield, color: 'bg-purple-500' },
    { id: 'commission-agent', name: 'Commission Agent', count: 7974, icon: Users, color: 'bg-green-500' },
    { id: 'transport-broker', name: 'Transport Broker', count: 1066, icon: Clock, color: 'bg-orange-500' },
    { id: 'logistics', name: 'Logistics Transporters', count: 273, icon: Truck, color: 'bg-indigo-500' }
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
      experience: '8+ years',
      fleetSize: '25+ trucks',
      speciality: 'Heavy Machinery',
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
      experience: '12+ years',
      fleetSize: '50+ trucks',
      speciality: 'E-commerce & Retail',
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
      experience: '6+ years',
      fleetSize: '15+ trucks',
      speciality: 'Steel & Construction',
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
      experience: '10+ years',
      fleetSize: '30+ trucks',
      speciality: 'Agricultural Products',
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
    <div className="min-h-screen bg-gradient-to-br from-lightblue/5 via-white to-darkblue/5">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Title and Stats */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <h1 className="text-2xl font-bold text-lightblue">Transport Directory</h1>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-lightblue" />
                  <span>{transporters.length} Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>All Verified</span>
                </div>
              </div>
            </div>

            {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-lightblue text-white rounded-lg hover:bg-darkblue transition-colors duration-300"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
        </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          
          {/* Left Sidebar - Filters */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Filter Header */}
                <div className="bg-lightblue text-white px-6 py-4">
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <Filter className="w-5 h-5" />
                    <span>Smart Filters</span>
                  </h3>
      </div>

                <div className="p-6 space-y-6">
                  {/* Search Bar */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Quick Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                        placeholder="Company name, location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lightblue focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Category Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Category</label>
                    <div className="space-y-3">
                      {categories.map((category) => {
                        const IconComponent = category.icon
                        return (
                          <label key={category.id} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={selectedCategory === category.id}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                              className="w-4 h-4 text-lightblue focus:ring-lightblue border-gray-300"
                            />
                            <div className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center`}>
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <span className="text-gray-700 group-hover:text-darkblue transition-colors font-medium">
                                {category.name}
                              </span>
                              <div className="text-xs text-gray-500">{category.count.toLocaleString()}+</div>
                            </div>
                </label>
                        )
                      })}
            </div>
          </div>

          {/* Transporter Types */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Transporter Type</label>
                    <div className="space-y-3">
                      {transporterTypes.map((type) => {
                        const IconComponent = type.icon
                        return (
                          <label key={type.id} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type.id)}
                    onChange={() => handleTypeToggle(type.id)}
                              className="w-4 h-4 text-lightblue focus:ring-lightblue border-gray-300 rounded"
                            />
                            <div className={`w-8 h-8 ${type.color} rounded-lg flex items-center justify-center`}>
                              <IconComponent className="w-4 h-4 text-white" />
            </div>
                            <div className="flex-1">
                              <span className="text-gray-700 group-hover:text-darkblue transition-colors font-medium">
                                {type.name}
                              </span>
                              <div className="text-xs text-gray-500">{type.count.toLocaleString()}+</div>
          </div>
                          </label>
                        )
                      })}
            </div>
          </div>

                  {/* Location Search */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Location</label>
                    <div className="space-y-3">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                          placeholder="City, State, or PIN"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lightblue focus:border-transparent transition-all duration-300"
                  />
                </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Minimum Rating</label>
                    <div className="space-y-2">
                    {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                      <label key={rating} className="flex items-center space-x-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="rating"
                            value={rating}
                            className="w-4 h-4 text-yellow-500 focus:ring-yellow-500 border-gray-300"
                          />
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600 group-hover:text-darkblue transition-colors">
                              {rating}+
                            </span>
                          </div>
                      </label>
                    ))}
                  </div>
                </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-4">
                    <button className="w-full bg-gradient-to-r from-lightblue to-darkblue text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Apply Filters
                </button>
                    <button
                      onClick={clearFilters}
                      className="w-full py-3 px-6 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
                    >
                      Clear All
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Results */}
          <div className="flex-1">
          {/* Result Tabs */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('top-result')}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'top-result'
                      ? 'bg-lightblue text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                  Top Results
              </button>
              <button
                onClick={() => setActiveTab('user-rating')}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'user-rating'
                      ? 'bg-lightblue text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                  Highest Rated
              </button>
            </div>
          </div>

            {/* Transporter Listings */}
            <div className="space-y-6">
            {transporters.map((transporter) => (
                <div key={transporter.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                  <div className="p-6">
                    {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                      {/* Profile Section */}
                  <div className="flex-shrink-0 flex justify-center lg:justify-start">
                        <div className="relative">
                          <div className="w-20 h-20 bg-gradient-to-br from-lightblue to-darkblue rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-white text-2xl font-bold">
                          {transporter.name.charAt(0)}
                        </span>
                      </div>
                          {transporter.verified && (
                            <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                          )}
                    </div>
                  </div>

                      {/* Content Section */}
                  <div className="flex-1 min-w-0 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                      <div className="flex-1">
                            <h3 className="text-xl font-bold text-darkblue mb-2 group-hover:text-lightblue transition-colors">
                              {transporter.name}
                            </h3>
                            <p className="text-lg text-gray-700 mb-3 font-medium">{transporter.company}</p>
                            
                            {/* Company Details */}
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-600 mb-4">
                              <div className="flex items-center space-x-2">
                                <Users className="w-4 h-4 text-lightblue" />
                                <span>{transporter.contactPerson}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Truck className="w-4 h-4 text-green-500" />
                                <span>{transporter.fleetSize}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4 text-orange-500" />
                                <span>{transporter.experience}</span>
                              </div>
                            </div>

                            {/* Speciality */}
                            <div className="inline-block bg-lightblue/10 text-lightblue px-3 py-1 rounded-full text-sm font-medium mb-3">
                              {transporter.speciality}
                            </div>

                            <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-500 mb-3">
                              <MapPin className="w-4 h-4 text-gray-400" />
                              <span>{transporter.address}</span>
                        </div>
                      </div>

                          {/* Rating and Actions */}
                          <div className="flex flex-col items-center lg:items-end space-y-4">
                            {/* Rating */}
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                                <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(transporter.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                                />
                          ))}
                              <span className="text-sm text-gray-600 ml-2 font-semibold">
                                {transporter.rating}
                              </span>
                        </div>
                        
                            {/* Verification Badge */}
                        {transporter.verified && (
                          <div className="flex items-center space-x-2 text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                <CheckCircle className="w-4 h-4" />
                                <span className="text-xs font-medium">Verified Partner</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-3 mt-6 pt-6 border-t border-gray-100">
                          <button className="flex items-center space-x-2 px-6 py-3 bg-lightblue text-white rounded-xl hover:bg-darkblue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <Eye className="w-4 h-4" />
                            <span>View Details</span>
                      </button>
                          <button className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <Phone className="w-4 h-4" />
                            <span>Call Now</span>
                      </button>
                          <button className="flex items-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <MessageSquare className="w-4 h-4" />
                            <span>Send Message</span>
                      </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default TransportDirectory
