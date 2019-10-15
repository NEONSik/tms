INSERT INTO users (email, password, role)
VALUES ('dmitry@mail.ru', '$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'ADMIN');
INSERT INTO users (email, password, role)
VALUES ('vasya@mail.ru', '$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'PROJECT_MANAGER');
INSERT INTO users (email, password, role)
VALUES ('kirill@mail.ru', '$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'DEVELOPER');
INSERT INTO users (email, password, role)
VALUES ('sasha@mail.ru', '$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'DEVELOPER');
INSERT INTO users (email, password, role)
VALUES ('masha@mail.ru', '$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'TESTER');
INSERT INTO users (email, password, role)
VALUES ('danila@mail.ru', '$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'TESTER');
INSERT INTO users (email, password, role)
VALUES ('oleg@mail.ru', '$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'DEVELOPER');
INSERT INTO users (email, password, role)
VALUES ('sasWDADFEFha@mail.ru', '$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'DEVELOPER');
INSERT INTO users (email, password, role)
VALUES ('sasgrefersfdfha@mail.ru', '$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'DEVELOPER');
INSERT INTO users (email, password, role)
VALUES ('danila1max@mail.ru', '$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'TESTER');
INSERT INTO users (email, password, role)
VALUES ('sasha1in@mail.ru', '$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'TESTER');
INSERT INTO users (email, password, role)
VALUES ('sashdfsga1in@mail.ru', '$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK', 'TESTER');

INSERT INTO projects (project_code, summary, project_manager_id)
VALUES ('CRM', 'CRM system for BigBang.corp', 2);
INSERT INTO projects (project_code, summary, project_manager_id)
VALUES ('SaaS', 'SaaS for NoNameCopmany', 2);

INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Fix styles on user page', 1570908890000, 172800000, 'BLOCKER', 'OPEN', 'CRM-1',
        1570908890000, 3, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Change mapping from JSON in Client class', 1570908890000, 162800000, 'BLOCKER', 'RESOLVED',
        'CRM-2', 1570908890000, 4, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Add search form', 1570908890000, 102800000, 'CRITICAL', 'IN_PROGRESS',
        'CRM-3', 1570908890000, 4, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Heuristic recommendation system', 1570908890000, 132800000, 'MAJOR', 'IN_PROGRESS',
        'CRM-4', 1570908890000, 3, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Data capture for analytics', 1570908890000, 92800000, 'MINOR', 'OPEN',
        'CRM-5', 1570908890000, 3, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Fix ad styles', 1570908890000, 172800000, 'MINOR', 'REOPEN',
        'CRM-6', 1570908890000, 5, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Reduce files I/O latency', 1570908890000, 112800000, 'MINOR', 'REOPEN',
        'CRM-7', 1570908890000, 6, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Refactor clients table', 1570908890000, 132800000, 'NORMAL', 'RESOLVED',
        'CRM-8', 1570908890000, 4, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Take away user service in distinct module', 1570908890000, 162800000, 'MAJOR', 'IN_PROGRESS',
        'CRM-9', 1570908890000, 3, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Start implement Akka', 1570908890000, 102800000, 'BLOCKER', 'READY_FOR_TEST',
        'CRM-10', 1570908890000, 5, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Add Memcached for cache bd requests', 1570908890000, 52800000, 'CRITICAL', 'CLOSED',
        'CRM-11', 1570908890000, 5, 1, 2);
INSERT INTO tasks (create_date, description, due_date, estimation, priority, status,
                   ticket_code, update_date, assignee_id, project_id, reporter_id)
VALUES (1570908890000, 'Rendering microservice', 1570908890000, 72800000, 'CRITICAL', 'REOPEN',
        'CRM-12', 1570908890000, 6, 1, 2);
