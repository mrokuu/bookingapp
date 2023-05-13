--liquibase formatted sql
--changeset amroczkowski:5
alter table doctor add specialization_id bigint after specialization;
alter table doctor drop column specialization;
alter table doctor add constraint fk_doctor_specialization_id foreign key (specialization_id) references specialization(id);