import { CustomButton } from '@/components/Button/button'
import { ContentWrapper } from '@/components/layouts/contentWrapper'
import { Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export const MainInformation = () => {
  const t = useTranslations('PageLayout.body.mainSection')

  return (
    <div className="relative flex flex-col w-full bg-beige pt-10 tablet:py-10 desktop:py-20">
      <ContentWrapper>
        <div className="w-full tablet:w-[324px] laptop:w-[424px] desktop:w-[536px]">
          <Typography
            variant="h4"
            className="font-roboto-condensed text-18 font-bold leading-[25.2px] text-blue-light mb-1"
          >
            {t('title')}
          </Typography>
          <Typography
            variant="h1"
            className="font-roboto-condensed text-40 font-bold leading-[48px] text-blue-dark pb-4"
          >
            {t('subTitle')}
          </Typography>
          <Typography className="font-mont text-grey-dark font-normal leading-6 text-16">
            {t('content')}
          </Typography>
        </div>
        <Link href="/#contact" className="flex w-fit h-fit">
          <CustomButton>{t('button')}</CustomButton>
        </Link>
      </ContentWrapper>
      <div className="self-center tablet:absolute tablet:top-0 tablet:right-0 pt-6 tablet:pt-0 h-[340px] tablet:h-full overflow-auto w-full tablet:w-[372px] laptop:w-[524px] desktop:w-[695px]">
        <Image
          src="/main-info-photo.png"
          width={695}
          height={510}
          alt="Main-info-photo"
          className="h-full object-cover"
        />
      </div>
    </div>
  )
}
