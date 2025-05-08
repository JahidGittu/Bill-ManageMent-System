import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-10 mt-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo & Description */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-3">BillEase</h3>
                    <p className="text-sm text-gray-400">
                        Smart & secure bill payments anytime, anywhere.
                    </p>
                    <div className="flex gap-3 mt-4">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                </div>

                {/* Useful Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Useful Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/bills" className="hover:underline">Pay Bills</a></li>
                        <li><a href="/profile" className="hover:underline">My Profile</a></li>
                        <li><a href="/blogs" className="hover:underline">Blogs</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Support</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">FAQ</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:underline">Help Center</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
                    <p className="text-sm text-gray-400">📞 +880 1234-567890</p>
                    <p className="text-sm text-gray-400">✉️ support@billmanagement.com</p>
                    <p className="text-sm text-gray-400 mt-2">🏠 Address, Dhaka, Bangladesh</p>
                </div>
            </div>

            {/* Bottom */}
            <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Bill Management. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
