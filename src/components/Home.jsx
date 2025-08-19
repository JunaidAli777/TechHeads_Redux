import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Welcome to TechHeads
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Your one-stop shop for the latest tech gadgets
                </p>
                <Link
                    to="/products"
                    className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    Shop Now
                </Link>
            </div>

            <div className='max-w-screen flex justify-around items-center flex-wrap'>
                <img className="w-64 h-48 object-cover" src="/adpic1.jpg" alt="" />
                <img className="w-64 h-48 object-cover" src="/adpic2.webp" alt="" />
                <img className="w-64 h-48 object-cover" src="/adpic3.jpg" alt="" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
                    <p className="text-gray-600">Premium tech gadgets from trusted brands</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Fast Shipping</h3>
                    <p className="text-gray-600">Quick delivery to your doorstep</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Great Support</h3>
                    <p className="text-gray-600">24/7 customer service assistance</p>
                </div>
            </div>
        </div>
    )
}

export default Home
