--liquibase formatted sql
--changeset amroczkowski:18
alter table `doctor` add user_id bigint;
--changeset amroczkowski:19
alter table `doctor` add constraint fk_doctor_user_id foreign key (user_id) references users(id);
