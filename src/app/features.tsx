import React from 'react'

const Features = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-12">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-indigo-600 text-4xl mb-4">
              <i className="fas fa-shipping-fast"></i> {/* Example icon */}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Next day as standard</h3>
            <p className="text-gray-600">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-indigo-600 text-4xl mb-4">
              <i className="fas fa-hand-holding-heart"></i> {/* Example icon */}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Made by true artisans</h3>
            <p className="text-gray-600">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-indigo-600 text-4xl mb-4">
              <i className="fas fa-tags"></i> {/* Example icon */}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Unbeatable prices</h3>
            <p className="text-gray-600">
              For our materials and quality you won’t find better prices anywhere.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-indigo-600 text-4xl mb-4">
              <i className="fas fa-recycle"></i> {/* Example icon */}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Recycled packaging</h3>
            <p className="text-gray-600">
              We use 100% recycled packaging to ensure our footprint is manageable.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Features