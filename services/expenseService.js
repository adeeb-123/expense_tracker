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