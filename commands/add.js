import chalk from "chalk";
import { addExpense } from "../services/expenseService.js";

export default function addCommand(program) {

  program
    .command("add")
    .description("Add a new expense")
    .requiredOption("--description <text>", "Expense description")
    .requiredOption("--amount <number>", "Expense amount")
    .action((options) => {

      const expense = addExpense(options.description, options.amount);

      console.log(
        chalk.green(`✔ Expense added successfully (ID: ${expense.id})`)
      );
    });
}