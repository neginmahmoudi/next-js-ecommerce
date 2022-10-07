import { css } from '@emotion/react';
import Link from 'next/link';

const footerStyles = css`
  background-color: #323643;
  color: #dfd3c3;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  width: 100%;

  a {
    text-decoration: none;
    color: #dfd3c3;
  }
  a:hover {
    color: beige;
  }
  p {
    margin-left: 20px;
    margin-top: 20px;
    line-height: 25px;
  }
  ul {
    list-style: none;
  }
`;
const containerStyles = css`
  display: flex;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
`;
const marginStyles = css`
  margin-left: 150px;
  margin-right: 200px;
`;
export default function Footer() {
  return (
    <footer css={footerStyles}>
      <div css={containerStyles}>
        <div>
          <div>
            <p>
              We are an award-winning creative agency,
              <br /> dedicated to the best result in web design,
              <br /> promotion, business consulting, and marketing.
            </p>

            <p>
              <span>© </span>
              <span>2022</span>

              <span>Company</span>
              <span> - </span>
              <span>All Rights Reserved.</span>
            </p>
          </div>
        </div>
        <div css={marginStyles}>
          <h5>Contacts</h5>
          <dl>
            <dt>Address:</dt>
            <dd>798 Park Avenue, New York, USA</dd>
          </dl>
          <dl>
            <dt>email:</dt>
            <dd>
              <a href="mailto:#">compagny@email.com</a>
            </dd>
          </dl>
          <dl>
            <dt>phones:</dt>
            <dd>
              <a href="tel:#">1.555.652.111</a> <span>or</span>{' '}
              <a href="tel:#">1.55.652.111</a>
            </dd>
          </dl>
        </div>
        <div>
          <h5>Links</h5>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/">Products</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
