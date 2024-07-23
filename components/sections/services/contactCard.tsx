import { Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

export const ContactCardContent: FC = () => {
  const t = useTranslations('PageLayout.body.servicesSection')

  return (
    <>
      <h3 className="font-roboto-condensed font-bold text-20 pb-2">
        {t('contact.title')}
      </h3>
      <p className="content-text pb-3">{t('contact.content')}</p>
      <div className="flex flex-col">
        <Typography className="content-text pb-2">
          <span className="font-bold">{'FR: '}</span>
          {'+33651981641, +33758069214'}
        </Typography>
        <Typography className="content-text pb-2">
          <span className="font-bold">{'EN: '}</span>
          {'+33758859618'}
        </Typography>
        <Typography className="content-text pb-2">
          <span className="font-bold">{'RU: '}</span>
          {'+33608046383'}
        </Typography>
        <Typography className="content-text">
          <span className="font-bold">{'UA: '}</span>
          {'+33616814975'}
        </Typography>
      </div>
    </>
  )
}
