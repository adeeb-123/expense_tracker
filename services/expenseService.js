import fs from "fs";

const FILE_PATH = "./data/expenses.json";

export function getExpenses() {
  const data = fs.readFileSync(FILE_PATH, "utf-8");
  return JSON.parse(data);
}

export function saveExpenses(expenses) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(expenses, null, 2));
}

export function addExpense(description, amount) {
  const expenses = getExpenses();

  const newExpense = {
    id: expenses.length + 1,
    description,
    amount: Number(amount),
    date: new Date().toISOString().split("T")[0]
  };

  expenses.push(newExpense);
  saveExpenses(expenses);

  return newExpense;
}

export function deleteExpense(id) {
  const expenses = getExpenses();

  const filtered = expenses.filter(e => e.id !== Number(id));

  saveExpenses(filtered);
}

export function getSummary(month) {
  const expenses = getExpenses();

  let filtered = expenses;

  if (month) {
    filtered = expenses.filter(e => {
      const expenseMonth = new Date(e.date).getMonth() + 1;
      return expenseMonth === Number(month);
    });
  }

  return filtered.reduce((sum, e) => sum + e.amount, 0);
}