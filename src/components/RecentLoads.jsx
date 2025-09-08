import React from 'react'

const RecentLoads = () => {
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
    <div className="bg-white relative overflow-hidden">
      {/* Translucent Spherical Elements - Matching CTA theme */}
      <div className="absolute inset-0">
        {/* Large Light Blue Sphere - Left Side */}
        <div className="absolute left-16 top-1/3 w-32 h-32 bg-cyan-300 rounded-full opacity-30 blur-xl"></div>
        
        {/* Smaller Purple/Pink Sphere - Upper Right */}
        <div className="absolute right-20 top-1/4 w-20 h-20 bg-purple-300 rounded-full opacity-25 blur-lg"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Matching Benefits theme */}
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold text-darkblue mb-6">
            Recent Load/Freight Bookings
          </h2>
          <p className="text-para text-black max-w-3xl mx-auto">
            Stay updated with the latest transport opportunities
          </p>
        </div>

        {/* Recent Loads Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
          {/* <div className="bg-gradient-to-r from-lightblue/10 to-darkblue/10 px-4 py-3 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-semibold text-darkblue mb-2 sm:mb-0">Recent Load Posts</h3>
              <button className="bg-lightblue hover:bg-darkblue text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300">
                View All Posts
              </button>
            </div>
          </div> */}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-lightblue/20 to-darkblue/20">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-darkblue uppercase tracking-wider">Source</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-darkblue uppercase tracking-wider">Destination</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-darkblue uppercase tracking-wider">Distance</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-darkblue uppercase tracking-wider">Weight</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-darkblue uppercase tracking-wider">Date</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-darkblue uppercase tracking-wider">Material</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-darkblue uppercase tracking-wider">Truck Type</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-darkblue uppercase tracking-wider">Posted By</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-darkblue uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {recentLoads.map((load) => (
                  <tr key={load.id} className="hover:bg-lightblue/5 transition-colors duration-200 border-b border-gray-100">
                    <td className="px-3 py-2 whitespace-nowrap text-xs font-medium text-gray-900">{load.sourceCity}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-900">{load.destinationCity}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-600">{load.distance}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-600">{load.weight}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-600">{load.scheduledDate}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-600">{load.material}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-600">{load.truckType}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-600">{load.postedBy}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs font-medium">
                      <div className="flex space-x-1">
                        <button className="bg-lightblue hover:bg-darkblue text-white px-2 py-1 rounded text-xs font-medium transition-colors duration-200">
                          Contact
                        </button>
                        <button className="bg-lightblue hover:bg-darkblue text-white px-2 py-1 rounded text-xs font-medium transition-colors duration-200">
                          Quote
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

export default RecentLoads
