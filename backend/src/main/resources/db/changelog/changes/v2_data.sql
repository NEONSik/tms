INSERT INTO users (email,name ,password, role)
VALUES ('Ilya@mail.ru','Ilya','$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'Admin');
INSERT INTO users (email,name, password, role)
VALUES ('vasya@mail.ru','Vasilii','$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'Project Manager');
INSERT INTO users (email,name , password, role)
VALUES ('kirisha@mail.ru','Kirill','$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'Developer');
INSERT INTO users (email, name ,password, role)
VALUES ('katya@mail.ru','Katya','$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'Developer');
INSERT INTO users (email,name , password, role)
VALUES ('masha@mail.ru','Masha','$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'Tester');
INSERT INTO users (email, name ,password, role)
VALUES ('danila@mail.ru','Danila','$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'Tester');
INSERT INTO users (email,name , password, role)
VALUES ('kshuha@mail.ru', 'Ksenya','$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'Developer');
INSERT INTO users (email,name , password, role)
VALUES ('sasha@mail.ru','Sasha','$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'Developer');
INSERT INTO users (email, name ,password, role)
VALUES ('dendi@mail.ru','Denis','$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'Developer');
INSERT INTO users (email,name , password, role)
VALUES ('imax@mail.ru', 'Maksim','$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'Tester');
INSERT INTO users (email,name , password, role)
VALUES ('sashakain@mail.ru', 'Sasha','$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'Tester');
INSERT INTO users (email,name , password, role)
VALUES ('ga1in@mail.ru', 'Galina','$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'Tester');

INSERT INTO projects (project_code, summary, project_manager_id)
VALUES ('OZ.by', 'Check system for OzPAy', 2);
INSERT INTO projects (project_code, summary, project_manager_id)
VALUES ('TMS', 'TMS for MAC', 2);

INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Fix styles on user page', 1570908890000, 172800000, 'Blocker', 'Open', 'MAC',
        1570908890000, 3, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Change mapping from JSON in Client class', 1570908890000, 162800000, 'Blocker', 'Resolved',
        'MAC-2', 1570908890000, 4, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Add search form', 1570908890000, 102800000, 'Critical', 'In progress',
        'MAC-3', 1570908890000, 4, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Heuristic recommendation system', 1570908890000, 132800000, 'Major', 'In progress',
        'MAC-4', 1570908890000, 3, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Data capture for analytics', 1570908890000, 92800000, 'Minor', 'Open',
        'MAC-5', 1570908890000, 3, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Fix ad styles', 1570908890000, 172800000, 'Minor', 'Reopen',
        'MAC-6', 1570908890000, 5, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Reduce files I/O latency', 1570908890000, 112800000, 'Minor', 'Reopen',
        'MAC-7', 1570908890000, 6, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Refactor clients table', 1570908890000, 132800000, 'Normal', 'Resolved',
        'MAC-8', 1570908890000, 4, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Take away user service in distinct module', 1570908890000, 162800000, 'Major', 'In progress',
        'MAC-9', 1570908890000, 3, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Start implement Akka', 1570908890000, 102800000, 'Blocker', 'Ready for test',
        'MAC-10', 1570908890000, 5, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Add Memcached for cache bd requests', 1570908890000, 52800000, 'Critical', 'Closed',
        'MAC-11', 1570908890000, 5, 1, 2);


INSERT INTO comments (content, user_id, task_id)
VALUES ('same problem', 3, 1);
INSERT INTO comments (content, user_id, task_id)
VALUES ('created', 3, 2);
