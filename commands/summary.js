import chalk from "chalk";
import { getSummary } from "../services/expenseService.js";

export default function summaryCommand(program) {

  program
    .command("summary")
    .option("--month <number>")
    .action((options) => {

      const total = getSummary(options.month);

      if (options.month) {
        console.log(
          chalk.green(`Total expenses for month ${options.month}: ₹${total}`)
        );
      } else {
        console.log(
          chalk.green(`Total expenses: ₹${total}`)
        );
      }
    });
}