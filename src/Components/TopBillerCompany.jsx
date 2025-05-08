import React, { useEffect, useState } from 'react';

const TopBiillerCompany = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch('/UtilityCompanies.json')
            .then(res => res.json())
            .then(data => setCompanies(data));
    }, []);

    return (
        <div className="py-8 px-4 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Choose a Utility Company</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center">
                {
                    companies.map(company => (
                        <div key={company.id} className="group relative p-4 bg-base-100 rounded-xl shadow hover:shadow-lg transition duration-200 border border-gray-200">
                            <img src={company.logo} alt={company.name} className="w-16 h-16 object-contain mx-auto mb-2" />
                            <h3 className="text-center font-semibold">{company.name}</h3>
                            <p className="text-xs text-center text-gray-500">{company.type}</p>
                            <p className="text-[10px] text-center mt-1 text-primary capitalize">{company.billingType} billing</p>

                            {/* Tooltip on hover */}
                            <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10 top-full mt-2 left-1/2 transform -translate-x-1/2 w-64 bg-base-200 p-3 rounded-xl shadow text-sm text-gray-700">
                                <p className="font-semibold mb-1">"{company.slogan}"</p>
                                <p>{company.details}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TopBiillerCompany;
