const inquirer = require("inquirer");
const mysql = require("mysql2");
const { getAllDepartments } = require("./db");

async function connect(){
    return await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees"
    });
}

async function ask(){
    const resp = await inquirer.prompt([
            {
            
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View All Employees By Manager",
                    value: "VIEW_EMPLOYEES_BY_MANAGER"
                },
                {
                    name: "View All Employees By Department",
                    value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Update Employee R",
                    value: "UPDATE_EMPLOYEE_R"
                },
                {
                    name: "Remove Employee",
                    value: "REMOVE_EMPLOYEE"
                },
                {
                    name: "Update Employee Manager",
                    value: "UPDATE_EMPLOYEE_MANAGER"
                },
                {
                    name: "View All Rs",
                    value: "VIEW_R"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Add R",
                    value: "ADD_R"
                },
                {
                    name: "Remove R",
                    value: "REMOVE_R"
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "View Total Utilized Budget By Department",
                    value: "VIEW_UTILIZED_BUDGET_BY_DEPARTMENT"
                },
                {
                    name: "Remove Department",
                    value: "REMOVE_DEPARTMENT"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
            }
        ]).then(res => {
            let choice = res.choice;
            //Call the appropriate function depending on what the user chose
            switch (choice) {
                case "VIEW_EMPLOYEES":
                    viewEmployees();
                    break;
                case "VIEW_EMPLOYEES_BY_MANAGER":
                    viewEmployeesByManager();
                    break;
                case "VIEW_EMPLOYEES_BY_DEPARTMENT":
                    viewEmployeesByDepartment();
                    break;
                case "ADD_EMPLOYEE":
                    addEmployee();
                    break;
                case "UPDATE_EMPLOYEE_R":
                    updateEmployeeR();
                    break;
                case "REMOVE_EMPLOYEE":
                    removeEmployee();
                    break;
                case "UPDATE_EMPLOYEE_MANAGER":
                    updateEmployeeManager();
                    break;
                case "VIEW_DEPARTMENTS":
                    viewDepartments();
                    break;
                case "ADD_DEPARTMENT":
                    addDepartment();
                    break;
                case "REMOVE_DEPARTMENT":
                    removeDepartment();
                    break;
                case "VIEW_UTILIZED_BUDGET_BY_DEPARTMENT":
                    viewUtilizedBudgetByDepartment();
                    break;
                case "VIEW_R":
                    viewR();
                    break;
                case "ADD_R":
                    addR();
                    break;
                case "REMOVE_R":
                    removeR();
                    break;
                default:
                    quit();
            }
         }
        )

    const db = await connect()
    const departments = await getAllDepartments(db)


    const result = await db.promise().query(
        "SELECT department.id, department.name FROM department;"
    );
    const query = result()
    console.log(query)

}

ask()

function quit() {
    console.log("thats enough!");
    process.exit();
  }
   
