const CTA = () => {
  return (
    <div className="py-24 bg-blue-900 relative overflow-hidden">
      
      {/* Wavy Lines Overlay */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <pattern id="wavyLines" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0,100 Q50,50 100,100 T200,100" stroke="#60A5FA" strokeWidth="1" fill="none" opacity="0.3"/>
              <path d="M0,150 Q50,100 100,150 T200,150" stroke="#93C5FD" strokeWidth="0.8" fill="none" opacity="0.2"/>
              <path d="M0,200 Q50,150 100,200 T200,200" stroke="#DBEAFE" strokeWidth="0.6" fill="none" opacity="0.15"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wavyLines)"/>
        </svg>
      </div>
      
      {/* Translucent Spherical Elements */}
      <div className="absolute inset-0">
        {/* Large Light Blue Sphere - Left Side */}
        <div className="absolute left-16 top-1/3 w-32 h-32 bg-cyan-300 rounded-full opacity-30 blur-xl"></div>
        
        {/* Smaller Purple/Pink Sphere - Upper Right */}
        <div className="absolute right-20 top-1/4 w-20 h-20 bg-purple-300 rounded-full opacity-25 blur-lg"></div>
      </div>
      
      {/* Content - Centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Start the Conversation Today
        </h2>
        
        {/* Subheading */}
        <p className="text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
          We're ready to understand your needs and provide a tailored solution.
        </p>
        
        {/* Call-to-Action Button */}
        <button className="bg-white text-blue-900 font-bold py-4 px-8 rounded-full text-lg uppercase tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
          1-ON-1 DEMO
        </button>
      </div>
    </div>
  )
}

export default CTA
