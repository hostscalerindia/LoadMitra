const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center">
        {/* Main Heading */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold text-neutral-800 leading-tight mb-6">
            <span className="block">About</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              TrackMyTruck
            </span>
          </h1>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-12 shadow-medium border border-neutral-100">
            <h2 className="text-3xl font-semibold text-neutral-800 mb-6">Our Mission</h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              TrackMyTruck is dedicated to revolutionizing the way people track and manage Truck services. 
              We believe that real-time information and seamless user experience are key to modern transportation.
            </p>
            
            <h3 className="text-2xl font-semibold text-neutral-800 mb-4">What We Do</h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Our platform provides comprehensive Truck tracking solutions for various industries including 
              hotels, resorts, theme parks, corporate offices, and educational institutions. We ensure that 
              every journey is transparent, reliable, and efficient.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">5+</span>
                </div>
                <p className="text-neutral-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">100+</span>
                </div>
                <p className="text-neutral-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <p className="text-neutral-600">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
