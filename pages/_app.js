import Layout from '../components/Layout'
import Meta from '../components/Meta'
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks'
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [user, setUser] = useState(0)

  useEffect(() => {
      try {
          fetch('/api/auth/verify')
          .then((res) => res.json())
          .then((newUser) => {
              setUser(newUser)
          }).catch((err) => {
              setUser(0)
          })
      } catch {
          setUser(0)
      }
  }, [user])

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
          <Layout currentPage={router.pathname} user={user}>
            <Component {...pageProps}/>
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}