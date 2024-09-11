import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from 'next/app'
import { Toaster } from "sonner";



function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode='wait'>
        <Layout>
          <Component {...pageProps} />
          <Toaster />
        </Layout>
    </AnimatePresence>
  );
};

export default App
