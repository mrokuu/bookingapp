--liquibase formatted sql
--changeset amroczkowski:3
alter table doctor add details varchar(255) after image;
alter table doctor add constraint ui_doctor_detail unique key(details);