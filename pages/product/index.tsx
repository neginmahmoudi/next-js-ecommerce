import { css } from '@emotion/react';
import { GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getItem, Item } from '../../database/items';

const wrapstyles = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 20px;
`;
const containerStyles = css`
  border-radius: 15px;
  border: 1px solid black;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 300px;
  padding: 2rem;
  margin: 2rem;
  box-shadow: 10px 10px 20px -4px #506f86;
  a {
    text-decoration: none;
    color: #5e2c15;
    cursor: pointer;
  }
  img {
    cursor: pointer;
    border-radius: 5px;
  }
  & + & {
    margin-top: 25px;
  }
`;
const hStyles = css`
  margin-left: 20px;
`;
const wStyles = css`
  margin-left: 30px;
`;

type Props = {
  pageItems: Item[];
};
export default function Items(props: Props) {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="List of itesms in ecommerce store" />
      </Head>
      <h1 css={hStyles}>Electric guitars</h1>
      <div css={wrapstyles}>
        {props.pageItems.map((item) => {
          return (
            <div key={`pageItems-${item.id}`} css={containerStyles}>
              <a
                data-test-id={`product-${item.id}`}
                href={`/product/${item.id}`}
              >
                <Link href={`/product/${item.id}`}>
                  <Image
                    src={`/${item.id}-${item.firstName}.jpg`}
                    alt="available different kinds of electric guitars"
                    width="200px"
                    height="200px"
                  />
                </Link>
                <div css={wStyles}>
                  <h2>{item.firstName}</h2>

                  <div>Price: {item.price}</div>
                  <div>Available: {item.number}</div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<Props>
> {
  const pageItems = await getItem();
  return {
    props: {
      pageItems: pageItems,
    },
  };
}
