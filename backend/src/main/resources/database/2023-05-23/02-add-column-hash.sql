--liquibase formatted sql
--changeset amroczkowski:20
alter table users add hash varchar(120);
--changeset amroczkowski:21
alter table users add hash_date datetime;
