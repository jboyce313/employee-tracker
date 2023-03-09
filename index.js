const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "business_db",
  },
  console.log(`Connected to business_db database`)
);

const options = [
  {
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
    name: "choice",
  },
];

function showOptions() {
  inquirer.prompt(options).then((response) => {
    switch (response.choice) {
      case "View all departments":
        displayTable("departments");
      case "View all roles":
        displayTable("roles");
      case "View all employees":
        displayTable("employees");
      case "Add a department":
        addDepartment();
      case "Add an employee":
        addEmployee();
      case "Add a role":
        addRole();
      case "Update and employee role":
        updateRole();
    }
  });
}

function addDepartment() {}

function displayTable(tableName) {
  db.query(`SELECT * FROM ${tableName}`, function (err, results) {
    console.table(results);
  });
}

showOptions();
