--liquibase formatted sql
--changeset amroczkowski:7
create table review(
                       id bigint not null auto_increment PRIMARY KEY,
                       doctor_id bigint not null,
                       author_name varchar(60) not null,
                       content text
);
