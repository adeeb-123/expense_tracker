import chalk from "chalk";
import { createObjectCsvWriter } from "csv-writer";
import { getExpenses } from "../services/expenseService.js";

export default function exportCommand(program) {

  program.command("export").action(async () => {

    const expenses = getExpenses();

    const csvWriter = createObjectCsvWriter({
      path: "expenses.csv",
      header: [
        { id: "id", title: "ID" },
        { id: "description", title: "DESCRIPTION" },
        { id: "amount", title: "AMOUNT" },
        { id: "date", title: "DATE" }
      ]
    });

    await csvWriter.writeRecords(expenses);

    console.log(chalk.green("✔ Expenses exported to expenses.csv"));
  });

}