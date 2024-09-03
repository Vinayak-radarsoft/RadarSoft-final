import "@/styles/globals.css";
import "@/styles/Home.css";
import "@/styles/responsive.css";
import "@/styles/development.css";
import "@/styles/myResponsive.css";
import "@/styles/pStyle.css";
import "@/styles/pResponsive.css";
import Head from "next/head";
import Layout from "@/components/layout";
// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: "500",
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-roboto"
// })

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Head>
        <title>RadarSoft Technologies</title>
        <meta name="description" content="RadarSoft Technology" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
