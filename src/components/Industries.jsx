import { useState, useEffect, useRef } from 'react'

const Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)
  
  const industries = [
    { name: "CAMPUS", image: "/src/assets/images/vector1.jpg" },
    { name: "RESIDENTIAL", image: "/src/assets/images/vector2.jpg" },
    { name: "SENIOR LIVING", image: "/src/assets/images/vector3.jpg" },
    { name: "HOTEL", image: "/src/assets/images/vector4.jpg" },
    { name: "RESORT", image: "/src/assets/images/vector1.jpg" },
    { name: "AMUSEMENT PARK", image: "/src/assets/images/vector2.jpg" },
    { name: "CORPORATE", image: "/src/assets/images/vector3.jpg" },
    { name: "HEALTHCARE", image: "/src/assets/images/vector4.jpg" }
  ]

  // Handle scroll events to update current index
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft
      const cardWidth = 320 + 24 // card width + spacing
      const newIndex = Math.round(scrollLeft / cardWidth)
      setCurrentIndex(newIndex)
    }
  }

  // Auto-scroll carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % industries.length
        // Scroll to the next card
        if (carouselRef.current) {
          const cardWidth = 320 + 24 // card width + spacing
          carouselRef.current.scrollLeft = nextIndex * cardWidth
        }
        return nextIndex
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [industries.length])

  // Add scroll event listener
  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll)
      return () => carousel.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Handle dot click
  const goToSlide = (index) => {
    setCurrentIndex(index)
    if (carouselRef.current) {
      const cardWidth = 320 + 24 // card width + spacing
      carouselRef.current.scrollLeft = index * cardWidth
    }
  }

  return (
    <div className="py-24 bg-lightblue relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/dotline.svg"
          alt="Dot pattern background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold text-white mb-6">
            Driving results in every Industry
          </h2>
          <div className="w-24 h-0.5 bg-white mx-auto mb-6"></div>
          <p className="text-para text-white max-w-3xl mx-auto">
            Select your Industry to discover how our platform can help
          </p>
        </div>

        {/* Industry Cards Carousel */}
        <div className="relative">
          {/* Cards Container */}
          <div 
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto pb-8 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industries.map((industry, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 mb-4 flex items-center justify-center">
                  {/* Industry Image */}
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 text-center">{industry.name}</h3>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-white border border-gray-300 hover:bg-gray-100'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar for webkit browsers */}
      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default Industries
