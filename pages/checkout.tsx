import { css } from '@emotion/react';
import Head from 'next/head';
import { getItem, Item } from '../database/items';

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

  border-radius: 5px;
  :hover {
    background-color: goldenrod;
    color: black;
  }
`;
// type Props = {
//   setCart: ;
// };
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
              <label htmlFor="fullname">Full Name</label>
              <input
                id="fname"
                name="firstname"
                placeholder="John M. Doe"
                required
              />
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="john@example.com"
                required
              />
              <label htmlFor="address">Address</label>
              <input
                id="adr"
                name="address"
                placeholder="542 W. 15th Street"
                required
              />
              <label htmlFor="city">City</label>
              <input id="city" name="city" placeholder="New York" required />
              <label htmlFor="state">State</label>
              <input id="state" name="state" placeholder="NY" required />
              <label htmlFor="fullname">Zip</label>
              <input id="zip" name="zip" placeholder="10001" required />

              <div>
                <h3>Payment</h3>
                <label htmlFor="bank">Name on Card</label>
                <input
                  id="cname"
                  name="cardname"
                  placeholder="John More Doe"
                  required
                />
                <label htmlFor="ccard">Credit card number</label>
                <input
                  id="ccnum"
                  name="cardnumber"
                  placeholder="1111-2222-3333-4444"
                  required
                />
                <label htmlFor="exp">Exp Month</label>
                <input
                  id="expmonth"
                  name="expmonth"
                  placeholder="September"
                  required
                />
                /
                <div>
                  <div>
                    <input
                      id="expyear"
                      name="expyear"
                      placeholder="2023"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv">CVV</label>
                    <input id="cvv" name="cvv" placeholder="352" required />
                  </div>
                </div>
              </div>

              <input css={btnStyles} type="submit" value="Continue" required />
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
