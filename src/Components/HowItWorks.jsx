// Components/HowItWorks.jsx
import React from 'react';

const steps = [
  "Choose a Utility Company",
  "Enter Your Customer Info",
  "Verify Billing Amount",
  "Confirm & Pay Securely"
];

const HowItWorks = () => {
  return (
    <div className="bg-base-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
      <ol className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {steps.map((step, i) => (
          <li key={i} className="p-4 bg-base-200 hover:bg-orange-200 duration-600 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary mb-2">Step - {i + 1}</div>
            <p className="text-sm font-medium">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HowItWorks;
