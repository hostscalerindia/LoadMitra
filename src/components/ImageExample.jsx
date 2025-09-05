import { useState } from 'react'

const ImageExample = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Example of how to import and use images
  // Uncomment these lines when you add actual images
  
  // import logo from '../assets/images/logos/logo.png'
  // import heroImage from '../assets/images/hero/hero-bg.jpg'
  // import shuttleIcon from '../assets/images/icons/shuttle-icon.svg'

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">
        Image Usage Examples
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Example 1: Basic Image */}
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-100">
          <h3 className="text-xl font-semibold text-neutral-800 mb-4">Basic Image</h3>
          <div className="bg-neutral-100 rounded-lg p-4 text-center">
            {/* Replace this with your actual image */}
            <div className="w-32 h-32 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-lg font-bold">Logo</span>
            </div>
            <p className="text-para text-neutral-600">
              {/* <img src={logo} alt="Company Logo" className="w-32 h-32 mx-auto" /> */}
              Place your logo.png here
            </p>
          </div>
        </div>

        {/* Example 2: Background Image */}
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-100">
          <h3 className="text-xl font-semibold text-neutral-800 mb-4">Background Image</h3>
          <div 
            className="h-32 rounded-lg bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ 
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f3f4f6"/><text x="150" y="100" text-anchor="middle" fill="%236b7280" font-family="Arial" font-size="16">Hero Background</text></svg>')`
            }}
          >
            {/* Replace with: style={{ backgroundImage: `url(${heroImage})` }} */}
            <p className="text-neutral-600 bg-white/80 px-4 py-2 rounded">
              Background Image
            </p>
          </div>
        </div>

        {/* Example 3: Responsive Image */}
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-100">
          <h3 className="text-xl font-semibold text-neutral-800 mb-4">Responsive Image</h3>
          <div className="bg-neutral-100 rounded-lg p-4">
            {/* Replace with your actual image */}
            <div className="w-full h-24 bg-gradient-to-r from-accent-400 to-accent-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Responsive Image</span>
            </div>
            <p className="text-para text-neutral-600 mt-2 text-center">
              {/* <img 
                src={shuttleIcon} 
                alt="Shuttle Icon" 
                className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover rounded-lg" 
              /> */}
              Place your shuttle-icon.svg here
            </p>
          </div>
        </div>

        {/* Example 4: Image with Hover Effects */}
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-100">
          <h3 className="text-xl font-semibold text-neutral-800 mb-4">Interactive Image</h3>
          <div className="bg-neutral-100 rounded-lg p-4 text-center">
            <div 
              className="w-32 h-32 bg-gradient-to-r from-success-400 to-success-600 rounded-full mx-auto mb-4 flex items-center justify-center cursor-pointer transition-all duration-400 hover:scale-110 hover:shadow-glow"
              onClick={() => setSelectedImage('interactive')}
            >
              <span className="text-white text-lg font-bold">Click Me</span>
            </div>
            <p className="text-para text-neutral-600">
              Hover and click effects
            </p>
          </div>
        </div>
      </div>

      {/* Image Upload Section */}
      <div className="mt-12 bg-white rounded-2xl p-8 shadow-soft border border-neutral-100">
        <h3 className="text-2xl font-semibold text-neutral-800 mb-6 text-center">
          How to Add Your Images
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-para font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="font-semibold text-neutral-800">Place Images in Folders</h4>
              <p className="text-neutral-600 text-para">
                Put your images in the appropriate subfolder: <code className="bg-neutral-100 px-2 py-1 rounded">src/assets/images/logos/</code>, 
                <code className="bg-neutral-100 px-2 py-1 rounded">src/assets/images/hero/</code>, etc.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-para font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="font-semibold text-neutral-800">Update index.js</h4>
              <p className="text-neutral-600 text-para">
                Export your images in <code className="bg-neutral-100 px-2 py-1 rounded">src/assets/images/index.js</code>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-para font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="font-semibold text-neutral-800">Import and Use</h4>
              <p className="text-neutral-600 text-para">
                Import images in your components and use them in JSX
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-neutral-50 rounded-lg">
          <h4 className="font-semibold text-neutral-800 mb-2">Example Code:</h4>
          <pre className="text-para text-neutral-600 bg-white p-3 rounded border overflow-x-auto">
{`// In src/assets/images/index.js
export { default as logo } from './logos/logo.png'
export { default as heroImage } from './hero/hero-bg.jpg'

// In your component
import { logo, heroImage } from '../assets/images'

// Use in JSX
<img src={logo} alt="Logo" className="w-32 h-32" />
<div style={{ backgroundImage: \`url(\${heroImage})\` }}>`}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default ImageExample
