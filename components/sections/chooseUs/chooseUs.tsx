import { ContentWrapper } from '@/components/layouts/contentWrapper'
import { Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import { MastersIcon } from './icons/masters'
import { ServiceIcon } from './icons/service'
import { SmileIcon } from './icons/smile'

export const ChooseUs = () => {
  const t = useTranslations('PageLayout.body.chooseUsSection')

  return (
    <ContentWrapper>
      <div className="flex flex-col pb-10 pt-5 tablet:pb-14 tablet:pt-7 laptop:pb-20 laptop:pt-10 w-full">
        <Typography className="font-roboto-condensed text-blue-light font-medium leading-6 text-16">
          {t('title')}
        </Typography>
        <Typography className="font-roboto-condensed text-grey-dark font-bold leading-[38px] text-32">
          {t('subTitle')}
        </Typography>
        <div className="grid grid-flow-row grid-cols-1 tablet:grid-cols-2 laptop:grid-flow-col laptop:grid-cols-3 gap-6 w-full pt-6">
          <div className="flex flex-col items-center text-center">
            <MastersIcon />
            <Typography className="font-roboto-condensed text-blue-light font-medium leading-[26px] text-20 pt-4">
              {t('reasons.1.title')}
            </Typography>
            <Typography className="content-text">
              {t('reasons.1.subTitle')}
            </Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <ServiceIcon />
            <Typography className="font-roboto-condensed text-blue-light font-medium leading-[26px] text-20 pt-4">
              {t('reasons.2.title')}
            </Typography>
            <Typography className="content-text">
              {t('reasons.2.subTitle')}
            </Typography>
          </div>
          <div className="tablet:col-span-2 laptop:col-span-1 flex flex-col items-center text-center">
            <SmileIcon />
            <Typography className="font-roboto-condensed text-blue-light font-medium leading-[26px] text-20 pt-4">
              {t('reasons.3.title')}
            </Typography>
            <Typography className="content-text">
              {t('reasons.3.subTitle')}
            </Typography>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}
