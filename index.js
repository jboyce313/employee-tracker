const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql2");
const questions = require("./questions");
let departments;

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "business_db",
  },
  console.log(`Connected to business_db database`)
);

function showOptions() {
  inquirer.prompt(questions.options).then((response) => {
    switch (response.choice) {
      case "View all departments":
        displayTable("departments");
        break;
      case "View all roles":
        displayTable("roles");
        break;
      case "View all employees":
        displayTable("employees");
        break;
      case "Add a department":
        addDepartment();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "Add a role":
        addRole();
        break;
      case "Update an employee role":
        updateRole();
        break;
      case "Exit":
        process.exit();
        break;
    }
  });
}

function updateRole() {
  inquirer.prompt(questions.updateRoleQuestions).then((data) => {
    db.query(`UPDATE employees
    SET role_id = ${data.newRole}
    WHERE id = ${data.employeeID};`);
    showOptions();
  });
}

function addEmployee() {
  inquirer.prompt(questions.addEmployeeQuestions).then((data) => {
    db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES ('${data.firstName}', '${data.lastName}', ${data.employeeRole}, ${data.employeeManager});`);
    showOptions();
  });
}

function addRole() {
  inquirer.prompt(questions.addRoleQuestions).then((data) => {
    db.query(`INSERT INTO roles (title, salary, department_id)
    VALUES ('${data.roleTitle}', ${data.roleSalary}, ${data.roleDepartment});`);
    showOptions();
  });
}

function addDepartment() {
  inquirer.prompt(questions.addDepartmentQuestions).then((data) => {
    db.query(
      `INSERT INTO departments (department_name)
    VALUES ('${data.departmentName}');`
    );
    showOptions();
  });
}

function displayTable(tableName) {
  db.query(`SELECT * FROM ${tableName}`, function (err, results) {
    console.table(results);
    showOptions();
  });
}

showOptions();

// function getDepartments()
// db.query(`SELECT department_name FROM departments`, (err, results) => {
//   console.log(results);
//   departments = [];
//   for (result of results) {
//     departments.push(result.department_name);
//   }
//   console.log(departments);
// });
