import { css } from '@emotion/react';
import Head from 'next/head';
import { getItem } from '../database/items';

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  label {
    margin: 10px;
  }
  input {
    border-radius: 5px;
    width: 200px;
    padding: 5px;
    margin: 10px;
  }
`;
const conStyles = css`
  display: flex;
  flex-direction: column;
`;
const btnStyles = css`
  cursor: pointer;
  background-color: #323643;
  color: #fff;
  width: 200px;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 5px;
  :hover {
    background-color: goldenrod;
    color: black;
  }
`;

export default function CheckOut(props) {
  return (
    <>
      <Head>
        <title>checkout</title>
        <meta name="description" content="check out for customers " />
      </Head>
      <div css={containerStyles}>
        <h2>check out</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href = '/thankyou';
            props.setCart([]);
          }}
        >
          <div>
            <div css={conStyles}>
              <h3>Your Address</h3>
              <input
                data-test-id="checkout-first-name"
                id="fname"
                name="firstname"
                placeholder="John M."
                required
              />
              <input
                data-test-id="checkout-last-name"
                id="lname"
                name="lastname"
                placeholder="Doe"
                required
              />
              <label htmlFor="email">Email</label>
              <input
                data-test-id="checkout-email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
              />
              <label htmlFor="address">Address</label>
              <input
                data-test-id="checkout-address"
                id="adr"
                name="address"
                placeholder="542 W. 15th Street"
                required
              />
              <input
                data-test-id="checkout-city"
                id="city"
                name="city"
                placeholder="NY"
                required
              />

              <input
                data-test-id="checkout-postal-code"
                id="postal"
                name="postal"
                placeholder="1003"
                required
              />
              <input id="state" name="state" placeholder="NY" required />

              <input
                data-test-id="checkout-country"
                id="country"
                name="country"
                placeholder="Greece"
                required
              />

              <div>
                <h3>Payment</h3>

                <input
                  data-test-id="checkout-credit-card"
                  id="ccnum"
                  name="cardnumber"
                  placeholder=" credit-card number"
                  required
                />

                <div>
                  <div>
                    <input
                      data-test-id="checkout-expiration-date"
                      id="expyear"
                      name="expyear"
                      placeholder="2023"
                      required
                    />
                  </div>
                  <div>
                    <input
                      data-test-id="checkout-security-code"
                      id="securitycode"
                      name="securitycode"
                      placeholder="352"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                data-test-id="checkout-confirm-order"
                css={btnStyles}
                required
              >
                Confirm Order
              </button>
            </div>
          </div>
        </form>
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
