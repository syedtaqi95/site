import type { AppProps } from 'next/app'
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=dvice-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
