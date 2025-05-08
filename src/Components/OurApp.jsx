// Components/DownloadApp.jsx
import React from 'react';
import { BsGooglePlay } from 'react-icons/bs';
import { FaAppStore } from 'react-icons/fa';

const OurApp = () => {
    return (
        <div className="bg-base-100 py-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Our Mobile App</h2>
            <p className="text-gray-600 mb-6">Pay your bills on the go, anytime, anywhere!</p>
            <div className="flex justify-center gap-4">
                <a href="#"><BsGooglePlay size={32}  /> </a>
                <a href="#"><FaAppStore size={32}  />  </a>
            </div>
        </div>
    );
};

export default OurApp;
