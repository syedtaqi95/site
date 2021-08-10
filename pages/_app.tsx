import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { contactLinks, navLinks } from "../content/navbarData";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Syed Taqi Haider - Portfolio Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar contactLinks={contactLinks} navLinks={navLinks} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
