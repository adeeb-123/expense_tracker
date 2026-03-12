#!/usr/bin/env node

import { Command } from "commander";
import addCommand from "./commands/add.js";
import listCommand from "./commands/list.js";
import deleteCommand from "./commands/delete.js";
import summaryCommand from "./commands/summary.js";
import exportCommand from "./commands/export.js";
import importCommand from "./commands/import.js";
import didYouMean from "didyoumean";

const program = new Command();

program
  .name("expense-tracker")
  .description("CLI Expense Tracker")
  .version("1.0.0");

addCommand(program);
listCommand(program);
deleteCommand(program);
summaryCommand(program);
exportCommand(program);
importCommand(program);

const commands = ["add", "list", "delete", "summary", "export", "import"];

const input = process.argv[2];

if (input && !commands.includes(input)) {
  const suggestion = didYouMean(input, commands);

  if (suggestion) {
    console.log(`Did you mean "${suggestion}"?`);
  }
}


program.parse();