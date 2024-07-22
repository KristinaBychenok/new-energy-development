import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { useCallback } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { PhonesButton } from '../header/phones-button'

export const Navigation = ({ isFooter }: { isFooter?: boolean }) => {
  const t = useTranslations('PageLayout.header.pageNav')
  const keys = ['services', 'about', 'contact'] as const

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget)
    },
    []
  )

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null)
  }, [])

  return (
    <nav>
      <Box className={`${isFooter ? 'hidden' : 'flex tablet:hidden'} grow`}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {keys.map((key) => {
            const title = t(`${key}.title`)
            return (
              <MenuItem key={title} onClick={handleCloseNavMenu}>
                <Link
                  href={`/#${key}`}
                  className="font-roboto-condensed text-blue-default px-6 py-1"
                  aria-label={`nav-item-${title}`}
                >
                  {title}
                </Link>
              </MenuItem>
            )
          })}
          <MenuItem>
            <div className="px-4 py-[6px] h-fit">
              <PhonesButton />
            </div>
          </MenuItem>
        </Menu>
      </Box>
      <Box
        className={`${
          isFooter ? 'flex flex-col' : 'hidden tablet:flex tablet:flex-row'
        } grow`}
      >
        {keys.map((key) => {
          const title = t(`${key}.title`)
          return (
            <Link
              key={title}
              href={`/#${key}`}
              className={`${
                isFooter
                  ? 'font-mont text-white pb-2'
                  : 'font-roboto-condensed text-blue-default px-3 laptop:px-6 py-1'
              }`}
              aria-label={`nav-item-${title}`}
            >
              {title}
            </Link>
          )
        })}
      </Box>
    </nav>
  )
}
