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
    <div className="w-full">
      
      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden mb-4">
        <div className="flex items-center justify-between bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-3">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-lightblue" />
              <span className="text-sm font-medium text-gray-700">{transporters.length} Results</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-600">All Verified</span>
            </div>
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
              showFilters 
                ? 'bg-lightblue text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
          
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="lg:sticky lg:top-24">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-lightblue to-darkblue text-white px-6 py-4">
                  <h3 className="text-subHeading2 font-bold text-white flex items-center space-x-2">
                    <Filter className="w-5 h-5" />
                    <span>Smart Filters</span>
                  </h3>
                </div>

                <div className="p-3 space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">Quick Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                        placeholder="Company name, location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lightblue focus:border-transparent transition-all duration-300 text-sm"
              />
            </div>
          </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">Category</label>
                    <div className="space-y-2">
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

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">Transporter Type</label>
                    <div className="space-y-2">
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

                <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">Location</label>
                    <div className="space-y-2">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                          placeholder="City, State, or PIN"
                          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lightblue focus:border-transparent transition-all duration-300 text-sm"
                  />
                </div>
                  </div>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">Minimum Rating</label>
                    <div className="space-y-1">
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

                  <div className="space-y-2 pt-3">
                    <button className="w-full bg-lightblue hover:bg-darkblue text-white font-medium py-1.5 px-3 rounded-md shadow-sm hover:shadow-md transition-all duration-300 text-xs relative overflow-hidden group">
                  Apply Filters
                </button>
                    <button
                      onClick={clearFilters}
                      className="w-full py-1.5 px-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors font-medium text-xs"
                    >
                      Clear All
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-3 mb-4 border border-gray-200">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('top-result')}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'top-result'
                    ? 'bg-gradient-to-r from-lightblue to-darkblue text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Top Results
              </button>
              <button
                onClick={() => setActiveTab('user-rating')}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'user-rating'
                    ? 'bg-gradient-to-r from-lightblue to-darkblue text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Highest Rated
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {transporters.map((transporter) => (
              <div key={transporter.id} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group hover:border-lightblue/30">
                  <div className="p-4">
                <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-3">
                  <div className="flex-shrink-0 flex justify-center lg:justify-start">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-lightblue to-darkblue rounded-xl flex items-center justify-center shadow-md">
                            <span className="text-white text-lg font-bold">
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

                  <div className="flex-1 min-w-0 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex-1">
                            <h3 className="text-subHeading2 font-bold text-darkblue mb-2 group-hover:text-lightblue transition-colors">
                              {transporter.name}
                            </h3>
                            <p className="text-para text-gray-700 mb-3 font-medium">{transporter.company}</p>
                            
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-gray-600 mb-3">
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

                            <div className="inline-block bg-lightblue/10 text-lightblue px-2 py-1 rounded-full text-xs font-medium mb-2">
                              {transporter.speciality}
                            </div>

                            <div className="flex items-center justify-center lg:justify-start space-x-2 text-xs text-gray-500 mb-2">
                              <MapPin className="w-4 h-4 text-gray-400" />
                              <span>{transporter.address}</span>
                        </div>
                      </div>

                          <div className="flex flex-col items-center lg:items-end space-y-2">
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
                              <span className="text-xs text-gray-600 ml-2 font-semibold">
                                {transporter.rating}
                              </span>
                        </div>
                        
                        {transporter.verified && (
                          <div className="flex items-center space-x-2 text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                <CheckCircle className="w-4 h-4" />
                                <span className="text-xs font-medium">Verified</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 mt-4 pt-3 border-t border-gray-200">
                      <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-3 py-2 bg-lightblue hover:bg-darkblue text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-sm relative overflow-hidden group">
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                      <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-3 py-2 bg-lightblue hover:bg-darkblue text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-sm relative overflow-hidden group">
                        <Phone className="w-4 h-4" />
                        <span>Call Now</span>
                      </button>
                      <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-3 py-2 bg-lightblue hover:bg-darkblue text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-sm relative overflow-hidden group">
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
