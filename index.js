#!/usr/bin/env node

import { Command } from "commander";
import addCommand from "./commands/add.js";
import listCommand from "./commands/list.js";
import deleteCommand from "./commands/delete.js";
import summaryCommand from "./commands/summary.js";

const program = new Command();

program
  .name("expense-tracker")
  .description("CLI Expense Tracker")
  .version("1.0.0");

addCommand(program);
listCommand(program);
deleteCommand(program);
summaryCommand(program);

program.parse();