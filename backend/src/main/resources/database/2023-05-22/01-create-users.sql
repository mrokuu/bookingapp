--liquibase formatted sql
--changeset amroczkowski:13

create table users(
                      id bigint not null auto_increment PRIMARY KEY,
                      username varchar(50) not null unique,
                      password varchar(500) not null,
                      enabled boolean not null
);
--changeset amroczkowski:14
create table authorities (
                             username varchar(50) not null,
                             authority varchar(50) not null,
                             constraint fk_authorities_users foreign key(username) references users(username)
);
--changeset amroczkowski:15
create unique index ix_auth_username on authorities (username,authority);
--changeset amroczkowski:16
insert into users (id, username, password, enabled)
values (1, 'admin', '{bcrypt}$2a$10$upzXFsFUOClFRR69OMKF8eajGMRs0vhcSHqvNDKy9yfW45w7o9z6O', true);
insert into authorities (username, authority) values ('admin','ROLE_ADMIN');
--changeset amroczkowski:17
insert into users (id, username, password, enabled)
values (2, 'admin1', 'test', true);
insert into authorities (username, authority) values ('admin1','ROLE_ADMIN');
