import Layout from '../components/Layout'
import Meta from '../components/Meta'
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks'
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import Script from 'next/script';

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

    const handleRouteChange = (url) => {
      console.log("page changed")
      window.gtag('config', 'G-XZGLFXGDDW', {
        page_path: url
      })
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [user, router.events])

  return (
    <>
      <Meta/>
      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-XZGLFXGDDW"/>
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XZGLFXGDDW');
        `}
      </Script>
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