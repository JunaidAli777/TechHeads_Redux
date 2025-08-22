import React from 'react'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { MdClose, MdMenu, MdShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cart = useSelector(state => state.cart);

    const getTotalItems = () => {
        return cart.reduce((total, item) => (total + item.quantity), 0);
    }
    
    return (
        <header className="bg-white shadow-md border-none">
            <nav className="max-w-6xl mx-auto px-4 py-4">
                <div className='flex justify-between items-center'>
                    <Link to="/">
                        <img className='mr-3 h-12' src="/logo.png" alt="company logo" />
                    </Link>

                    {/*Desktop menu*/}
                    <div className='hidden lg:flex space-x-64'>
                        <div className="flex space-x-6 items-center">
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
                                }>
                                Home
                            </NavLink>
                            <NavLink
                                to='/aboutus'
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
                                }>
                                About
                            </NavLink>
                            <NavLink
                                to='/products'
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
                                }>
                                Products
                            </NavLink>
                        </div>

                        <div className='flex space-x-4'>
                            <NavLink to="/cart"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
                                }>
                                Cart
                                <MdShoppingCart className='inline ml-1' />
                                {getTotalItems() > 0 && (
                                    <span className="bg-green-600 text-white rounded-full text-xs px-2 min-w-[20px] text-center inline-block ml-1">
                                        {getTotalItems()}
                                    </span>
                                )}
                            </NavLink>
                            <Link to="#">Log in</Link>
                            <Link to="#">Sign up</Link>
                        </div>
                    </div>

                    {/* Mobile menu icon */}
                    <button
                        className="lg:hidden text-2xl focus:outline-none cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <MdClose /> : <MdMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden mt-4 space-y-4">
                        <NavLink className="rounded block p-2 text-blue-500 hover:text-white hover:bg-blue-500" to="/" onClick={() => setIsOpen(false)}>
                            Home
                        </NavLink>
                        <NavLink className="rounded block p-2 text-blue-500 hover:text-white hover:bg-blue-500" to="/about" onClick={() => setIsOpen(false)}>
                            About Us
                        </NavLink>
                        <NavLink className="rounded block p-2 text-blue-500 hover:text-white hover:bg-blue-500" to="/products" onClick={() => setIsOpen(false)}>
                            Products
                        </NavLink>
                        <NavLink className="rounded block p-2 text-blue-500 hover:text-white hover:bg-blue-500" to="/cart" onClick={() => setIsOpen(false)}>
                            Cart <MdShoppingCart className='inline'/>
                        </NavLink>
                        <Link className="rounded block p-2 text-blue-500 hover:text-white hover:bg-blue-500" to="#" onClick={() => setIsOpen(false)}>
                            Log in
                        </Link>
                        <Link className="rounded block p-2 text-blue-500 hover:text-white hover:bg-blue-500" to="#" onClick={() => setIsOpen(false)}>
                            Sign up
                        </Link>
                    </div>
                )}
            </nav>

        </header>
    )
}

export default Header
