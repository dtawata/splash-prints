
drop database if exists ecom;
create database if not exists ecom;
use ecom

create table prints (
  id integer primary key not null auto_increment,
  src varchar(255),
  author varchar(255),
  alt varchar(255),
  description varchar(255),
  price integer,
  sale integer,
  unsplash varchar(255),
  instagram varchar(255)
);

insert into prints(src, author, alt, description, price, sale, unsplash, instagram)
values('/img/adam-borkowski-SJeH7eDgfnU-unsplash.jpg', 'Adam Borkowski', 'alt placeholder', 'description placeholder', 44, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/');

