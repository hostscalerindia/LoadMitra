import React from 'react'
import truckImage from '../assets/images/truck.png'
import { CheckCircle, MapPin } from 'lucide-react'

const Dashboard = () => {

  return (
    <div className="relative  ">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Video */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Container */}
                <div className="relative">
                <div className="w-full h-96 lg-h-[500px] bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 rounded-3xl shadow-2xl overflow-hidden">
                  {/* Truck Image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={truckImage}
                      alt="Logistics Truck"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
              
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div>
              <h1 className="text-heading text-darkblue mb-6 leading-tight">
                Welcome to LoadMitra
              </h1>
              
              <p className="text-para text-gray-700 max-w-2xl leading-relaxed">
                LoadMitra.com is a leading portal for the transport industry. Connecting transporters, 
                truck drivers, customers and other related entities. Simplicity, speed and efficiency 
                drive your business and this is our focus as well.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50K+</div>
                <div className="text-para text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">21K+</div>
                <div className="text-para text-gray-600">Transporters</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">99.9%</div>
                <div className="text-para text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
      `}</style>
    </div>
  )
}

export default Dashboard
