import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-16">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex justify-around align-center flex-wrap">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">TechHeads</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Your trusted partner for premium technology <br />products. Quality gadgets, competitive prices, <br />exceptional service.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            <Link
                                to="/"
                                className="block text-gray-300 hover:text-white text-sm transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                to="/products"
                                className="block text-gray-300 hover:text-white text-sm transition-colors"
                            >
                                Products
                            </Link>
                            <Link
                                to="/aboutus"
                                className="block text-gray-300 hover:text-white text-sm transition-colors"
                            >
                                About Us
                            </Link>
                            <Link
                                to="/cart"
                                className="block text-gray-300 hover:text-white text-sm transition-colors"
                            >
                                Cart <MdShoppingCart className="inline" />
                            </Link>
                        </div>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="font-semibold mb-4">Customer Service</h4>
                        <div className="space-y-2 text-sm text-gray-300">
                            <p>📞 1-800-TECH-HELP</p>
                            <p>📧 support@techheads.com</p>
                            <p>💬 Live Chat: 24/7</p>
                            <p>📦 Free Shipping on $50+</p>
                            <p>🔄 30-Day Returns</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm text-gray-300">
                            © 2025 TechHeads. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm text-gray-300">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer