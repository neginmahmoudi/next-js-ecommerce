const pageItems = [
  { first_name: 'Sg', price: 769, number: 8 },
  { first_name: 'Flying-v', price: 1890, number: 12 },
  { first_name: 'Superstrat', price: 899, number: 3 },
  { first_name: 'Strat', price: 1190, number: 9 },
  { first_name: 'Jazz-master', price: 1200, number: 11 },
];

/// lets just cherck the error
exports.up = async (sql) => {
  await sql`
  INSERT INTO pageItems ${sql(pageItems, 'first_name', 'price', 'number')}`;
};
exports.down = async (sql) => {
  for (const item of pageItems) {
    await sql`
DELETE FROM
pageItems
WHERE
first_name=${item.first_name} AND
price=${item.price} AND
number=${item.number}`;
  }
};
