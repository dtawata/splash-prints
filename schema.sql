
drop database if exists ecom;
create database if not exists ecom;
use ecom

create table prints (
  id integer primary key not null auto_increment,
  src varchar(255),
  artist varchar(255),
  alt varchar(255),
  description varchar(255),
  price_medium integer,
  price_large integer,
  sale_medium integer,
  sale_large integer,
  unsplash varchar(255),
  instagram varchar(255),
  path varchar(255)
);

insert into prints(src, artist, alt, description, price, sale, unsplash, instagram)
values('/img/adam-borkowski-SJeH7eDgfnU-unsplash.jpg', 'Adam Borkowski', 'alt placeholder', 'description placeholder', 44, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/');

insert into prints(src, artist, alt, description, price, sale, unsplash, instagram)
values('/img/artem-shuba-GYSiH1N6pxE-unsplash.jpg', 'Artem Shuba', 'alt placeholder', 'description placeholder', 44, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/');

insert into prints(src, artist, alt, description, price, sale, unsplash, instagram)
values('/img/kevin-wong-D6Uj3I0zMaU-unsplash.jpg', 'Kevin Wong', 'alt placeholder', 'description placeholder', 44, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/');

insert into prints(src, artist, alt, description, price, sale, unsplash, instagram)
values('/img/kentaro-toma-nQKiOOb8jPo-unsplash.jpg', 'Kentaro Toma', 'alt placeholder', 'description placeholder', 44, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/');

insert into prints(src, artist, alt, description, price, sale, unsplash, instagram)
values('/img/silas-baisch-K785Da4A_JA-unsplash.jpg', 'Silas Baisch', 'alt placeholder', 'description placeholder', 44, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/');


insert into prints(src, artist, alt, description, price, sale, unsplash, instagram, path)
values('/img/anthony-delanoix-C16xHin1f7A-unsplash.jpg', 'Anthony Delanoix', 'alt placeholder', 'description placeholder', 44, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/', 'anthony-delanoix');

insert into prints(src, artist, alt, description, price, sale, unsplash, instagram, path)
values('/img/anthony-delanoix-o0pifdpvJ_o-unsplash.jpg', 'Anthony Delanoix', 'alt placeholder', 'description placeholder', 44, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/', 'anthony-delanoix');

insert into prints(src, artist, alt, description, price, sale, unsplash, instagram, path)
values('/img/anthony-delanoix-opCJJa1YmJs-unsplash.jpg', 'Anthony Delanoix', 'alt placeholder', 'description placeholder', 44, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/', 'anthony-delanoix');

insert into prints(src, artist, alt, description, price, sale, unsplash, instagram, path)
values('/img/anthony-delanoix-vjwkQsqatCM-unsplash.jpg', 'Anthony Delanoix', 'alt placeholder', 'description placeholder', 44, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/', 'anthony-delanoix');






-- values('/img/pawel-czerwinski-NFmB9IWwUVQ-unsplash.jpg', 'Pawel Czerwinski', 'alt placeholder', 'description placeholder', 44, null, 'https://unsplash.com/@borkography', 'https://www.instagram.com/borkography/');
