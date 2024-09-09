import { ContentWrapper } from '@/components/layouts/contentWrapper'
import { Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import EngineeringIcon from '@mui/icons-material/Engineering'
import HandshakeIcon from '@mui/icons-material/Handshake'
import LanguageIcon from '@mui/icons-material/Language'

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
        <Typography className="title-text mb-1">{t('title')}</Typography>
        <Typography className="subtitle-text">{t('subTitle')}</Typography>
        <div className="flex flex-col-reverse laptop:flex-row items-start w-full pt-6">
          <div className="flex w-full laptop:w-[357px] laptop:h-[464px] pt-6 laptop:pt-0 laptop:pr-6 overflow-hidden">
            <div className="flex h-full overflow-auto w-full justify-center">
              <Image
                src="/about_us.jpg"
                width={357}
                height={464}
                alt="about-us-photo"
                className="object-cover"
                // sizes="(max-width:768px) 100%, (min-width: 769px) 357px, 357px"
              />
            </div>
          </div>
          <div className="flex flex-col w-full laptop:w-[740px]">
            <Typography className="content-text w-full pb-2">
              {t('content1')}
            </Typography>
            <Typography className="content-text w-full">
              {t('content2')}
            </Typography>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 mt-5">
              {achievementsIcons.map((achievement) => {
                return (
                  <div key={achievement.id} className="flex flex-row">
                    <div className="rounded-full bg-blue-light h-10 w-10 p-2 mr-4 items-center justify-center">
                      {achievement.icon}
                    </div>
                    <div className="flex flex-col">
                      <p className="content-text font-bold">
                        {t(`achievements.${achievement.id}.title`)}
                      </p>
                      <p className="content-text">
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
