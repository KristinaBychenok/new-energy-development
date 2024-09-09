import { MenuItem, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import LanguageIcon from '@mui/icons-material/Language'

const langs = [
  { id: 'en', name: 'EN' },
  { id: 'fr', name: 'FR' },
  { id: 'de', name: 'DE' },
  { id: 'ru', name: 'RU' },
  { id: 'uk', name: 'UA' },
  { id: 'it', name: 'IT' },
  { id: 'nl', name: 'NL' },
]

export const LangSwitcher = () => {
  const { route, locale } = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen)
  }

  const handleCloseLangMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <div
        className="relative flex flex-row items-center justify-center rounded-md mx-4 px-3 py-1 cursor-pointer hover:hover:bg-grey-light active:bg-grey-light"
        onClick={handleOpenLangMenu}
        ref={dropdownRef}
      >
        <LanguageIcon className="text-blue-default w-4 h-4" />
        <Typography className="font-roboto-condensed text-blue-default text-16 h-fit pl-2">
          {langs.find((lang) => lang.id === locale)?.name || ''}
        </Typography>
        <div
          className={`absolute top-[48px] desktop:top-[47px] bg-white ${
            isOpen ? 'flex flex-col' : 'hidden'
          }`}
        >
          {langs.map((lang) => (
            <MenuItem
              key={lang.id}
              onClick={handleCloseLangMenu}
              className={` ${locale === lang.id ? 'bg-grey-light' : ''}`}
            >
              <Link
                href={route}
                locale={lang.id}
                className="font-roboto-condensed text-blue-default px-6 py-1"
                aria-label={`lang-${lang.name}`}
              >
                {lang.name}
              </Link>
            </MenuItem>
          ))}
        </div>
      </div>
    </>
  )
}
