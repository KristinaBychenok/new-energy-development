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
      <p className="font-mont pb-3">{t('contact.content')}</p>
      <div className="flex flex-col">
        <Typography className="font-mont leading-6 text-16 pb-2">
          {'FR: '}
          {
            <span className="font-mont font-bold text-16">
              {'+33651981641, +33758069214'}
            </span>
          }
        </Typography>
        <Typography className="font-mont font-bold leading-6 text-16 pb-2">
          {'EN: +33758859618'}
        </Typography>
        <Typography className="font-mont font-bold leading-6 text-16 pb-2">
          {'RU: +33608046383'}
        </Typography>
        <Typography className="font-mont font-bold leading-6 text-16">
          {'UA: +33616814975'}
        </Typography>
      </div>
    </>
  )
}
