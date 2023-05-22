--liquibase formatted sql
--changeset amroczkowski:22
alter table visit add user_id bigint;
--changeset amroczkowski:23
alter table visit add constraint fk_visit_user_id foreign key (user_id) references users(id);