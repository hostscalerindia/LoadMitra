import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import crousal1 from '../assets/images/crousal-1.jpg'
import crousal2 from '../assets/images/crousal-2.jpg'
import crousal3 from '../assets/images/crousal-3.jpg'

const FirstHomeSection = () => {
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
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  
  // Carousel images array with corresponding text - Easy to add more images here
  const carouselData = [
    {
      image: crousal1,
      text: "Your Trusted Freight Navigator for Reliable Deliveries",
      highlight: "Trusted Navigator"
    },
    {
      image: crousal3,
      text: "Fast, Safe & Smart Local Logistics for Every Business",
      highlight: "Local Logistics"
    },
    {
      image: crousal2,
      text: "Connecting India’s Transport Network with Modern Solutions",
      highlight: "Connecting India"
    }
  ];
  

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1
      )
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [carouselData.length])

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex)
  }

  const goToPrevious = () => {
    setCurrentSlide(currentSlide === 0 ? carouselData.length - 1 : currentSlide - 1)
  }

  const goToNext = () => {
    setCurrentSlide(currentSlide === carouselData.length - 1 ? 0 : currentSlide + 1)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

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
    navigate('/track')
  }

  const closeModal = () => {
    setShowModal(false)
    setModalFormData({ phone: '', otp: '' })
  }

  return (
    <div className="relative bg-white h-[95vh] overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="relative w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Images */}
          {carouselData.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={item.image}
                alt={`Carousel slide ${index + 1}`}
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-in-out hover:scale-105 sm:hover:scale-110"
                style={{
                  objectPosition: 'center center'
                }}
                loading="lazy"
              />
            </div>
          ))}
          
          {/* Responsive Overlay */}
          <div className="absolute inset-0 bg-black/5 sm:bg-black/10 md:bg-black/15"></div>
          
          {/* Responsive Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent sm:from-white/20 sm:via-white/10 sm:to-transparent md:from-white/25 md:via-white/15 md:to-transparent"></div>
          
          {/* Mobile-specific overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent sm:hidden"></div>
          
          {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
          <button
            onClick={goToPrevious}
            className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full items-center justify-center transition-all duration-300 hover:scale-110 border border-white/30 z-20"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full items-center justify-center transition-all duration-300 hover:scale-110 border border-white/30 z-20"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex items-center">
        <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-12 w-full m">
          {/* Left side - dynamic text */}
          <div className="order-1 lg:order-1 w-full lg:w-1/2 flex items-center justify-center lg:justify-start px-2 sm:px-4 mt-20 sm:mt-15">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-center lg:text-left max-w-lg lg:max-w-xl" style={{color: 'white', textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)', lineHeight: '1.2'}}>
              {carouselData[currentSlide].text.split(carouselData[currentSlide].highlight).map((part, index) => (
                <span key={index}>
                  {part}
                  {index < carouselData[currentSlide].text.split(carouselData[currentSlide].highlight).length - 1 && (
                    <span style={{color: '#60A5FA', textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)'}}>
                      {carouselData[currentSlide].highlight}
                    </span>
                  )}
                </span>
              ))}
              </h1>
            </div>
            
          {/* Right side - form */}
          <div className="order-2 lg:order-2 w-full lg:w-1/2 flex items-center justify-center lg:justify-end px-2 sm:px-4">
            
            <div className="bg-white/95 mt-10 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg border border-white/30 w-full max-w-sm sm:max-w-md">
              {/* Form Header */}
              <div className="mb-2 sm:mb-3 text-center">
                <h1 className="text-sm sm:text-base md:text-lg font-bold text-darkblue">
                  Post Your <span className="text-lightblue">Load Details</span>
                </h1>
              </div>
              <div className="mb-2 sm:mb-3">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Load Type <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col sm:flex-row bg-gray-200 rounded-lg p-1 space-y-1 sm:space-y-0 sm:gap-1">
                  <button
                    type="button"
                    onClick={() => setLoadType('full-load')}
                    className={`flex-1 py-1.5 px-3 rounded-md text-xs font-semibold transition-all duration-300 ${
                      loadType === 'full-load'
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-300'
                    }`}
                  >
                    Full Load (Above 3MT)
                  </button>
                  <button
                    type="button"
                    onClick={() => setLoadType('part-load')}
                    className={`flex-1 py-1.5 px-3 rounded-md text-xs font-semibold transition-all duration-300 ${
                      loadType === 'part-load'
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-300'
                    }`}
                  >
                    Part Load (Below 3MT)
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-1.5 sm:space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                      From <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.from}
                      onChange={(e) => handleInputChange('from', e.target.value)}
                      placeholder="Source City"
                      className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                      To <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.to}
                      onChange={(e) => handleInputChange('to', e.target.value)}
                      placeholder="Destination City"
                      className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                      Pick up Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.pickupType}
                      onChange={(e) => handleInputChange('pickupType', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
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
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                      Material <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.material}
                      onChange={(e) => handleInputChange('material', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                      Weight (MT) <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.weight}
                      onChange={(e) => handleInputChange('weight', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
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
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                      Truck Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.truckType}
                      onChange={(e) => handleInputChange('truckType', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                      No. of Trucks <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.numTrucks}
                      onChange={(e) => handleInputChange('numTrucks', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
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
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                      Scheduled Date <span className="text-red-500">*</span>
                    </label>
                      <input
                        type="date"
                        value={formData.scheduledDate}
                        onChange={(e) => handleInputChange('scheduledDate', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
                        required
                      />
                  </div>
                </div>

                <div className="pt-1.5 flex justify-center">
                  <button
                    type="submit"
                    className="bg-lightblue hover:bg-darkblue text-white font-medium py-1.5 px-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 border border-white/20 text-xs relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div className="flex items-center space-x-1 relative z-10">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Submit</span>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-md w-full mx-4 shadow-2xl border border-white/20 animate-slideUp relative overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/30"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-6 relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/30">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2h-1V4H4v2H3V4zM3 6h1v8a1 1 0 001 1h10a1 1 0 001-1V6h1v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Quick Login</h3>
              <p className="text-sm sm:text-base text-blue-100">Enter your phone number to continue</p>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4 relative z-10">
              <div className="group">
                <label className="block text-sm sm:text-para font-semibold text-white mb-2 flex items-center">
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

              <div className="group">
                <label className="block text-sm sm:text-para font-semibold text-white mb-2 flex items-center">
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

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
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

export default FirstHomeSection
