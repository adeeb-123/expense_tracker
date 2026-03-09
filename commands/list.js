import chalk from "chalk";
import { getExpenses } from "../services/expenseService.js";

export default function listCommand(program) {

  program
    .command("list")
    .description("List all expenses")
    .action(() => {

      const expenses = getExpenses();

      console.log(chalk.blue("\nYour Expenses:\n"));

      expenses.forEach((e) => {
        console.log(
          `${e.id}. ${e.description} - ₹${e.amount} (${e.date})`
        );
      });
    });
}