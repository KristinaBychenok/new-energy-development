import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { LangSwitcher } from '../lang-switcher/lang-switcher'
import { Navigation } from '../nav/nav'
import { ContentWrapper } from '../layouts/contentWrapper'
import Link from 'next/link'

export const Header = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      className="shadow-none border-none fixed bg-white z-50"
    >
      <ContentWrapper>
        <Toolbar
          disableGutters
          className="flex tablet:justify-between items-center"
        >
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Link href={`/`} className="flex grow font-bold decoration-0">
            <Typography
              variant="h6"
              noWrap
              className="flex font-bold decoration-0"
            >
              LOGO
            </Typography>
          </Link>
          <div className="flex flex-row-reverse tablet:flex-row items-center">
            <Navigation />
            <LangSwitcher />
          </div>
        </Toolbar>
      </ContentWrapper>
    </AppBar>
  )
}
