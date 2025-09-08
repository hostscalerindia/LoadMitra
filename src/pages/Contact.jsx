import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import crousal1 from '../assets/images/crousal-1.jpg'
import crousal2 from '../assets/images/crousal-2.jpg'
import crousal3 from '../assets/images/crousal-3.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Carousel images array with corresponding text
  const carouselData = [
    {
      image: crousal3,
      text: "Get In Touch With Our Logistics Experts",
      highlight: "Logistics Experts"
    },
    {
      image: crousal1,
      text: "Connect With LoadMitra Support Team",
      highlight: "Support Team"
    },
    {
      image: crousal2,
      text: "Reach Out For All Your Transport Needs",
      highlight: "Transport Needs"
    }
  ];

  // Auto-play carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1
      )
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [carouselData.length])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    // Handle form submission here
    alert('Message sent successfully!')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <div className="relative min-h-screen bg-white pt-16 sm:pt-20">
      {/* Carousel Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          {/* Carousel Images */}
          {carouselData.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            >
              <img
                src={item.image}
                alt={`Carousel slide ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                style={{minHeight: '100vh', objectFit: 'cover', objectPosition: 'center center'}}
              />
            </div>
          ))}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* White Gradient Overlay from Top */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-white/20 to-transparent"></div>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-6 sm:pb-8 md:pb-12 lg:pb-16">
        <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-[70vh]">
          
          {/* Left side - dynamic text */}
          <div className="order-1 xl:order-1 mt-8 sm:mt-10 px-4 xl:mt-0 xl:px-0 xl:w-3/5">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight sm:leading-relaxed text-center xl:text-left mb-6" style={{color: 'white', textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)'}}>
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

            {/* Contact Details */}
            <div className="space-y-4 text-center xl:text-left">
              {/* Email */}
              <div className="flex items-center justify-center xl:justify-start space-x-3">
                <div className="w-10 h-10 bg-white hover:bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-lightblue/30 shadow-lg">
                  <Mail className="w-5 h-5 text-lightblue" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>support@loadmitra.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center xl:justify-start space-x-3">
                <div className="w-10 h-10 bg-white hover:bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-darkblue/30 shadow-lg">
                  <Phone className="w-5 h-5 text-darkblue" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>+91 98765 43210</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center justify-center xl:justify-start space-x-3">
                <div className="w-10 h-10 bg-white hover:bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-darkpink/30 shadow-lg">
                  <svg className="w-5 h-5 text-darkpink" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <div className="order-2 xl:order-2 space-y-4 sm:space-y-6 lg:space-y-8 w-full xl:w-2/5">
            
            <div className="bg-white/95 mt-4 sm:mt-6 lg:mt-[25px] backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-xl border border-white/30 w-full">
              {/* Form Header */}
              <div className="mb-4 text-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-darkblue mb-2">
                  Contact <span className="text-lightblue">Us</span>
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Your first name"
                      className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Your last name"
                      className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs"
                      required
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@company.com"
                      className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs"
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs resize-none"
                    placeholder="Tell us about your logistics requirements, shipment details, or any questions you have..."
                    required
                  />
                </div>

                <div className="pt-3 flex justify-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-lightblue hover:bg-darkblue text-white font-semibold py-3 px-6 sm:py-2 sm:px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 text-sm relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div className="flex items-center justify-center space-x-2 relative z-10">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

