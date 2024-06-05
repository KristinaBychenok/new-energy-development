import { ContentWrapper } from '@/components/layouts/contentWrapper'
import { Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const About = () => {
  const t = useTranslations('PageLayout.body.aboutSection')

  return (
    <ContentWrapper>
      <div
        id="about"
        className="flex flex-col py-10 tablet:py-14 laptop:py-20 w-full"
      >
        <Typography className="font-roboto-condensed text-blue-light font-medium leading-6 text-16">
          {t('title')}
        </Typography>
        <Typography className="font-roboto-condensed text-grey-dark font-bold leading-[38px] text-32">
          {t('subTitle')}
        </Typography>
        <div className="flex flex-col-reverse laptop:flex-row items-start w-full pt-6">
          <div className="flex w-full laptop:w-[548px] laptop:h-[326px] pt-6 laptop:pt-0 laptop:pr-6">
            <Image
              src="/about-us-photo.png"
              width={548}
              height={326}
              alt="about-us-photo"
              className="object-cover w-full h-full"
            />
          </div>
          <Typography className="font-mont text-grey-dark font-normal leading-6 text-16 w-full laptop:w-[548px]">
            {t('content')}
          </Typography>
        </div>
      </div>
    </ContentWrapper>
  )
}
