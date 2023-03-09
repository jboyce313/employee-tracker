INSERT INTO departments (department_name)
VALUES ('name');

INSERT INTO roles (title, salary, department_id)
VALUES ('title', 5000, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('nn', 'mm', 1, NULL),
        ('jj', 'hh', 1, 1);
