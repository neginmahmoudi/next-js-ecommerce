import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header cart={props.cart} setCart={props.setCart} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
