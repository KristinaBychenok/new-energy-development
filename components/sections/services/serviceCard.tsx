import { Typography } from '@mui/material'
import Image from 'next/image'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { ArrowIcon } from './arrowIcon'

type ServiceCardProps = {
  serviceId: string
  img: string
  title: string
  subTitle: string
  button: string
  setOpenedCartId: (num: string) => void
  isCartOpened: boolean
  isOnScreen: boolean
}

export const ServiceCard = ({
  serviceId,
  img,
  title,
  subTitle,
  button,
  setOpenedCartId,
  isCartOpened,
  isOnScreen,
}: ServiceCardProps) => {
  return (
    <div
      id={`cart-${serviceId}`}
      className="flex flex-col h-full bg-white shadow-md relative"
      onClick={() => {
        setOpenedCartId(serviceId)
      }}
    >
      <div className={`flex items-center w-full h-[160px] overflow-auto`}>
        <Image
          src={img}
          width={362}
          height={160}
          alt={title}
          className="w-full h-[160px] object-cover"
          priority={isOnScreen}
        />
      </div>
      <div className="flex flex-col p-6 justify-between mb-[52px]">
        <Typography className="font-roboto-condensed text-grey-dark font-bold text-20 mb-2 big-mobile:h-16 tablet:h-fit">
          {title}
        </Typography>
        <Typography className="font-mont text-grey-dark font-normal leading-6 text-16">
          {subTitle}
        </Typography>
        <div className="absolute bottom-6 right-6 flex flex-row p-2 mt-4 rounded-md hover:bg-grey-light active:bg-grey-light">
          <div className="font-roboto-condensed text-blue-light font-medium text-16 mr-2">
            {button}
          </div>
          <ArrowDropDownIcon
            sx={{ color: 'blue-light' }}
            className={`${isCartOpened ? 'rotate-180' : ''}`}
          />
        </div>
      </div>
      <div className="absolute bottom-[-36px] right-0 z-10">
        {isCartOpened && <ArrowIcon />}
      </div>
    </div>
  )
}
