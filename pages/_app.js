import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import CookieBanner from '../components/CookieBanner';
import Layout from '../components/Layout';
import { getParsedCookie, setStringifiedCookie } from '../utils/cookies';

function MyApp({ Component, pageProps }) {
  const [inputVal, setInputVal] = useState();

  useEffect(() => {
    const getCookie = getParsedCookie('num');
    setInputVal(getCookie);
  }, []);
  useEffect(() => {
    setStringifiedCookie('num', inputVal);
  }, []);
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
      <Layout inputVal={inputVal} setInputVal={setInputVal}>
        <Component
          {...pageProps}
          inputVal={inputVal}
          setInputVal={setInputVal}
        ></Component>
      </Layout>
    </>
  );
}

export default MyApp;
