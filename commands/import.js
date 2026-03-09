import fs from "fs";
import csv from "csv-parser";
import chalk from "chalk";
import { saveExpenses } from "../services/expenseService.js";

export default function importCommand(program) {

  program.command("import <file>").action((file) => {

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

        saveExpenses(results);

        console.log(chalk.green("✔ Expenses imported successfully"));

      });

  });

}