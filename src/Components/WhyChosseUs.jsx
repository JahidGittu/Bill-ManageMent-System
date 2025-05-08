import React from 'react';

import { BsClock } from 'react-icons/bs';
import { FiZap } from 'react-icons/fi';
import { TbShieldCheckFilled } from 'react-icons/tb';
import { FaUsers } from 'react-icons/fa';

const features = [
    { icon: <FiZap size={40} />, title: "Instant Bill Payment", desc: "Lightning fast transactions with real-time updates." },
    { icon: <TbShieldCheckFilled size={40} />, title: "100% Secure", desc: "We use bank-level encryption & security." },
    { icon: <BsClock size={40} />, title: "24/7 Service", desc: "Anytime, anywhere — we are available round the clock." },
    { icon: <FaUsers size={40} />, title: "Trusted by Millions", desc: "Over 2 million customers trust us for payments." },
];

const WhyChooseUs = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {features.map((feature, idx) => (
                    <div key={idx} className="p-6 rounded-xl border hover:shadow-md transition">
                        <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
