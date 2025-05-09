// utility/localStorage.js
export const getPaidBills = () => {
  const paid = localStorage.getItem('paidBills');
  return paid ? JSON.parse(paid) : [];
};

export const savePaidBill = (id) => {
  const paid = getPaidBills();
  if (!paid.includes(id)) {
    paid.push(id);
    localStorage.setItem('paidBills', JSON.stringify(paid));
  }
};

export const getBalance = () => {
  const balance = localStorage.getItem('balance');
  return balance ? parseFloat(balance) : 10000;
};

export const setBalance = (amount) => {
  localStorage.setItem('balance', amount);
};
