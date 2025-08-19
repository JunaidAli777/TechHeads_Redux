import React from 'react'

const AboutUs = () => {
  return (
     <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">About TechStore</h1>
      
      <div className="prose prose-lg">
        <p className="text-lg text-gray-600 mb-6">
          TechHeads is your premier destination for cutting-edge technology products. 
          We've been serving customers since 2020, providing high-quality gadgets and 
          exceptional customer service.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To make the latest technology accessible to everyone through competitive 
            pricing, reliable products, and outstanding customer support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Why Choose Us?</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Certified authentic products</li>
              <li>• Competitive pricing</li>
              <li>• Fast and secure shipping</li>
              <li>• 30-day return policy</li>
              <li>• Expert customer support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <div className="text-gray-600 space-y-2">
              <p>📧 support@techstore.com</p>
              <p>📞 1-800-TECH-HELP</p>
              <p>📍 123 Tech Street, Silicon Valley, CA</p>
              <p>🕒 Mon-Fri: 9AM-6PM PST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
