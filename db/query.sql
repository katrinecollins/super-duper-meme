USE employee_tracker;

SELECT employee.first_name, employee.last_name, role.salary, role.title, department.name as "Department Name", Manager.first_name;
FROM employee
LEFT JOIN role ON employee.role.id = role.id,
LEFT JOIN role ON department ON role.department_id = department.id,
LEFT JOIN employee manager ON employee.manager_id = Manager.id;
