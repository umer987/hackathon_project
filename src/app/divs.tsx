import React from 'react'

const Divs = () => {
  return (
// pages/index.js


    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">New Ceramics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src="/photo-1.png"
              alt="The Dandy chair"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-left">The Dandy chair</h3>
            <p className="text-gray-600 text-left" >£250</p>
          </div>
          <div className="text-center">
            <img
              src="photo-2.png"
              alt="Rustic Vase Set"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg text-left font-semibold">Rustic Vase Set</h3>
            <p className="text-gray-600 text-left">£155</p>
          </div>
          <div className="text-center">
            <img
              src="photo-3.png"
              alt="The Silky Vase"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-left">The Silky Vase</h3>
            <p className="text-gray-600 text-left">£125</p>
          </div>
          <div className="text-center">
            <img
              src="photo.png"
              alt="The Lucy Lamp"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg text-left font-semibold">The Lucy Lamp</h3>
            <p className="text-gray-600 text-left">£399</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button >
            View collection
          </button>
        </div>
      </div>
    </div>
  );
}


  


export default Divs