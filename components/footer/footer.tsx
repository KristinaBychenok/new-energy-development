import { Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import { Navigation } from '../nav/nav'
import { ContentWrapper } from '../layouts/contentWrapper'
// import InstagramIcon from '@mui/icons-material/Instagram'
// import FacebookIcon from '@mui/icons-material/Facebook'
// import WhatsAppIcon from '@mui/icons-material/WhatsApp'
// import TelegramIcon from '@mui/icons-material/Telegram'
import Link from 'next/link'
import { Logo } from '../header/logo'

export const Footer = () => {
  const t = useTranslations('PageLayout.footer')

  return (
    <div className="w-full mx-auto bg-blue-dark justify-between">
      <ContentWrapper>
        <div className="w-full grid grid-flow-row grid-cols-1 tablet:grid-cols-2 laptop:grid-flow-col laptop:grid-cols-3 gap-6 laptop:gap-16 pt-10 pb-20">
          <div className="w-full laptop:w-[320px] tablet:col-span-2 laptop:col-span-1 flex flex-col tablet:flex-row items-start justify-between laptop:flex-col">
            <Link href={`/`} className="flex flex-col grow font-bold">
              <Logo color="#FFFFFF" />
              <Typography className="w-[300px] font-mont text-white font-normal leading-6 text-16">
                {t('logo')}
              </Typography>
            </Link>
            {/* <div className="laptop:pt-4 flex">
              <IconButton aria-label="Instagram">
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton aria-label="Facebook">
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton aria-label="WhatsApp">
                <WhatsAppIcon fontSize="large" />
              </IconButton>
              <IconButton aria-label="Telegram">
                <TelegramIcon fontSize="large" />
              </IconButton>
            </div> */}
          </div>
          <div className="w-[320px]">
            <Typography className="w-[300px] font-roboto-condensed text-white font-bold leading-6 text-16 pb-2">
              {t('contacts.title')}
            </Typography>
            <Typography className="w-[300px] font-mont text-white leading-6 text-16 pb-2">
              <span className="font-normal">{t('contacts.email')}:</span>{' '}
              test@test.test
            </Typography>
            <div className="flex flex-col">
              <Typography className="w-[300px] font-mont text-white font-bold leading-6 text-16 pb-2">
                {`${t('contacts.phones')}:`}
              </Typography>
              <Typography className="w-[300px] font-mont text-white font-bold leading-6 text-16 pb-2">
                {'Fr: +33651981641, +33758069214'}
              </Typography>
              <Typography className="w-[300px] font-mont text-white font-bold leading-6 text-16 pb-2">
                {'En: +33758859618'}
              </Typography>
              <Typography className="w-[300px] font-mont text-white font-bold leading-6 text-16 pb-2">
                {'Рус: +33608046383'}
              </Typography>
              <Typography className="w-[300px] font-mont text-white font-bold leading-6 text-16">
                {'Укр: +33616814975'}
              </Typography>
            </div>
          </div>
          <div>
            <Typography className="w-[300px] font-roboto-condensed text-white font-bold leading-6 text-16 pb-2">
              {t('map')}
            </Typography>
            <Navigation isFooter={true} />
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}
