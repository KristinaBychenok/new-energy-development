import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'
import LanguageIcon from '@mui/icons-material/Language'

const langs = [
  { id: 'en', name: 'EN' },
  { id: 'fr', name: 'FR' },
  { id: 'de', name: 'DE' },
  { id: 'ru', name: 'RU' },
  { id: 'uk', name: 'UK' },
  { id: 'it', name: 'IT' },
  { id: 'nl', name: 'NL' },
]

export const LangSwitcher = () => {
  const { route, locale } = useRouter()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseLangMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Box>
      <div className="flex flex-row items-center justify-center pl-6 py-1">
        <IconButton
          size="small"
          aria-label="languege switcher"
          aria-controls="menu-appbar-lang-switcher"
          aria-haspopup="true"
          onClick={handleOpenLangMenu}
          color="inherit"
        >
          <LanguageIcon className="text-blue-default w-4 h-4" />
        </IconButton>
        <Typography className="font-roboto-condensed text-blue-default text-16 pl-2">
          {langs.find((lang) => lang.id === locale)?.name || ''}
        </Typography>
      </div>
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
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseLangMenu}
        sx={{
          display: 'block',
        }}
      >
        {langs.map((lang) => (
          <MenuItem key={lang.id} onClick={handleCloseLangMenu}>
            <Link
              href={route}
              locale={lang.id}
              className="font-roboto-condensed text-blue-default px-6 py-1"
            >
              {lang.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
