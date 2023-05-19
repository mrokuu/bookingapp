--liquibase formatted sql
--changeset amroczkowski:2
alter table doctor add image varchar(128) after price;


