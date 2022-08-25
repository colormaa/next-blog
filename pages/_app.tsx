import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/index'
import apolloClient from '../lib/apollo';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { SessionProvider } from "next-auth/react"
function MyApp({ Component, pageProps:{
  session, ...pageProps
} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider  client = {apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </SessionProvider>

  );
 
}

export default MyApp
