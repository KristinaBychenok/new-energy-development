import { PropsWithChildren, memo } from 'react'
import Head from 'next/head'
import React from 'react'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { Roboto_Condensed, Montserrat } from 'next/font/google'
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'

const robotoCondensed: NextFontWithVariable = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['700', '500'],
  variable: '--font-roboto-condensed',
})
const montserrat: NextFontWithVariable = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-montserrat',
})

export const Wrapper = memo(function WrapperComponent(
  props: PropsWithChildren
) {
  return (
    <>
      <Head>
        <title>New Energy Development</title>
        <meta name="description" content="New Energy Development app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div
        className={`mx-auto flex flex-col min-h-screen w-screen ${robotoCondensed.variable} ${montserrat.variable}`}
      >
        <Header />
        {props.children}
        <Footer />
      </div>
    </>
  )
})
