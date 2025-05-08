import React from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../Components/Navbar';

const Bills = () => {
    const bills = useLoaderData();

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="w-11/12 mx-auto py-10">
                <h2 className="text-3xl font-bold text-center mb-8">All Your Bills</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {bills.map((bill) => (
                        <div
                            key={bill.id}
                            className="bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg p-5 transition-all duration-300 flex flex-col sm:flex-row justify-between items-center gap-5">
                            {/* Logo */}
                            <div className="w-32 shrink-0">
                                <img className="w-full" src={bill.logo} alt={bill.company} />
                            </div>

                            {/* Info */}
                            <div className="flex1">
                                <h3 className="text-xl font-semibold text-gray-800">{bill.company}</h3>
                                <p className="text-sm text-gray-500 mb-1">Type: {bill.type}</p>
                            </div>

                            <div className='flex1'>
                                <p className="text-sm text-gray-600 mb-1">
                                    Due Date: <span className="text-red-500 font-medium">{bill.dueDate}</span>
                                </p>
                                <p className="text-base font-bold text-gray-700">Amount: {bill.amount} ৳</p>
                            </div>

                            {/* Button */}
                            <div>
                                <button
                                    className={`btn ${bill.status === 'paid' ? 'btn-success cursor-default' : 'btn-primary'
                                        }`}
                                    disabled={bill.status === 'paid'}
                                >
                                    {bill.status === 'paid' ? 'Paid' : 'Pay Now'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Bills;
