import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/src/Components/core/Layout";
import { useRouter } from "next/router";
import ContextApi from "../src/Components/Storage/ContextApi";
import  { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <>
      <ContextApi>
        {router.pathname !== "/auth" ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
        <Toaster />
      </ContextApi>
    </>
  );
}
