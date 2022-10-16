import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import CookieBanner from '../components/CookieBanner';
import Layout from '../components/Layout';
import { getParsedCookie, setStringifiedCookie } from '../utils/cookies';

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   const cookieValue = getParsedCookie('num');
  //   setCart(cookieValue ? cookieValue : []);
  // }, []);
  // useEffect(() => {
  //   const parsedCookies = Cookies.get('num')
  //     ? JSON.parse(Cookies.get('num'))
  //     : [];
  //   setCart(parsedCookies);
  // }, []);
  // useEffect(() => {
  //   setStringifiedCookie('num', cart);
  // }, [cart]);
  const [cart, setCart] = useState();
  useEffect(() => {
    const cookieValue = getParsedCookie('num');
    if (cookieValue) {
      setCart(cookieValue);
    }
  }, []);

  useEffect(() => {
    if (typeof cart !== 'undefined') setStringifiedCookie('num', cart);
  }, [cart]);

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
