import { ContentWrapper } from '@/components/layouts/contentWrapper'
import { Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import EngineeringIcon from '@mui/icons-material/Engineering'
import HandshakeIcon from '@mui/icons-material/Handshake'
import LanguageIcon from '@mui/icons-material/Language'
import aboutImg from '/about-us-photo.png'

const achievementsIcons = [
  {
    id: '1',
    icon: <WorkHistoryIcon className="text-white" />,
  },
  {
    id: '2',
    icon: <EngineeringIcon className="text-white" />,
  },
  {
    id: '3',
    icon: <HandshakeIcon className="text-white" />,
  },
  {
    id: '4',
    icon: <LanguageIcon className="text-white" />,
  },
]

export const About = () => {
  const t = useTranslations('PageLayout.body.aboutSection')

  return (
    <ContentWrapper>
      <div
        id="about"
        className="flex flex-col pt-5 tablet:pt-10 laptop:pt-20 w-full"
      >
        <Typography className="font-roboto-condensed text-blue-light font-medium leading-6 text-16">
          {t('title')}
        </Typography>
        <Typography className="font-roboto-condensed text-grey-dark font-bold leading-[38px] text-32">
          {t('subTitle')}
        </Typography>
        <div className="flex flex-col-reverse laptop:flex-row items-start w-full pt-6">
          <div className="flex w-full laptop:w-[357px] laptop:h-[464px] pt-6 laptop:pt-0 laptop:pr-6 overflow-hidden">
            <div className="flex h-full overflow-auto w-full justify-center">
              <Image
                src="/about-us-photo.webp"
                width={357}
                height={464}
                alt="about-us-photo"
                className="object-cover w-full laptop:w-[357px]"
                sizes="(max-width:768px) 100%, (min-width: 769px) 357px, 357px"
              />
            </div>
          </div>
          <div className="flex flex-col w-full laptop:w-[740px]">
            <Typography className="font-mont text-grey-dark font-normal leading-6 text-16 w-full pb-2">
              {t('content1')}
            </Typography>
            <Typography className="font-mont text-grey-dark font-normal leading-6 text-16 w-full">
              {t('content2')}
            </Typography>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 mt-5">
              {achievementsIcons.map((achievement) => {
                return (
                  <div key={achievement.id} className="flex flex-row">
                    <div className="rounded-full bg-blue-light h-fit w-fit p-2 mr-4">
                      {achievement.icon}
                    </div>
                    <div className="flex flex-col">
                      <p className="font-mont font-bold text-16">
                        {t(`achievements.${achievement.id}.title`)}
                      </p>
                      <p className="font-mont">
                        {t(`achievements.${achievement.id}.content`)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}
