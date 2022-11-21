import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const containerStyle = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  h1 {
    text-align: left;
    font-size: 50px;
    margin: 20px 0 15px;
    padding-left: 10px;
  }
  div {
    margin-left: 20px;
    padding-left: 10px;
    font-size: 20px;
  }
  button {
    font-size: 18px;
    min-width: 100px;
    background: #323643;
    padding: 20px;
    border-radius: 5px;
    display: block;
    border: none;
    align-self: center;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #dfd3c3;
  }
  button:hover {
    background-color: #222831;
  }
`;
const imgContainerStyles = css`
  margin: 10px 35px 10px;
  padding: 10px;

  img {
    border-radius: 6px;
  }
`;
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Overview of ecommerce store" />
      </Head>
      <div css={containerStyle}>
        <div>
          <h1>Electric Guitars is what you are looking for</h1>
          An electric guitar is a guitar that requires external amplification
          <br /> in order to be heard at typical performance volumes,
          <br /> unlike a standard acoustic guitar It uses one or more pickups
          to convert
          <br /> the vibration of its strings into electrical signals, which
          <br /> ultimately are reproduced as sound by loudspeakers.
          <br />
          <br />
          <button>
            <Link href="/product">All Products</Link>
          </button>
        </div>
        <div css={imgContainerStyles}>
          <Image
            src="/images/homepage.jpg"
            alt="view of guitars in a store"
            width="800px"
            height="600px"
          />
        </div>
      </div>
    </div>
  );
}
