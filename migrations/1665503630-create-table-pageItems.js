exports.up = async (sql) => {
  await sql`CREATE TABLE pageItems(
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name varchar(30) NOT NULL,
    price varchar(30) NOT NULL,
    number varchar(30)
  );`;
};

exports.down = async (sql) => {
  await sql`DROP TABLE pageItems`;
};
