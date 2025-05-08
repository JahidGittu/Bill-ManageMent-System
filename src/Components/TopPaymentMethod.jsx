import React, { useEffect, useState } from 'react';

const TopPaymentMethod = () => {
  const [methods, setMethods] = useState([]);

  useEffect(() => {
    fetch('/PaymentMethodsData.json')
      .then(res => res.json())
      .then(data => setMethods(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Available Payment Methods</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {methods.map(method => (
          <div key={method.id} className="p-4 border border-gray-400 rounded-xl shadow-md hover:shadow-lg transition">
            <img src={method.logo} alt={method.name} className="w-28 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-1">{method.name}</h3>
            <p className="text-sm text-center text-gray-500 mb-2">{method.type}</p>
            <ul className="text-sm text-center mb-2">
              <li>{method.advantages.join(', ')}✅ </li>
              <li>{method.disadvantages.join(', ')}❌ </li>
            </ul>
            <p className="text-green-600 font-semibold text-sm text-center">🎁 {method.discount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPaymentMethod;



