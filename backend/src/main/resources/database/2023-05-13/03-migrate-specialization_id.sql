--liquibase formatted sql
--changeset amroczkowski:6
insert into specialization (id, name, description, details) values(1, 'Inne', '', 'inne');
update doctor set specialization_id=1;
alter table doctor MODIFY specialization_id bigint not null;
