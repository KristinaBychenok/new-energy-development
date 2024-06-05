import { Button, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

type ServiceCardProps = {
  service: string
  img: string
  title: string
  subTitle: string
  services: string[]
  button: string
}

export const ServiceCard = ({
  service,
  img,
  title,
  subTitle,
  services,
  button,
}: ServiceCardProps) => {
  const { locale } = useRouter()
  return (
    <div className="relative flex flex-col tablet:flex-row w-full h-fit tablet:h-[268px] bg-white shadow-md mb-6 tablet:mb-4">
      <div className="flex items-center w-full h-auto tablet:h-full tablet:w-auto tablet:mr-6">
        <Image
          src={img}
          width={280}
          height={268}
          alt={title}
          className="w-full h-[280px] tablet:h-full tablet:w-[280px] object-cover"
        />
      </div>
      <div className="flex flex-col tablet:flex-row">
        <div className="w-full tablet:w-[296px] laptop:w-[396px] pt-6 px-6 tablet:px-0">
          <Typography className="font-roboto-condensed text-grey-dark font-bold text-20">
            {title}
          </Typography>
          <Typography className="font-mont text-grey-dark font-normal leading-6 text-16">
            {subTitle}
          </Typography>
        </div>
        <div className="px-12 tablet:px-0 w-fit flex items-start">
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
        </div>
      </div>
      <Link
        href={{
          pathname: '/service/[id]',
          query: { id: service },
        }}
        locale={locale}
        className="mt-4 mb-6 tablet:mt-0 tablet:mb-0 self-end tablet:absolute tablet:bottom-6 tablet:right-6 font-roboto-condensed text-blue-light font-medium text-16 px-6 py-3"
      >
        {button}
      </Link>
      {/* <Button
        variant="text"
        className="mt-4 mb-6 tablet:mt-0 tablet:mb-0 self-end tablet:absolute tablet:bottom-6 tablet:right-6 font-roboto-condensed text-blue-light font-medium text-16 px-6 py-3"
      >
        {button}
      </Button> */}
    </div>
  )
}
