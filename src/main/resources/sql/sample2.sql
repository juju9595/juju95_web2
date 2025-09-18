drop database if exists springweb3;
create database springweb3;
use springweb3;

create table member(
	mno int auto_increment, 
	mname varchar(10) not null,
    mage varchar(5) not null,
    mphone varchar(20) not null,
    constraint primary key(mno)
);