import React from 'react'
import truckImage from '../assets/images/truck-2.webp'

const Dashboard = () => {
  // Sample data for recent loads
  const recentLoads = [
    {
      id: 1,
      sourceCity: 'Goa City (GA)',
      destinationCity: 'Mumbai (MH)',
      distance: '564 Km',
      weight: 'Upto 20 MT',
      scheduledDate: '03-Sep-2025',
      material: 'Fertilizers',
      truckType: 'Truck 20MT / 12 W...',
      postedBy: 'Customer'
    },
    {
      id: 2,
      sourceCity: 'Bhavnagar (GJ)',
      destinationCity: 'Mundra (GJ)',
      distance: '440 Km',
      weight: 'Upto 20 MT',
      scheduledDate: '03-Sep-2025',
      material: 'Powder Bags',
      truckType: 'Truck 20MT / 12 W...',
      postedBy: 'Customer'
    },
    {
      id: 3,
      sourceCity: 'Jaipur (RJ)',
      destinationCity: 'Siliguri (WB)',
      distance: '1,527 Km',
      weight: 'Upto 5 MT',
      scheduledDate: '08-Sep-2025',
      material: 'Machinery Ne...',
      truckType: 'Flat Bed Trailers...',
      postedBy: 'Customer'
    }
  ]

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* User Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2h-1V4H4v2H3V4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h1v8a1 1 0 001 1h10a1 1 0 001-1V6h1v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">24,811</div>
                <div className="text-gray-600 font-medium">Fleet Owners</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">17,353</div>
                <div className="text-gray-600 font-medium">Transport Contractors</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">11,927</div>
                <div className="text-gray-600 font-medium">Commission Agents</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">2,027</div>
                <div className="text-gray-600 font-medium">Transport Brokers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Welcome Section with Image */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="flex items-center justify-center relative overflow-hidden">
              <img 
                src={truckImage} 
                alt="Transport Solutions" 
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Transport Solutions</h3>
                  <p className="text-blue-100">Connecting India's Transport Network</p>
                </div>
              </div>
            </div>

            {/* Welcome Content */}
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Welcome to <span className="text-orange-500">TrackMyLoad</span>
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
                <p>
                  TrackMyLoad.com is a leading portal for the transport industry. Connecting transporters, 
                  truck drivers, customers and other related entities. Simplicity, speed and efficiency 
                  drive your business and this is our focus as well.
                </p>
                <p>
                  We allow the users to share the information for expansion of services to the customers 
                  by providing better rates and vehicles. Our service is aimed for the brokers / transporters / 
                  logistics heads / delivery heads to make the use of this technology.
                </p>
                <p>
                  This service will make the movement of the vehicle and material more efficient. 
                  We will provide information to registered users about the availability of the load 
                  and vehicles in the city.
                </p>
              </div>
              <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 text-lg">
                View Detail
              </button>
            </div>
          </div>
        </div>

        {/* Recent Loads Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold text-white mb-4 sm:mb-0">
                Recent <span className="text-orange-300">Load/Freight Bookings</span>
              </h2>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                View all load posts
              </button>
            </div>
            <p className="text-blue-100 text-lg">Recently Posted Loads</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source City</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination City</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight (MT)</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schd. Date</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Truck Type</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posted By</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentLoads.map((load) => (
                  <tr key={load.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{load.sourceCity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{load.destinationCity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{load.distance}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{load.weight}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{load.scheduledDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{load.material}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{load.truckType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{load.postedBy}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg text-xs transition-colors duration-200">
                          View Contact
                        </button>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg text-xs transition-colors duration-200">
                          Quote Now
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
