import '../styles/globals.css'
import "@fontsource/dela-gothic-one"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
