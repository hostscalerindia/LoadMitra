import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import truckVideo from '../assets/images/indian-truck-video.mp4'

const Banner = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [loadType, setLoadType] = useState('full-load')
  const [showModal, setShowModal] = useState(false)
  const [modalFormData, setModalFormData] = useState({
    phone: '',
    otp: ''
  })
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    sourcePinCode: '',
    destinationPinCode: '',
    pickupType: '',
    material: '',
    weight: '',
    truckType: '',
    numTrucks: '',
    scheduledDate: ''
  })

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleModalInputChange = (field, value) => {
    setModalFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', { loadType, ...formData })
    setShowModal(true)
  }

  const handleModalSubmit = (e) => {
    e.preventDefault()
    console.log('Modal form submitted:', modalFormData)
    // Redirect to track route
    navigate('/track')
  }

  const closeModal = () => {
    setShowModal(false)
    setModalFormData({ phone: '', otp: '' })
  }

  return (
    // <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-lightblue/50 pt-20">
    <div className="relative min-h-screen bg-white pt-20">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content & Form */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div>
              <h1 className="text-heading  text-darkblue mb-6 leading-tight">
                Post Your Load Details
              </h1>
              
              <p className="text-para text-gray-700 max-w-2xl leading-relaxed">
                Connect with verified transporters and get instant quotes for your cargo. 
                Choose between Full Load and Part Load options.
              </p>
            </div>

            {/* Load Posting Form */}
            <div className="bg-white rounded-2xl p-5 shadow-xl border border-white/30">
              {/* Load Type Tabs */}
              <div className="mb-4">
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Load Type <span className="text-red-500">*</span>
                </label>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    type="button"
                    onClick={() => setLoadType('full-load')}
                    className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-all ${
                      loadType === 'full-load'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Full Load (Above 3MT)
                  </button>
                  <button
                    type="button"
                    onClick={() => setLoadType('part-load')}
                    className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-all ${
                      loadType === 'part-load'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Part Load (Below 3MT)
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Row 1: From & To */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      From <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.from}
                      onChange={(e) => handleInputChange('from', e.target.value)}
                      placeholder="Source City"
                      className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-para"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      To <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.to}
                      onChange={(e) => handleInputChange('to', e.target.value)}
                      placeholder="Destination City"
                      className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-para"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Pin Codes */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Source Pin Code
                    </label>
                    <input
                      type="text"
                      value={formData.sourcePinCode}
                      onChange={(e) => handleInputChange('sourcePinCode', e.target.value)}
                      placeholder="From Pin Code"
                      className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-para"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Destination Pin Code
                    </label>
                    <input
                      type="text"
                      value={formData.destinationPinCode}
                      onChange={(e) => handleInputChange('destinationPinCode', e.target.value)}
                      placeholder="Destination Pin Code"
                      className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-para"
                    />
                  </div>
                </div>

                {/* Row 3: Pickup Type & Material */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Pick up Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.pickupType}
                      onChange={(e) => handleInputChange('pickupType', e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-para"
                      required
                    >
                      <option value="">Select</option>
                      <option value="factory">Factory</option>
                      <option value="warehouse">Warehouse</option>
                      <option value="port">Port</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Material <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.material}
                      onChange={(e) => handleInputChange('material', e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-para"
                      required
                    >
                      <option value="">Select</option>
                      <option value="steel">Steel</option>
                      <option value="cement">Cement</option>
                      <option value="textiles">Textiles</option>
                      <option value="electronics">Electronics</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Weight & Truck Type */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Weight (MT) <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.weight}
                      onChange={(e) => handleInputChange('weight', e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-para"
                      required
                    >
                      <option value="">Select</option>
                      {loadType === 'full-load' ? (
                        <>
                          <option value="3-5">3-5 MT</option>
                          <option value="5-10">5-10 MT</option>
                          <option value="10-15">10-15 MT</option>
                          <option value="15+">15+ MT</option>
                        </>
                      ) : (
                        <>
                          <option value="0.5-1">0.5-1 MT</option>
                          <option value="1-2">1-2 MT</option>
                          <option value="2-3">2-3 MT</option>
                        </>
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Truck Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.truckType}
                      onChange={(e) => handleInputChange('truckType', e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-para"
                      required
                    >
                      <option value="">Select</option>
                      <option value="open">Open Truck</option>
                      <option value="closed">Closed Truck</option>
                      <option value="container">Container</option>
                      <option value="trailer">Trailer</option>
                    </select>
                  </div>
                </div>

                {/* Row 5: Number of Trucks & Date */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      No. of Trucks <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.numTrucks}
                      onChange={(e) => handleInputChange('numTrucks', e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-para"
                      required
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Scheduled Date <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <input
                        type="date"
                        value={formData.scheduledDate}
                        onChange={(e) => handleInputChange('scheduledDate', e.target.value)}
                        className="flex-1 px-2.5 py-1.5 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-para"
                        required
                      />
                      <button
                        type="button"
                        className="px-2.5 py-1.5 bg-orange-500 text-white rounded-r-md hover:bg-orange-600 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Video Container */}
              <div className="relative">
                <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 rounded-3xl shadow-2xl overflow-hidden">
                  {/* Video Player */}
                  <div className="w-full h-full flex items-center justify-center">
                    <video 
                      src={truckVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-para font-semibold text-gray-900">Live Tracking</div>
                      <div className="text-xs text-gray-500">Real-time updates</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-para font-semibold text-gray-900">GPS Enabled</div>
                      <div className="text-xs text-gray-500">Precise location</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/20 animate-slideUp relative overflow-hidden">
            {/* Background Pattern */}
            {/* <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1000"></div>
            </div> */}

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/30"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6 relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/30">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2h-1V4H4v2H3V4zM3 6h1v8a1 1 0 001 1h10a1 1 0 001-1V6h1v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Quick Login</h3>
              <p className="text-blue-100">Enter your phone number to continue</p>
            </div>

            {/* Compact Login Form */}
            <form onSubmit={handleModalSubmit} className="space-y-4 relative z-10">
              {/* Phone Field */}
              <div className="group">
                <label className="block text-para font-semibold text-white mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Phone Number <span className="text-red-300 ml-1">*</span>
                </label>
                <input
                  type="tel"
                  value={modalFormData.phone}
                  onChange={(e) => handleModalInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-3 border-2 border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/50 text-gray-900 placeholder-gray-500 bg-white/90 backdrop-blur-sm transition-all duration-300 group-hover:border-white/50"
                  required
                />
              </div>

              {/* OTP Field */}
              <div className="group">
                <label className="block text-para font-semibold text-white mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  OTP <span className="text-red-300 ml-1">*</span>
                </label>
                <input
                  type="text"
                  value={modalFormData.otp}
                  onChange={(e) => handleModalInputChange('otp', e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full px-3 py-3 border-2 border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/50 text-gray-900 placeholder-gray-500 bg-white/90 backdrop-blur-sm transition-all duration-300 group-hover:border-white/50"
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 py-3 px-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 hover:scale-105 backdrop-blur-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white hover:border-gray-200"
                >
                  Login & Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Modal Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}

export default Banner
