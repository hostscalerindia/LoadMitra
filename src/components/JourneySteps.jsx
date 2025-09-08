import React from 'react'

const JourneySteps = () => {
  const journeySteps = [
    {
      step: "1",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Book",
      description: "Post your load requirements and get instant quotes from verified transporters"
    },
    {
      step: "2", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4-2V5l-4-2m-6 4V4l4 2" />
        </svg>
      ),
      title: "Track",
      description: "Monitor your shipment in real-time with GPS tracking and live updates"
    },
    {
      step: "3",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Deliver",
      description: "Get confirmation of safe delivery with digital proof and customer feedback"
    }
  ]

  return (
    <div className="relative py-10">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Journey Steps - Compact Timeline */}
        <div className="mb-10">
          <h2 className="text-heading font-bold text-darkblue text-center mb-8">
            Your Journey with <span className='text-lightblue'>LoadMitra</span>
          </h2>

          <div className="relative">
            {/* Connection Line - Connecting all 3 steps */}
            <div className="absolute top-[88px] left-[15%] right-[15%] h-1 bg-lightblue hidden lg:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative text-center group">
                  {/* Step Number Badge - Above Icon */}
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-para font-bold text-white shadow-md">
                    {step.step}
                  </div>

                  {/* Step Icon - Larger */}
                  <div className="w-16 h-16 bg-lightblue rounded-xl flex items-center justify-center mx-auto mb-3 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  <h3 className="text-para font-bold text-darkblue mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-para leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JourneySteps
