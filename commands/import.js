import fs from "fs";
import csv from "csv-parser";
import chalk from "chalk";
import { getExpenses, saveExpenses } from "../services/expenseService.js";

export default function importCommand(program) {

  program.command("import <file>").action((file) => {

    const expenses = getExpenses();
    const results = [];

    fs.createReadStream(file)
      .pipe(csv())
      .on("data", (data) => {

        results.push({
          id: Number(data.ID),
          description: data.DESCRIPTION,
          amount: Number(data.AMOUNT),
          date: data.DATE
        });

      })
      .on("end", () => {
        expenses.push(...results);
        saveExpenses(expenses);

        console.log(chalk.green("✔ Expenses imported successfully"));

      });

  });

}