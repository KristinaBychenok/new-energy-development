import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { LangSwitcher } from '../lang-switcher/lang-switcher'
import { Navigation } from '../nav/nav'
import { ContentWrapper } from '../layouts/contentWrapper'
import Link from 'next/link'
import { PhonesButton } from './phones-button'
import { Logo } from './logo'

export const Header = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      className="shadow-none border-none bg-white z-50"
    >
      <ContentWrapper>
        <Toolbar disableGutters className="flex justify-between items-center">
          <Link
            href={`/`}
            className="flex flex-row font-bold decoration-0 h-16 w-fit items-center justify-center"
            aria-label="Logo"
          >
            <Logo color="#022E66" />
            <Typography
              variant="h4"
              noWrap
              className="hidden desktop:flex font-bold text-blue-default decoration-0 pl-2 text-18"
            >
              New Energy Development
            </Typography>
          </Link>
          <div className="flex flex-row-reverse tablet:flex-row items-center">
            <Navigation />
            <LangSwitcher />
            <div className="hidden tablet:flex">
              <PhonesButton />
            </div>
          </div>
        </Toolbar>
      </ContentWrapper>
    </AppBar>
  )
}
