import { css } from '@emotion/react';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import { getItemById, Item } from '../../database/items';
import { parseIntFromContextQuery } from '../../utils/contextQuery';
import {
  CartItem,
  getParsedCookie,
  setStringifiedCookie,
} from '../../utils/cookies';

const itemsStyles = css`
  margin: 0 auto;
  padding: 80px;
  display: flex;
  align-items: center;
  width: 100%;
  button {
    margin-top: 5px;
    width: 200px;
  }
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

type CartState = {
  cart: CartItem[] | (undefined & symbol);
  setCart: Dispatch<SetStateAction<CartItem[] | undefined>>;
};
type Props =
  | {
      item: Item;
    }
  | {
      error: string;
    };
export default function SingleItem(props: Props & CartState) {
  const [inputVal, setInputVal] = useState(1);
  if ('error' in props) {
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
        <h1>Name: {props.item.firstName}</h1>
        <Image
          src={`/images/${props.item.id}-${props.item.firstName}.jpg`}
          alt="available different kinds of electric guitars"
          width="500px"
          height="600px"
          data-test-id="product-image"
          css={imgStyles}
        />
      </div>

      <div css={formStyles}>
        <div data-test-id="product-price">price : {props.item.price}</div>
        <div>Available: {props.item.number}</div>

        <input
          type="number"
          min="1"
          max={props.item.number}
          value={inputVal}
          data-test-id="product-quantity"
          onChange={(event) => setInputVal(Number(event.currentTarget.value))}
        />

        <button
          data-test-id="product-add-to-cart"
          onClick={() => {
            //  the Original working one
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
                // foundCookie.num = foundCookie.num + inputVal;
                props.cart.forEach((el) => {
                  if (el.id === props.item.id) {
                    el.num = el.num + inputVal;
                  }
                });

                props.setCart([...props.cart]);
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
export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<Props>> {
  const itemId = parseIntFromContextQuery(context.query.itemId);
  if (typeof itemId === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Item not found',
      },
    };
  }
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
