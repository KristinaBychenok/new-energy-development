import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Wrapper } from '../components/layouts/wrapper'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <Provider store={store}>
      <NextIntlClientProvider
        locale={router.locale}
        timeZone="Europe/Vienna"
        messages={pageProps.messages}
      >
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </NextIntlClientProvider>
    </Provider>
  )
}
