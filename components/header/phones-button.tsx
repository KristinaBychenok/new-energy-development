import { Tooltip } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import PhoneIcon from '@mui/icons-material/Phone'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useTranslations } from 'next-intl'
import { Alert } from '@mui/material'

const phones = [
  {
    value: '+33651981641',
    label: 'Fr: +33651981641, Alexander',
  },
  {
    value: '+33758069214',
    label: 'Fr: +33758069214, Tatiana',
  },
  {
    value: '+33758859618',
    label: 'En: +33758859618, Michael',
  },
  {
    value: '+33608046383',
    label: 'Рус: +33608046383, Александр',
  },
  {
    value: '+33616814975',
    label: 'Укр: +33616814975, Олександр',
  },
]

export const PhonesButton = () => {
  const t = useTranslations('PageLayout.header')
  const [isOpen, setIsOpen] = useState(false)
  const [alert, setAlert] = useState<{
    isShow: Boolean
    color: 'success'
    message: String
  }>({
    isShow: false,
    color: 'success',
    message: '',
  })

  useEffect(() => {
    const timer1 = setTimeout(
      () => setAlert({ isShow: false, color: 'success', message: '' }),
      3000
    )

    return () => {
      clearTimeout(timer1)
    }
  }, [alert.isShow])

  const handleCopyPhoneClick = (name: string) => {
    navigator.clipboard.writeText(name)
  }

  const closeAlert = useCallback(() => {
    setAlert({ isShow: false, color: 'success', message: '' })
  }, [])

  return (
    <div className="flex flex-col">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col bg-blue-light rounded-[50px] mx-1 tablet:mx-0 px-6 py-[7px] relative"
      >
        <div className="flex flex-row cursor-pointer">
          <PhoneIcon sx={{ color: 'white' }} fontSize="small" />
          <p className="px-2 font-roboto-condensed text-white">{t('phone')}</p>
          <ArrowDropDownIcon
            sx={{ color: 'white' }}
            className={`${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex flex-col tablet:absolute tablet:top-14 tablet:right-0 bg-white font-roboto-condensed text-blue-default rounded-md`}
      >
        {phones.map((phone) => (
          <Tooltip key={phone.value} title="Сopy" placement="left">
            <div
              className="flex items-center text-center py-2 px-2 cursor-pointer w-fit text-nowrap"
              onClick={() => {
                handleCopyPhoneClick(phone.value)
                setAlert({
                  isShow: true,
                  color: 'success',
                  message: 'Copied!',
                })
              }}
            >
              {phone.label}
            </div>
          </Tooltip>
        ))}
        {alert.isShow && (
          <Alert
            color={alert.color}
            onClose={closeAlert}
            className="absolute top-0 right-0 w-fit"
          >
            <span className="font-medium">{alert.message}</span>
          </Alert>
        )}
      </div>
    </div>
  )
}
