--liquibase formatted sql
--changeset mdabrowski:2
alter table doctor add image varchar(128) after price;