const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "business_db",
  },
  console.log(`Connected to business_db database`)
);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
