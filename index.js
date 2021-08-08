const inquirer = require ("inquirer");
const db = require("./db/connection");


const opt = [
    {
        type: "list",
        name: "selections",
        message: "what would you like to do?",
        choices: [
            "View All Employees",
            "View All Departments",
            "View All Roles",
            "Add Employee",
            "Add Role",
            "Add Department",
            "Update Role",
            "Exit",
        ],
    },
];

const Init = () =>{
    inquirer.prompt(opt)
    .then(answer) =>{
        switch (answer.selections)

        case "View All Employees":
            viewAllEmployees();
            break;
        case "View All Departments":
            viewAllDepartments();
            break;
        case "View All Roles";
            viewAllRoles();
            break;
        case "View All Roles":
            viewAllRoles();
            break;
        case "View All Employees":
            viewAllEmployees();
            break;
        case "Add Roles":
            viewAddROles();
            break;
        case "Add Department":
            viewAddDepartment();
            break;
        case "Update Role":
            viewUpdateRole();
            break;
        case "Exit":
            db.end();
            break;
    });

};

const viewAllEmployees = (req, res) =>{
    const sql = `SELECT first_name, last_name, role_id, role.salary,role_title, department.name as "DEPARTMENT" FROM employee
    INNER JOIN role ON employee.role_id = role.id
    INNER JOIN department ON role.department_id`;
    db.query(sql, (err, res)=>{
        if(err) throw err;
        console.table(res)
        Init();
    })
}

