import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header inputVal={props.inputVal} setInputVal={props.setInputVal} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
