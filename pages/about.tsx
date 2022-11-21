import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';

const container = css`
  display: flex;
  h2 {
    font-weight: bold;
  }
  p {
    margin: 50px 100px 120px;
    font-size: 16px;
    line-height: 30px;
  }
`;
const imgStyles = css`
  margin-right: 30px;
  margin-top: 20px;
  border-radius: 4px;
`;
export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About the ecommerce page" />
      </Head>
      <div css={container}>
        <p>
          <h2>
            Rock 'n' roll is an attitude, it's not a musical form of a strict
            sort
          </h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore
          <br /> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>

        <div css={imgStyles}>
          <Image
            src="/images/radiohead.jpg"
            alt="view of radiohead"
            width="600px"
            height="500px"
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
