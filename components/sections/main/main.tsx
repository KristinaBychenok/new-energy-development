import { CustomButton } from '@/components/Button/button'
import { ContentWrapper } from '@/components/layouts/contentWrapper'
import { Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import mainImage from '../../../public/main-info-photo.webp'

export const MainInformation = () => {
  const t = useTranslations('PageLayout.body.mainSection')

  return (
    <div className="relative flex flex-col w-full bg-beige pt-10 tablet:py-10 desktop:py-20">
      <ContentWrapper>
        <div className="w-full tablet:w-[324px] laptop:w-[424px] desktop:w-[536px]">
          <Typography className="title-text mb-1">{t('title')}</Typography>
          <Typography className="subtitle-text pb-4">
            {t('subTitle')}
          </Typography>
          <Typography className="content-text">{t('content')}</Typography>
        </div>
        <Link
          href="/#contact"
          className="flex w-fit h-fit"
          aria-label="contact-us-button"
        >
          <CustomButton>{t('button')}</CustomButton>
        </Link>
      </ContentWrapper>
      <div className="self-center tablet:absolute tablet:top-0 tablet:right-0 pt-6 tablet:pt-0 h-[340px] tablet:h-full overflow-auto w-full tablet:w-[372px] laptop:w-[524px] desktop:w-[695px]">
        <div className="flex h-full overflow-auto w-full">
          <Image
            src={mainImage}
            alt="Main-info-photo"
            className="object-cover"
            priority
            sizes="(min-width:768px) 372px, (min-width: 1024px) 524px, (min-width: 1440px) 695px, 695px"
          />
        </div>
      </div>
    </div>
  )
}
