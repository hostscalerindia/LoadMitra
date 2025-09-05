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
         <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
          <div className="bg-white px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end">
              <button className="bg-darkpink hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="relative z-10">View all load posts</div>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr className="border-b-2 border-gray-300">
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-200">Source City</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-200">Destination City</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-200">Distance</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-200">Weight (MT)</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-200">Schd. Date</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-200">Material</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-200">Truck Type</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-200">Posted By</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentLoads.map((load) => (
                  <tr key={load.id} className="hover:bg-blue-50 transition-colors duration-200 border-b border-gray-100">
                    <td className="px-6 py-3 whitespace-nowrap text-xs font-medium text-gray-900 border-r border-gray-100">{load.sourceCity}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-900 border-r border-gray-100">{load.destinationCity}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600 border-r border-gray-100">{load.distance}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600 border-r border-gray-100">{load.weight}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600 border-r border-gray-100">{load.scheduledDate}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600 border-r border-gray-100">{load.material}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600 border-r border-gray-100">{load.truckType}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-600 border-r border-gray-100">{load.postedBy}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-xs font-medium">
                      <div className="flex space-x-2">
                        <button className="bg-lightblue hover:bg-darkblue text-white px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 relative overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                          <div className="relative z-10">View Contact</div>
                        </button>
                        <button className="bg-darkpink hover:bg-pink-600 text-white px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 relative overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                          <div className="relative z-10">Quote Now</div>
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
