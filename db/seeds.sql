USE employee_tracker;
INSERT INTO department (name)
VALUES ("FINANCE"),
("MARKETING"),
("SALES"),
("CUSTOMER SERVICE"),
("QUALITY ASSURANCE");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 65000, 3),
("Assistant Manager", 40000, 3),
("CEO", 150000, 1),
("CFO", 150000, 2),
("SALES PERSON", 35000, 4),
("QUALITY ASSURANCE INSPECTOR", 45000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Brown", 1, 1),
("Malik", "Jones", 2, 1),
("Eddy", "Griffin", 3, 2),
("Rich", "Long", 2, 1),
("Elijah","Wood", 5, 2),
("Ruth", "Ginsberg", 5, 2),
("John", "Brown", 4, 1),
("Arnold", "Shwartz", 4, 2);