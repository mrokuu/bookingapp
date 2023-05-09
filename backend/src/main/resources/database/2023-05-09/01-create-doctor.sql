--liquibase formatted sql
--changeset amroczkowski:1
CREATE TABLE doctor (
                        id bigint not null auto_increment PRIMARY KEY,
                        name varchar(255) not null,
                        specialization varchar(255) not null,
                        description text not null,
                        price decimal(9, 2) not null
);
