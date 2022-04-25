import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Loading } from 'components/Loading'
import Router from 'next/router'

function MyApp ({ Component, pageProps }: AppProps) {
  Router.events.on('routeChangeStart', () => setLoading(true))
  Router.events.on('routeChangeComplete', () => setLoading(false))
  const [loading, setLoading] = useState(false)
  if (!loading) return <Component {...pageProps} />
  return <Loading />
}

export default MyApp
