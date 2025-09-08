import React from 'react'
import aiTrackVideo from '../assets/images/ai-track.mp4'
import { Link, ClipboardList, MapPin, CheckCircle, Zap, Shield, Headphones } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Real-Time Tracking",
      description: "Track your cargo with GPS precision and get instant location updates throughout the journey."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast & Efficient",
      description: "Optimized routes and smart logistics solutions for faster delivery times."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Bank-grade security with encrypted data and verified transporters for safe cargo delivery."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support with dedicated logistics experts and real-time assistance."
    }
  ]

  const stats = [
    { number: "500+", label: "Cities Covered" },
    { number: "50K+", label: "Happy Customers" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ]


  return (
    <div className="pt-6 bg-white relative overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Features Grid - Hexagon Style */}
        <div className="mb-16">
          <h2 className="text-heading font-bold text-center mb-12 text-darkblue">
            Why Choose <span className='text-lightblue'>LoadMitra ?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-lightblue "
              >
                {/* Gradient Background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-lightblue/20 to-darkblue/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-10 h-10 bg-lightblue flex items-center justify-center rounded-lg text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <span className="w-5 h-5 flex items-center justify-center">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold bg-gradient-to-r from-darkblue to-lightblue bg-clip-text text-transparent mb-3">{feature.title}</h3>
                  <p className="text-darkblue/80 leading-relaxed text-sm">{feature.description}</p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[25px] border-l-transparent border-t-[25px] border-t-lightblue rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* About Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Content */}
          <div className="space-y-6">
            <h2 className="text-heading font-bold text-darkblue leading-tight">
              Connecting India's
              <span className="block text-lightblue">Transport Network</span>
            </h2>

            <p className="text-para text-gray-700 leading-relaxed">
              RoadMitra is India's premier logistics platform that bridges the gap between
              shippers and transporters. We've built a comprehensive ecosystem that ensures
              seamless cargo movement across the country.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-darkblue text-sm">Verified Partners</h4>
                  <p className="text-para text-gray-600 text-sm">All transporters are verified and insured</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-darkblue text-sm">Smart Technology</h4>
                  <p className="text-para text-gray-600 text-sm">AI-powered route optimization</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image with Floating Elements */}
          <div className="relative">
            <div className="relative z-10">
              <div className="relative">
                <div className="w-full h-80 lg:h-[350px] rounded-2xl shadow-xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <video
                      src={aiTrackVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>

                {/* Floating Feature Cards */}
                <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Live Tracking</div>
                      <div className="text-xs text-gray-500">Real-time updates</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">GPS Enabled</div>
                      <div className="text-xs text-gray-500">Precise location</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Diagonal Design */}
      <div className="relative bg-lightblue py-16 mb-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-heading font-bold text-white mb-4 leading-tight">
            Revolutionizing Logistic
          </h1>
          <p className="text-para text-white max-w-3xl mx-auto leading-relaxed">
            India's most trusted platform connecting shippers with verified transporters
          </p>

          {/* Floating Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Diagonal Cut */}
        {/* <div className="absolute bottom-0 left-0 w-full h-0 bg-white transform skew-y-2"></div> */}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
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
      `}</style>
    </div>
  )
}

export default About
