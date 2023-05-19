--liquibase formatted sql
--changeset amroczkowski:10
create table visit(
                        id bigint not null auto_increment PRIMARY KEY,
                        place_date datetime not null,
                        visit_status varchar(32) not null,
                        gross_value decimal(6,2) not null,
                        firstname varchar(64) not null,
                        lastname varchar(64) not null,
                        street varchar(80) not null,
                        zipcode varchar(6) not null,
                        city varchar(64) not null,
                        email varchar(64) not null,
                        phone varchar(16) not null
);

create table visit_row(
                          id bigint not null auto_increment PRIMARY KEY,
                          visit_id bigint not null,
                          doctor_id bigint not null,
                          price decimal(6,2) not null,
                          constraint fk_visit_row_visit_id foreign key (visit_id) references visit(id),
                          constraint fk_visit_row_doctor_id foreign key (doctor_id) references doctor(id)
);


