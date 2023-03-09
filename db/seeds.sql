INSERT INTO departments (department_name)
VALUES ('Sales'),
('Accounting'),
('Operations');

INSERT INTO roles (title, salary, department_id)
VALUES ('Sales manager', 100000, 1),
('Sales representative', 60000, 1),
('Acounting Lead', 90000, 2),
('Accountant', 70000, 2),
('Operations Manager', 100000, 3),
('Operations Specialist', 50000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Joel", "Miller", 1, NULL),
('Sarah', 'Harper', 2, 1),
('Kevin', 'Gilmore', 3, NULL),
('Jackie', 'Monroe', 4, 3),
('Simon', "Penn", 4, 3),
('Scott', 'Fenton', 5, NULL),
('Jacob', 'Harris', 6, 6),
('Roman', 'Fletcher', 6, 6),
('Lila', 'McMillan', 6, 6);
        
