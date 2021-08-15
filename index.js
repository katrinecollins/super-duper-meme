const inquirer = require("inquirer");
const db = require("./db/connection");

// let departmentArr = []
// let employeesArr = []
// let managerArr = []

db.connect(async (err) => {
    if (err) throw err;

    // await loadDept();
    // await loadEmployee();

    await Init();
})


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

const Init = async () => {
    await inquirer.prompt(opt)
    .then(answer => {
            switch (answer.selections) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "View All Departments":
                    viewAllDepartments();
                    break;
                case "View All Roles":
                    viewAllRoles();
                    break;
                case "Add Role":
                    addRole();
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
            }
        })
};

// const loadDept = async () => {
//     departmentArr = []
//     const sql = `SELECT * FROM department`
//     await db.query(sql, (err, data) => {
//         for (i = 0; i < data.length; i++) {
//             departmentArr.push(data[i].name)
//         }
//     })
// }

// const loadEmployee = async () => {
//     employeesArr = []
//     const sql = `SELECT * FROM employee`
//     await db.query((sql, err, data) => {
//         for (i = 0; i < data.length; i++) {
//             employeesArr.push(data[i].manager_id)
//         }
//     })
// }
// const loadManager = () => {
//     managerArr = []
//     const sql = `SELECT * FROM employee`
//     db.query(sql, (err, data) => {
//         for (i = 0; i < data.length; i++) {
//             employeesArr.push(data[i].manager_id)
//         }
//     })
// }


const viewAllEmployees = () => {
    const sql = `SELECT first_name, last_name, role_id, role.salary, role.title, department.name as "DEPARTMENT" FROM employee
    INNER JOIN role ON employee.role_id = role.id
    INNER JOIN department ON role.department_id;`;

    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res)
        Init();
    })
};

const viewAllDepartments = () => {
    const sql = `SELECT * FROM department;`;

    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res)
        Init();
    })
};

const viewAllRoles = () => {
    const sql = `SELECT * FROM role;`;

    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res)
        Init();
    })
};

const addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the role title?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the role salary?"
        },
        {
            type: "input",
            name: "department_id",
            message: "What is the role's department_id?"
        }
    ])
    .then(answers => {
        const sql = `INSERT INTO role (title, salary, department_id) VALUES ("${answers.title}", "${answers.salary}", ${answers.department_id});`;

        db.query(sql, (err, res) => {
            if (err) throw err;
            console.table(res)
            Init();
        })
    })
};

const viewAddDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "department_name",
            message: "What is the department name?"
        }
    ])
    .then(answer => {
        const sql = `INSERT INTO department (department_name) VALUES ("${answer.addDepartment}")`;

        db.query(sql, (err, res) => {
            if (err) throw err;
            console.table(res)
            Init();
        })
    })
};

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the emplyee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: "input",
            name: "role",
            message: "What is the employee's role?"
        },
        {
            type: "input",
            name: "manager",
            message: "Who is the employee's manager?"
        }
    ])
    .then(answers => {
        const sql = `INSERT INTO employee (first_name, last_name, role, manager) VALUES ("${answers.first_name}", "${answers.last_name}", "${answers.role}", "${answers.manager});`;

        db.query(sql, (err, res) => {
            if (err) throw err;
            console.table(res)
            Init();
        })
    })


    
};
