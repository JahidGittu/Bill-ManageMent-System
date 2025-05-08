// Components/Testimonials.jsx
import React from 'react';

const testimonials = [
  { name: "Mohammad Rahim", text: "খুবই সহজ ও দ্রুত বিল পরিশোধ করতে পারলাম। ধন্যবাদ!" },
  { name: "Fatema Begum", text: "Security খুব ভালো মনে হয়েছে। আবার ব্যবহার করবো ইনশাআল্লাহ।" },
  { name: "Sakib Hossain", text: "নতুন ইউজার হিসেবেও খুব ইজি লেগেছে। UI খুব ক্লিন।" },
];

const Testimonials = () => {
  return (
    <div className="py-12 bg-primary rounded-xl">
      <h2 className="text-3xl text-white font-bold text-center mb-8">What Our Users Say</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-700 italic mb-4">“{t.text}”</p>
            <h4 className="font-semibold text-right text-primary">- {t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
