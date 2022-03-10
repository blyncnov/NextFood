import Head from "next/head";

// components
import Header from "../components/header";
import Featured from "../components/Featured";

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
    </>
  );
}
