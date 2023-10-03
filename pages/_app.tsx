import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/src/Components/core/Layout'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  console.log(router.pathname)
  return <>
    {
      router.pathname !== '/auth' ? (<Layout>
        <Component {...pageProps} />
      </Layout>) : (<Component {...pageProps} />)
    }
  </>
}
