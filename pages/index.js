import Head from "next/head";

// components
import Header from "../components/header";
import Featured from "../components/Featured";
import Services from "../components/Services";
import Values from "../components/Values";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>NextFood food Ordering Webapp</title>
        <meta
          name="Food Delivery Blyncnov App"
          content="food delivery template by blyncnov using next.js app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Featured />
       <Values />
      <Services />
      <Footer/>
    </>
  );
}
