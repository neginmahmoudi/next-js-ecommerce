import { css } from '@emotion/react';
import Head from 'next/head';

const container = css`
  h2 {
    margin-top: 30px;
    margin-left: 100px;
    font-weight: bold;
  }
  p {
    margin: 50px 100px 120px;
    font-size: 16px;
    line-height: 30px;
  }
`;
export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About the ecommerce page" />
      </Head>
      <div css={container}>
        <h2>
          Rock 'n' roll is an attitude, it's not a musical form of a strict sort
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit
          <br /> in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
}
