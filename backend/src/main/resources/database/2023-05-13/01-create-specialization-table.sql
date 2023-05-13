--liquibase formatted sql
--changeset amroczkowski:4
create table specialization(
                         id bigint not null auto_increment PRIMARY KEY,
                         name varchar(255) not null,
                         description text,
                         details varchar(255) not null
);
