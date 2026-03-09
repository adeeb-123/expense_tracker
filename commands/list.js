import chalk from "chalk";
import Table from "cli-table3";
import { getExpenses } from "../services/expenseService.js";

export default function listCommand(program) {

  program.command("list").action(() => {

    const expenses = getExpenses();

    const table = new Table({
      head: ["ID", "Description", "Amount", "Date"]
    });

    expenses.forEach(e => {
      table.push([e.id, e.description, `₹${e.amount}`, e.date]);
    });

    console.log(chalk.blue("\nYour Expenses\n"));
    console.log(table.toString());
  });
}