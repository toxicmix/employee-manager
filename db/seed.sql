use employees;

INSERT INTO department
    (name)
VALUES
    ('cool'),
    ('less cool'),
    ('coolest'),
    ('ryangosling');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('coder', 400, 1),
    ('doordash', 500, 1),
    ('moviemaker', 1000, 2),
    ('driver', 200, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('sam', 'goat', 1, NULL),
    ('adam', 'mid', 2, 1),
    ('noah', 'bum', 3, NULL),
    ('sean', 'fire', 8, 7);
