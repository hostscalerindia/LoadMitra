import { videoGirl } from '../assets'

const LiveDisplay = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Content - Centered at Top */}
        <div className="text-center mb-16">          
          {/* Main Heading */}
          <h3 className="text-heading font-bold text-darkblue leading-tight mb-6">
            Live <span className='text-lightblue'>Display</span>
          </h3>
          
          {/* Description */}
          <p className="text-para  leading-relaxed max-w-4xl mx-auto">
            Transform Lobby TVs into centers of engagement and operational excellence.
          </p>
        </div>

        {/* Full Width Video at Bottom */}
        <div className="w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg shadow-xl"
          >
            <source src={videoGirl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default LiveDisplay
