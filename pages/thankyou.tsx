import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

const conStyles = css`
  width: 800px;
  margin: 0 auto;
  margin-bottom: 300px;
`;
const buttonStyles = css`
  cursor: pointer;
  background-color: #323643;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
  font-size: larger;
  margin-left: 100px;
  :hover {
    background-color: goldenrod;
    color: black;
  }
`;

export default function Thankyou() {
  return (
    <div>
      <Head>
        <title>Thank you</title>
        <meta
          name="description"
          content="thanking the user for buying guitars"
        />
      </Head>
      <div css={conStyles}>
        <h1>Thank you for your order</h1>
        <Link href="/product">
          <button css={buttonStyles}> back to store</button>
        </Link>
      </div>
    </div>
  );
}
