--liquibase formatted sql
--changeset amroczkowski:12

alter table visit add payment_id bigint;

update visit set payment_id=1;
alter table visit MODIFY payment_id bigint not null;