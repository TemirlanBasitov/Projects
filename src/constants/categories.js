const incomeColors = ['#96bb7c', '#7c9473', '#96bb7c', '#81b214', '#28df99'];
const expenseColors = ['#c70039', '#a9294f', '#ef4f4f', '#fa9579', '#ff4646', '#c75643', '#fd3a69', '#ec5858', '#f05454', '#a20a0a'];

export const incomeCategories = [
  { type: 'Salary', amount: 0, color: incomeColors[0] },
  { type: 'Extra incomes', amount: 0, color: incomeColors[1] },
  { type: 'Deposits', amount: 0, color: incomeColors[2] },
  { type: 'Gifts', amount: 0, color: incomeColors[3] },
  { type: 'Savings', amount: 0, color: incomeColors[4] },
];

export const expenseCategories = [
  { type: 'Wi-fi cost', amount: 0, color: expenseColors[0] },
  { type: 'Wsiz tuition fee', amount: 0, color: expenseColors[1] },
  { type: 'Dorm', amount: 0, color: expenseColors[2] },
  { type: 'Travel', amount: 0, color: expenseColors[3] },
  { type: 'Food', amount: 0, color: expenseColors[4] },
  { type: 'Shopping', amount: 0, color: expenseColors[5] },
  { type: 'Library', amount: 0, color: expenseColors[6] },
  { type: 'Entertainment', amount: 0, color: expenseColors[7] },
  { type: 'Phone', amount: 0, color: expenseColors[8] },
  { type: 'Other', amount: 0, color: expenseColors[9] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};
