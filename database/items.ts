import { sql } from './connect';

export type Item = {
  id: number;
  firstName: string;
  price: string;
  number: number;
};

export async function getItem() {
  const pageItems = await sql<Item[]>`
SELECT * FROM pageItems;
`;
  return pageItems;
}
export async function getItemById(id: number) {
  const [item] = await sql<Item[]>`
  SELECT * FROM pageItems WHERE id=${id}`;

  return item;
}
