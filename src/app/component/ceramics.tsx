import React from 'react'

function Ceramics() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Our popular products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="/Large.png"
              alt="The Poplar suede sofa"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">The Poplar suede sofa</h3>
            <p className="text-gray-600">£980</p>
          </div>
          <div className="text-center">
            <img
              src="/photo2.png"
              alt="The Dandy chair"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">The Dandy chair</h3>
            <p className="text-gray-600">£250</p>
          </div>
          <div className="text-center">
            <img
              src="/photo4.png"
              alt="The Dandy chair"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">The Dandy chair</h3>
            <p className="text-gray-600">£250</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-blue-600">
            View collection
          </button>
        </div>
      </div>
    </div>
  )
}

export default Ceramics