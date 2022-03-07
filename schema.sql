
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

insert into prints(src, author, alt, description, price, sale, unsplash, instagram)
values('/img/artem-shuba-GYSiH1N6pxE-unsplash.jpg', 'Artem Shuba', 'alt placeholder', 'description placeholder', 44, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/');

insert into prints(src, author, alt, description, price, sale, unsplash, instagram)
values('/img/kevin-wong-D6Uj3I0zMaU-unsplash.jpg', 'Kevin Wong', 'alt placeholder', 'description placeholder', 44, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/');

insert into prints(src, author, alt, description, price, sale, unsplash, instagram)
values('/img/kentaro-toma-nQKiOOb8jPo-unsplash.jpg', 'Kentaro Toma', 'alt placeholder', 'description placeholder', 44, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/');
