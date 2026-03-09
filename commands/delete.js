import chalk from "chalk";
import { deleteExpense } from "../services/expenseService.js";

export default function deleteCommand(program) {

  program
    .command("delete")
    .requiredOption("--id <number>")
    .action((options) => {

      deleteExpense(options.id);

      console.log(
        chalk.red(`✔ Expense deleted successfully`)
      );
    });
}