const CTA = () => {
  return (
    <div className="py-16 bg-white relative overflow-hidden">
      
      {/* Wavy Lines Overlay */}
      {/* <div className="absolute inset-0">
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
      </div> */}
      
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
        <h2 className="text-heading font-bold text-darkblue mb-4 leading-tight">
          Start the Conversation <span className='text-lightblue'>Today</span>
        </h2>
        
        {/* Subheading */}
        <p className="text-para text-black mb-8 max-w-3xl mx-auto leading-relaxed">
          We're ready to understand your needs and provide a tailored solution.
        </p>
        
        {/* Call-to-Action Button */}
        <button className="bg-lightblue hover:bg-darkblue text-white font-semibold py-2.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 text-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="flex items-center space-x-2 relative z-10">
            <span>1-ON-1 DEMO</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default CTA
