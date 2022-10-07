import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const containerStyle = css`
  width: 100%;
  min-height: 80px;
  background-color: #323643;
  color: #fffded;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;

  margin-bottom: auto;
  img {
    border-radius: 50%;
  }
`;
const partOneStyle = css`
  display: flex;
  flex-direction: row;
  padding: 5px;
  div {
    margin-top: 30px;
    margin-left: 20px;
    color: #dfd3c3;
  }
`;
const navStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  a {
    margin-left: 13px;
    text-decoration: none;
    color: #dfd3c3;
    text-align: center;
    padding: 12px 14px;
    text-decoration: none;
  }
  a:hover {
    background-color: #222831;
    border-radius: 3px;
  }
`;
export default function Header(props) {
  return (
    <header>
      <div css={containerStyle}>
        <div css={partOneStyle}>
          <Image
            src="/guitar-.jpg"
            alt="logo of the site"
            width="80px"
            height="80px"
          />
          <div>comfortably Numb</div>
        </div>
        <div>
          <nav css={navStyles}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/product">Products</Link>
            <Link href="/product/cart">
              <Image
                src="/trolly.jpg"
                alt="logo of the cart"
                width="30px"
                height="30px"
              />
            </Link>
            {props.inputVal}
          </nav>
        </div>
      </div>
    </header>
  );
}
