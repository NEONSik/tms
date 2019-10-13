DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS tasks CASCADE;

DROP SEQUENCE IF EXISTS users_id_seq CASCADE;
DROP SEQUENCE IF EXISTS tasks_id_seq CASCADE;
DROP SEQUENCE IF EXISTS projects_id_seq CASCADE;

CREATE SEQUENCE users_id_seq;

ALTER SEQUENCE users_id_seq
    OWNER TO springuser;

CREATE SEQUENCE tasks_id_seq;

ALTER SEQUENCE tasks_id_seq
    OWNER TO springuser;

CREATE SEQUENCE projects_id_seq;

ALTER SEQUENCE projects_id_seq
    OWNER TO springuser;

CREATE TABLE users
(
    id         bigint DEFAULT nextval('users_id_seq'::regclass),
    email      character varying(255),
    password   character varying(255),
    role       character varying(255),
    CONSTRAINT users_pkey PRIMARY KEY (id)
)
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;

CREATE TABLE projects
(
    id                 bigint DEFAULT nextval('projects_id_seq'::regclass),
    project_code       character varying(255),
    summary            character varying(255),
    project_manager_id bigint,
    CONSTRAINT projects_pkey PRIMARY KEY (id)
)
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;



CREATE TABLE tasks
(
    id          bigint DEFAULT nextval('tasks_id_seq'::regclass),
    create_date bigint,
    description character varying(255),
    due_date    bigint,
    estimation  bigint,
    priority    character varying(255),
    status      character varying(255),
    ticket_code character varying(255),
    update_date bigint,
    assignee_id bigint,
    project_id  bigint,
    reporter_id bigint,
    CONSTRAINT tasks_pkey PRIMARY KEY (id)
)
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;

ALTER TABLE projects
    ADD CONSTRAINT fk_project_manager_id FOREIGN KEY (project_manager_id)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE SET NULL;

ALTER TABLE tasks
    ADD CONSTRAINT fk_reporter_id FOREIGN KEY (reporter_id)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE SET NULL,
    ADD CONSTRAINT fk_assignee_id FOREIGN KEY (assignee_id)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE SET NULL,
    ADD CONSTRAINT fk_project_id FOREIGN KEY (project_id)
        REFERENCES projects (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE;