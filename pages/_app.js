import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import CookieBanner from '../components/CookieBanner';
import Layout from '../components/Layout';
import { getParsedCookie, setStringifiedCookie } from '../utils/cookies';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState();
  // console.log(cart);

  useEffect(() => {
    const cookieValue = getParsedCookie('num');
    if (cookieValue) {
      setCart(cookieValue);
    }
  }, []);
  console.log('card', cart);
  useEffect(() => {
    if (typeof cart !== 'undefined') setStringifiedCookie('num', cart);
  }, [cart]);
  console.log('cardddd', cart);

  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
          }
        `}
      />

      <CookieBanner />
      <Layout cart={cart} setCart={setCart}>
        <Component {...pageProps} cart={cart} setCart={setCart} />
      </Layout>
    </>
  );
}

export default MyApp;
