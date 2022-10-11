import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getItem } from '../database/items';

const containerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  width: 600px;
  min-width: 400px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;

  button {
    margin-left: 3px;
    margin-top: 10px;
    background-color: #323643;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
  }
`;
const productStyles = css`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 10px 0 20px;
  padding: 10px 0;
  border-bottom: 1px solid black;
`;
const fConStyles = css`
  img {
    border-radius: 5px;
  }
`;
const secContainerStyles = css`
  width: 600px;

  border-radius: 3px;
  margin: 0 auto;
  padding: 30px;
  font-size: 20px;

  color: black;
  button {
    width: 200px;

    margin-left: 130px;
    cursor: pointer;
    background-color: #323643;
    color: #fff;
    padding: 20px;
    border-radius: 5px;
  }
  button:hover {
    background-color: black;
    color: goldenrod;
  }
`;
export default function Cart(props) {
  const cartTotal = props.cart?.map((cart) => {
    return {
      ...cart,
      firstName: props.item.find(
        (productObject) => cart.id === productObject.id,
      )?.firstName,
      price: props.item.find((productObject) => cart.id === productObject.id)
        ?.price,
    };
  });
  console.log('cartpage', props.cart);

  const totalPrice = cartTotal?.reduce(
    (accumulator, item) => accumulator + Number(item.price) * item.num,
    0,
  );
  console.log('total', totalPrice);

  function removeProduct(id) {
    const newCart = props.cart?.filter((item) => item.id !== id);
    props.setCart(newCart);
  }

  return (
    <>
      <Head>
        <title>Payment</title>
        <meta
          name="description"
          content="where you can buy electric guitars online"
        />
      </Head>
      <div css={containerStyles}>
        <h1>Your Cart</h1>

        {!props.cart?.length ? (
          <div>Your cart is empty</div>
        ) : (
          cartTotal.map((item) => {
            return (
              <div key={`Items-${item.id}`}>
                <div css={fConStyles}>
                  <Link href={`/products/${item.id}`}>
                    <a data-test-id={`product-${item.id}`}>
                      <Image
                        src={`/${item.id}-${item.firstName}.jpg`}
                        alt="cart items"
                        width="150"
                        height="150"
                      />
                    </a>
                  </Link>

                  <div css={productStyles}>
                    <div>
                      <div>{item.firstName}</div>
                      <div> Number :{item.num}</div>
                      <div>EUR : {item.price}</div>

                      <button onClick={() => removeProduct(item.id)}>
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div css={secContainerStyles}>
        <div>
          <div>
            <h2>Summary</h2>
          </div>
          <div> Subtotal : {totalPrice}</div>
          <div>Shipping price : {!props.cart?.length ? 0 : 49}</div>
          <div>
            <div>Total : {!props.cart?.length ? 0 : totalPrice + 49}</div>
          </div>
        </div>

        <Link href="/checkout">
          <button>CHECKOUT</button>
        </Link>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  const item = await getItem();
  return {
    props: { item: item },
  };
}
