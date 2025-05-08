import React, { useEffect, useState } from 'react';
import { useLoaderData} from 'react-router';
import Navbar from '../Components/Navbar';
import { getPaidBills, savePaidBill, getBalance, setBalance } from '../Utility/LocalStorage';

const Bills = () => {
    const data = useLoaderData();
    const [bills, setBills] = useState([]);
    const [balance, setLocalBalance] = useState(getBalance());

    useEffect(() => {
        const paidBills = getPaidBills();
        const updated = data.map(bill => ({
            ...bill,
            status: paidBills.includes(bill.id) ? 'paid' : 'unpaid'
        }));
        setBills(updated);
    }, [data]);

    const handlePay = (bill) => {
        if (bill.status === 'paid') return;
        if (balance < bill.amount) {
            alert("❌ Not enough balance!");
            return;
        }

        // Update bill
        const updatedBills = bills.map(b =>
            b.id === bill.id ? { ...b, status: 'paid' } : b
        );
        setBills(updatedBills);

        // Update balance
        const newBalance = balance - bill.amount;
        setLocalBalance(newBalance);
        setBalance(newBalance); // save to localStorage

        // Save paid bill ID
        savePaidBill(bill.id);

        alert("✅ Payment successful!");
    };

    return (
        <div>
            <header>
                <Navbar balance={balance} />
            </header>
            <div className="w-11/12 mx-auto py-10">
                <h2 className="text-3xl font-bold text-center mb-8">All Your Bills</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {bills.map((bill) => (
                        <div
                            key={bill.id}
                            className="bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg p-5 transition-all duration-300 flex flex-col sm:flex-row justify-between items-center gap-5">
                            <div className="w-32 shrink-0">
                                <img className="w-full" src={bill.logo} alt={bill.company} />
                            </div>

                            <div className="flex1">
                                <h3 className="text-xl font-semibold text-gray-800">{bill.company}</h3>
                                <p className="text-sm text-gray-500 mb-1">Type: {bill.type}</p>
                            </div>

                            <div className='flex1'>
                                <p className="text-sm text-gray-600 mb-1">
                                    Due Date: <span className="text-red-500 font-medium">
                                        {new Date(bill.dueDate).toLocaleDateString()}
                                    </span>
                                </p>
                                <p className="text-base font-bold text-gray-700">Amount: {bill.amount} ৳</p>
                            </div>

                            <div>
                                <button
                                    onClick={() => handlePay(bill)}
                                    className={`btn ${bill.status === 'paid' ? 'btn-success cursor-default' : 'btn-primary'}`}
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
