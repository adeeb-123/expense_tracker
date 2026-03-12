import chalk from "chalk";
import { addExpense } from "../services/expenseService.js";

export default function addCommand(program) {
  program
    .command("add")
    .description("Add a new expense")
    .requiredOption("--description <text>", "Expense description")
    .requiredOption("--amount <number>", "Expense amount")
    .action((options) => {
      if (isNaN(options.amount)) {
        console.log(chalk.red("Amount must be a number"));
        process.exit(1);
      }

      if (!options.description.trim()) {
        console.log(chalk.red("Description cannot be empty"));
        process.exit(1);
      }

      const expense = addExpense(options.description, options.amount);

      console.log(
        chalk.green(`✔ Expense added successfully (ID: ${expense.id})`),
      );
    });
}
