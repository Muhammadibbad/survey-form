import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ReduxProvider } from '@/redux/feature/provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
   <ReduxProvider >
        <Component  {...pageProps}   />
        </ReduxProvider>

  </>)

}
