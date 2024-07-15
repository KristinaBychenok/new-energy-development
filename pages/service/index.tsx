import { Typography } from '@mui/material'
import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/router'

function ServiceRrrrrrr() {
  //   const t = useTranslations('PageLayout.body.servicesSection.services')

  //   const router = useRouter()
  //   const id = router.query.id as string
  //   console.log(id, t(`${id}.title`))

  return (
    <div className="relative flex flex-col tablet:flex-row w-full h-fit tablet:h-[268px] bg-white shadow-md mb-6 tablet:mb-4">
      <div className="flex items-center w-full h-auto tablet:h-full tablet:w-auto tablet:mr-6">
        {/* <Image
          src={`/${t(`${serviceId}.img`)}`}
          width={280}
          height={268}
          alt={t(`${serviceId}.title`)}
          className="w-full h-[280px] tablet:h-full tablet:w-[280px] object-cover"
        /> */}
      </div>
      <div className="flex flex-col tablet:flex-row">
        {/* <div className="w-full tablet:w-[296px] laptop:w-[396px] pt-6 px-6 tablet:px-0">
          <Typography className="font-roboto-condensed text-grey-dark font-bold text-20">
            {t(`${serviceId}.title`)}
          </Typography>
          <Typography className="font-mont text-grey-dark font-normal leading-6 text-16">
            {t(`${serviceId}.subTitle`)}
          </Typography>
        </div> */}
        {/* <div className="px-12 tablet:px-0 w-fit flex items-start">
            <ul className="pt-4 tablet:pt-6 list-disc">
              {services.map((service) => {
                return (
                  <li
                    key={service}
                    className="font-mont text-grey-dark font-normal leading-5 text-14"
                  >
                    {service}
                  </li>
                )
              })}
            </ul>
          </div> */}
      </div>
    </div>
  )
}

export default ServiceRrrrrrr
