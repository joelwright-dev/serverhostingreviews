import Layout from '../components/Layout'
import Meta from '../components/Meta'
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks'
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Meta/>
      <ColorSchemeProvider>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            primaryColor: 'blue'
          }}
        >
          <Layout currentPage={router.pathname}>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}