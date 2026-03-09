# Expense Tracker CLI

A simple command-line expense tracker built with Node.js.

## Installation

npm install
npm link

## Commands

Add Expense

expense-tracker add --description "Lunch" --amount 20

List Expenses

expense-tracker list

Delete Expense

expense-tracker delete --id 1

Monthly Summary

expense-tracker summary --month 3

Export to CSV

expense-tracker export

Import from CSV

expense-tracker import expenses.csv