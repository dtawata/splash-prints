
drop database if exists ecom;
create database if not exists ecom;
use ecom

create table prints (
  id integer primary key not null auto_increment,
  src varchar(255),
  title varchar(255),
  artist varchar(255),
  alt varchar(255),
  description varchar(255),
  price_medium integer,
  price_large integer,
  sale_medium integer,
  sale_large integer,
  unsplash varchar(255),
  instagram varchar(255),
  path varchar(255),
  index (path)
);

create table cart (
  id integer primary key not null auto_increment,
  email varchar(255) not null,
  print_id integer not null,
  obj_key varchar(255),
  price integer,
  qty integer,
  size varchar(255)
);

create table favorites (
  id integer primary key not null auto_increment,
  email varchar(255) not null,
  print_id integer not null,
  price integer,
  size varchar(255)
);

insert into favorites (email, print_id, price, size)
values ('penguin@gmail.com', 1, 44, 'medium');

-- insert into cart(email, print_id) values('tawata.daniel@gmail.com', 1);
-- insert into cart(email, print_id, obj_key, price, qty, size) values('penguin@gmail.com', 1, '1_medium', 44, 1, 'medium');
-- insert into cart(email, print_id, obj_key, price, qty, size) values('penguin@gmail.com', 2, '2_medium', 67, 1, 'medium');


insert into prints(src, title, artist, alt, description, price_medium, price_large, sale_medium, sale_large, unsplash, instagram, path)
values('/img/anthony-delanoix-C16xHin1f7A-unsplash.jpg', 'AD01', 'Anthony Delanoix', 'Placeholder', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati pariatur aliquam quam ab vel ducimus id quia, facere corporis reiciendis consequatur. Atque!', 44, 67, null, null, 'https://unsplash.com/@anthonydelanoix', 'https://www.instagram.com/antho.dlx/', 'anthony-delanoix'),
('/img/anthony-delanoix-o0pifdpvJ_o-unsplash.jpg', 'AD02', 'Anthony Delanoix', 'Placeholder', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum iusto culpa voluptatem, sint vitae nam quasi pariatur? Qui ratione officia atque libero perspiciatis!', 44, 67, null, null, 'https://unsplash.com/@anthonydelanoix', 'https://www.instagram.com/antho.dlx/', 'anthony-delanoix'),
('/img/anthony-delanoix-opCJJa1YmJs-unsplash.jpg', 'AD03', 'Anthony Delanoix', 'Placeholder', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, doloribus accusantium iusto natus molestias cupiditate a hic aperiam similique dolorum, autem ad id.', 44, 67, null, null, 'https://unsplash.com/@anthonydelanoix', 'https://www.instagram.com/antho.dlx/', 'anthony-delanoix'),
('/img/anthony-delanoix-vjwkQsqatCM-unsplash.jpg', 'AD04', 'Anthony Delanoix', 'Placeholder', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aspernatur aliquam nesciunt cum rerum at nam expedita obcaecati! In recusandae fugiat quis illum sed.', 44, 67, null, null, 'https://unsplash.com/@anthonydelanoix', 'https://www.instagram.com/antho.dlx/', 'anthony-delanoix'),

('/img/jonny-gios-4Oa_aP_5pSs-unsplash.jpg', 'JG01', 'Jonny Gios', 'Placeholder', 'Placeholder', 44, 67, null, null, 'https://unsplash.com/@supergios', 'https://www.instagram.com/jonny.gios/', 'jonny-gios'),
('/img/jonny-gios-deBVd7paRKk-unsplash.jpg', 'JG02', 'Jonny Gios', 'Placeholder', 'Placeholder', 44, 67, null, null, 'https://unsplash.com/@supergios', 'https://www.instagram.com/jonny.gios/', 'jonny-gios'),
('/img/jonny-gios-hy8vZDVZRhc-unsplash.jpg', 'JG03', 'Jonny Gios', 'Placeholder', 'Placeholder', 44, 67, null, null, 'https://unsplash.com/@supergios', 'https://www.instagram.com/jonny.gios/', 'jonny-gios'),
('/img/jonny-gios-VLcpvtXNK-Y-unsplash.jpg', 'JG04', 'Jonny Gios', 'Placeholder', 'Placeholder', 44, 67, null, null, 'https://unsplash.com/@supergios', 'https://www.instagram.com/jonny.gios/', 'jonny-gios'),

('/img/adam-borkowski-6iXXec1UE2g-unsplash.jpg', 'AB01', 'Adam Borkowski', 'Placeholder', 'Placeholder', 44, 67, null, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/', 'adam-borkowski'),
('/img/adam-borkowski-C7ajRxH-VBk-unsplash.jpg', 'AB02', 'Adam Borkowski', 'Placeholder', 'Placeholder', 44, 67, null, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/', 'adam-borkowski'),
('/img/adam-borkowski-n1snUiTCew0-unsplash.jpg', 'AB03', 'Adam Borkowski', 'Placeholder', 'Placeholder', 44, 67, null, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/', 'adam-borkowski'),
('/img/adam-borkowski-SJeH7eDgfnU-unsplash.jpg', 'AB04', 'Adam Borkowski', 'Placeholder', 'Placeholder', 44, 67, null, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/', 'adam-borkowski'),

('/img/kentaro-toma-Ghrp5pCsRV4-unsplash.jpg', 'KT01', 'Kentaro Toma', 'Placeholder', 'Placeholder', 44, 67, null, null, 'https://unsplash.com/@thirdcultureken', 'https://www.instagram.com/thirdcultureken/', 'kentaro-toma'),
('/img/kentaro-toma-nQKiOOb8jPo-unsplash.jpg', 'KT02', 'Kentaro Toma', 'Placeholder', 'Placeholder', 44, 67, null, null, 'https://unsplash.com/@thirdcultureken', 'https://www.instagram.com/thirdcultureken/', 'kentaro-toma'),
('/img/kentaro-toma-qc9aXVIAwIw-unsplash.jpg', 'KT03', 'Kentaro Toma', 'Placeholder', 'Placeholder', 44, 67, null, null, 'https://unsplash.com/@thirdcultureken', 'https://www.instagram.com/thirdcultureken/', 'kentaro-toma'),
('/img/kentaro-toma-yuga6aF4TrE-unsplash.jpg', 'KT04', 'Kentaro Toma', 'Placeholder', 'Placeholder', 44, 67, null, null, 'https://unsplash.com/@thirdcultureken', 'https://www.instagram.com/thirdcultureken/', 'kentaro-toma');


create table users (
  id integer primary key not null auto_increment,
  email varchar(255) not null,
  password varchar(255) not null
);

insert into users (email, password)
values ('tawata.daniel@gmail.com', 'penguin');
