const connection = require("./connection");

const db = {
  findAllDepartments: function(){
    return connection.promise().query(
      "SELECT department.id, department.name FROM department;"
    );
  }
}

module.exports = db


// module.exports = class DB {
  
//   constructor(connection) {
//     console.log("init")
//   }

    async connect(){
      awau
    }
//   findAllEmployees() {
//     return connection.promise().query(
//       "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
//     );
//   }

  
//   findAllPossibleManagers(employeeId) {
//     return connection.promise().query(
//       "SELECT id, first_name, last_name FROM employee WHERE id != ?",
//       employeeId
//     );
//   }


//   createEmployee(employee) {
//     return connection.promise().query("INSERT INTO employee SET ?", employee);
//   }


//   removeEmployee(employeeId) {
//     return connection.promise().query(
//       "DELETE FROM employee WHERE id = ?",
//       employeeId
//     );
//   }


//   updateEmployeeR(employeeId, roleId) {
//     return connection.promise().query(
//       "UPDATE employee SET role_id = ? WHERE id = ?",
//       [roleId, employeeId]
//     );
//   }


//   updateEmployeeManager(employeeId, managerId) {
//     return connection.promise().query(
//       "UPDATE employee SET manager_id = ? WHERE id = ?",
//       [managerId, employeeId]
//     );
//   }


//   findAllR() {
//     return connection.promise().query(
//       "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
//     );
//   }

//   // 
//   createR(role) {
//     return connection.promise().query("INSERT INTO role SET ?", role);
//   }


//   removeR(roleId) {
//     return connection.promise().query("DELETE FROM role WHERE id = ?", roleId);
//   }

//   viewDepartmentBudgets() {
//     return connection.promise().query(
//       "SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY department.id, department.name;"
//     );
//   }
  
//   findAllDepartments() {
//     return connection.promise().query(
//       "SELECT department.id, department.name FROM department;"
//     );
//   }


//   removeDepartment(departmentId) {
//     return connection.promise().query(
//       "DELETE FROM department WHERE id = ?",
//       departmentId
//     );
//   }

//   createDepartment(department) {
//     return connection.promise().query("INSERT INTO department SET ?", department);
//   }

  

//   findAllEmployeesByManager(managerId) {
//     return connection.promise().query(
//       "SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?;",
//       managerId
//     );
//   }

//   findAllEmployeesByDepartment(departmentId) {
//     return connection.promise().query(
//       "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id = ?;",
//       departmentId
//     );
//   }

// }
