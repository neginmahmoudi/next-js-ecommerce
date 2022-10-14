import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getItemById } from '../../database/items';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

const itemsStyles = css`
  margin: 0 auto;
  padding: 60px;
  display: flex;
  align-items: flex-end;
  width: 800px;
`;
const formStyles = css`
  margin-left: 20px;
  button {
    margin-left: 3px;
    padding: 3px;
    background-color: #323643;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
  }
  input {
    border-radius: 5px;
    padding: 5px;
  }
`;
const imgStyles = css`
  border-radius: 10px;
`;

export default function Item(props) {
  const [inputVal, setInputVal] = useState(1);
  if (props.error) {
    context.res.statusCode = 404;
    return (
      <div>
        <Head>
          <title>Item not found</title>
          <meta name="description" content="item not found" />
        </Head>
        <h1>{props.error}</h1>
        sorry , try <Link href="/index.js">this</Link>
      </div>
    );
  }
  return (
    <div css={itemsStyles}>
      <div>
        <h2>Name: {props.item.firstName}</h2>
        <Image
          src={`/${props.item.id}-${props.item.firstName}.jpg`}
          alt="available different kinds of electric guitars"
          width="500px"
          height="600px"
          css={imgStyles}
        />
      </div>

      <div css={formStyles}>
        <div>EUR: {props.item.price}</div>
        <div>Available: {props.item.number}</div>
        {/* change  */}
        <input
          type="number"
          min="1"
          max={props.item.number}
          value={inputVal}
          onChange={(event) => setInputVal(Number(event.currentTarget.value))}
        />
        <button
          onClick={() => {
            const currentCookieValue = getParsedCookie('num');
            if (!currentCookieValue) {
              props.setCart([{ id: props.item.id, num: inputVal }]);
            } else {
              const foundCookie = currentCookieValue.find(
                (cookieItemObj) => cookieItemObj.id === props.item.id,
              );
              if (!foundCookie) {
                currentCookieValue.push({
                  id: props.item.id,
                  num: inputVal,
                });
                props.setCart([
                  ...props.cart,
                  { id: props.item.id, num: inputVal },
                ]);
              } else {
                foundCookie.num = foundCookie.num + inputVal;
              }
              setStringifiedCookie('num', currentCookieValue);
            }
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const itemId = parseInt(context.query.itemId);

  const foundItem = await getItemById(itemId);
  if (typeof foundItem === 'undefined') {
    return {
      props: {
        error: 'no Items found',
      },
    };
  }
  return {
    props: { item: foundItem },
  };
}
