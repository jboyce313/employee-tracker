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
      "Exit",
    ],
    name: "choice",
  },
];

const addDepartmentQuestions = [
  {
    type: "input",
    message: "What is the name of the department",
    name: "departmentName",
  },
];

const addRoleQuestions = [
  {
    type: "input",
    message: "What is the title for this role?",
    name: "roleTitle",
  },
  {
    type: "input",
    message: "What is the salary of this role?",
    name: "roleSalary",
  },
  {
    type: "input",
    message: "Which department does the role belong to? (enter department ID)",
    name: "roleDepartment",
  },
];

const addEmployeeQuestions = [
  {
    type: "input",
    message: `What is the employee's first name?`,
    name: "firstName",
  },
  {
    type: "input",
    message: `What is the employee's last name?`,
    name: "lastName",
  },
  {
    type: "input",
    message: `What is the employee's role? (Enter role ID):`,
    name: "employeeRole",
  },
  {
    type: "input",
    message: `Who is the employee's manager? (Enter manager's employee ID or NULL if no manager)`,
    name: "employeeManager",
  },
];

const updateRoleQuestions = [
  {
    type: "input",
    message: "Enter employee ID:",
    name: "employeeID",
  },
  {
    type: "input",
    message: "Enter ID for new role:",
    name: "newRole",
  },
];

module.exports = {
  options,
  addDepartmentQuestions,
  addRoleQuestions,
  addEmployeeQuestions,
  updateRoleQuestions,
};
