import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getItem } from '../../database/items';

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
  flex-direction: column;
  width: 300px;
  padding: 2rem;
  margin: 2rem;
  box-shadow: 10px 10px 20px -4px #506f86;
  a {
    text-decoration: none;
    color: #de703c;
  }
  img {
    cursor: pointer;
  }
  & + & {
    margin-top: 25px;
  }
`;

export default function Items(props) {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="List of itesms in ecommerce store" />
      </Head>

      <div css={wrapstyles}>
        {props.pageItems.map((item) => {
          return (
            <div key={`pageItems-${item.id}`} css={containerStyles}>
              <div>
                <Link href={`/product/${item.id}`}>
                  <div>
                    <Image
                      src={`/${item.id}-${item.firstName}.jpg`}
                      alt="available different kinds of electric guitars"
                      width="200px"
                      height="200px"
                    />
                  </div>
                </Link>
                <h2>
                  <Link href={`/product/${item.id}`}>{item.firstName}</Link>
                </h2>
              </div>
              <div>Price: {item.price}</div>
              <div>Available: {item.number}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const pageItems = await getItem();
  return {
    props: {
      pageItems: pageItems,
    },
  };
}
