import React from 'react'
import { Link } from 'react-router-dom'
import { 
  CheckCircle, 
  Mail, 
  Phone, 
  ChevronRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Instagram
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-lightblue">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-lightblue/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-darkpink/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-darkblue/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-subHeading font-bold bg-gradient-to-r from-darkblue via-lightblue to-darkpink bg-clip-text text-white">
                LoadMitra
              </span>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white hover:bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-lightblue/30 shadow-lg">
                <Facebook className="w-5 h-5 text-lightblue" />
              </a>
              <a href="#" className="w-10 h-10 bg-white hover:bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-darkblue/30 shadow-lg">
                <Twitter className="w-5 h-5 text-darkblue" />
              </a>
              <a href="#" className="w-10 h-10 bg-white hover:bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-darkpink/30 shadow-lg">
                <Instagram className="w-5 h-5 text-darkpink" />
              </a>
              <a href="#" className="w-10 h-10 bg-white hover:bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-lightblue/30 shadow-lg">
                <Linkedin className="w-5 h-5 text-lightblue" />
              </a>
              <a href="#" className="w-10 h-10 bg-white hover:bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-lightblue/30 shadow-lg">
                <Youtube className="w-5 h-5 text-darkblue" />
              </a>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white hover:text-lightblue transition-colors duration-300">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-sm text-white font-bold">www.loadmitra.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white hover:text-lightblue transition-colors duration-300">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-sm text-white font-bold">(888) 574-8885</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-base font-bold text-white ml-[5px]">Platform</h3>
            <div className="space-y-3">
              {[
                { name: 'Track & Book' },
                { name: 'Fleet Management' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-white group"
                >
                  <ChevronRight className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-white font-bold">{item.name}</span>
                </div>
              ))}
            </div>
          </div>


          <div className="space-y-6">
            <h3 className="text-base font-bold text-white ml-[5px]">Navigation</h3>
            <div className="space-y-3">
              <Link to="/" className="flex items-center space-x-2 text-white group hover:text-lightblue transition-colors duration-300">
                <ChevronRight className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-white font-bold">Home</span>
              </Link>
              <Link to="/track" className="flex items-center space-x-2 text-white group hover:text-lightblue transition-colors duration-300">
                <ChevronRight className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-white font-bold">Track</span>
              </Link>
              <Link to="/directory" className="flex items-center space-x-2 text-white group hover:text-lightblue transition-colors duration-300">
                <ChevronRight className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-white font-bold">Directory</span>
              </Link>
              <Link to="/contact" className="flex items-center space-x-2 text-white group hover:text-lightblue transition-colors duration-300">
                <ChevronRight className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-white font-bold">Contact</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-lightblue/30 pt-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="text-white text-xs">
              © 2024 LoadMitra. All rights reserved.
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-lightblue/20">
            <div className="text-center">
              <span className="text-xs text-white/70">
                Powered by{' '}
                <a 
                  href="https://www.hostscaler.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  www.hostscaler.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

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
    </footer>
  )
}

export default Footer
