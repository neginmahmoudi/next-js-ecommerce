CREATE TABLE pageItems(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  first_name varchar(30) NOT NULL,
  price varchar(30) NOT NULL,
  number varchar(30)
);

INSERT INTO pageItems(first_name,price,number)
VALUES
  ('Sg', 769,8 ),
  ('Flying-v', 1890,12 ),
  ('Superstrat', 899,3 ),
  ('Strat', 1190,9 ),
  ('Jazz-master', 1200,11 );

  SELECT * FROM pageItems;
