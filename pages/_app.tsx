import 'normalize.css'
import { Inter } from 'next/font/google'
import store from '@store/index'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import GlobalStyle from '@styles/globals'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
export default function App({ Component, ...rest }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...rest.pageProps} />
      </Provider>
    </>
  )
}
