import React from 'react'

function Seclast() {
  return (
    <div className="flex flex-col md:flex-row h-screen mt-32 bg-gray-50">
    {/* Left Section */}
    <div className="flex-1 flex items-center justify-center p-8 bg-white">
      <div className="max-w-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          From a studio in London to a global brand with over 400 outlets
        </h1>
        <p className="text-gray-600 mb-6">
          When we started Avoa, the idea was simple. Make high-quality furniture affordable and available for the mass market.
        </p>
        <p className="text-gray-600 mb-6">
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design to set. The Chelsea boutique became the hotspot for the London interior design community.
        </p>
        <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900">
          Get in touch
        </button>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex-1 bg-cover bg-center relative">
      <img
        src="/image1.png"
        alt="Furniture and decor"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
  )
}

export default Seclast