import { CustomButton } from '@/components/Button/button'
import { ContentWrapper } from '@/components/layouts/contentWrapper'
import { Alert, MenuItem, TextField, Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import emailjs from '@emailjs/browser'

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

export type AlertColor = 'success' | 'info' | 'warning' | 'error'

export const Contact = () => {
  const t = useTranslations('PageLayout.body.contactSection')
  const [alert, setAlert] = useState<{
    isShow: Boolean
    color: AlertColor
    message: String
  }>({
    isShow: false,
    color: 'success',
    message: '',
  })
  const [isDisable, setIsDisable] = useState(true)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [serviseCase, setServiseCase] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    setIsDisable(!userName || !userEmail || !phone || !serviseCase || !message)
  }, [message, phone, serviseCase, userEmail, userName])

  const sendEmail = async () => {
    const isFormFilled =
      !!userName && !!userEmail && !!phone && !!serviseCase && !!message
    console.log(userName, userEmail, phone, serviseCase, message)
    const formFields = {
      name: userName,
      email: userEmail,
      phone: phone,
      case: serviseCase,
      message: message,
    }

    if (isFormFilled) {
      try {
        const res = await emailjs.send(
          'service_0vy7tar',
          'template_4xcul3p',
          // form.current,
          formFields,
          'dYf8U5g1SvOQ4SQ0W'
        )
        if (res.text === 'OK') {
          setUserName('')
          setUserEmail('')
          setPhone('')
          setServiseCase('')
          setMessage('')
          setIsDisable(true)
          setAlert({
            isShow: true,
            color: 'success',
            message: 'Your message has been sent!',
          })
        }
      } catch (error) {
        setAlert({
          isShow: true,
          color: 'error',
          message: 'Something went wrong! Please try again.',
        })
        console.log(error)
      }
    }
  }

  const handleChangeUserName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value)
    },
    []
  )
  const handleChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value)
  }, [])
  const handleChangePhone = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }, [])
  const handleChangeServiseCase = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setServiseCase(e.target.value)
    },
    []
  )
  const handleChangeMessage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value)
    },
    []
  )

  const closeAlert = useCallback(() => {
    setAlert({ isShow: false, color: 'success', message: '' })
  }, [])

  return (
    <div
      id="contact"
      className="relative flex flex-col w-full bg-beige pt-10 tablet:py-10 desktop:py-[90px]"
    >
      <ContentWrapper>
        <div className="w-full pb-10 tablet:pb-0 tablet:w-[522px] laptop:w-[414px] desktop:w-[536px]">
          <Typography
            variant="h4"
            className="font-roboto-condensed text-18 font-bold leading-[25.2px] text-blue-light mb-1"
          >
            {t('title')}
          </Typography>
          <Typography
            variant="h1"
            className="font-roboto-condensed text-40 font-bold leading-[38px] text-blue-dark pb-4"
          >
            {t('subTitle')}
          </Typography>
          <Typography className="font-mont text-grey-dark font-normal leading-6 text-16 pb-6">
            {t('content')}
          </Typography>
          <form
            className="grid grid-flow-row desktop:grid-cols-2 gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <TextField
              id="name"
              label={t('form.name')}
              variant="standard"
              required
              value={userName}
              onChange={handleChangeUserName}
            />
            <TextField
              id="email"
              label={t('form.email')}
              variant="standard"
              required
              value={userEmail}
              onChange={handleChangeEmail}
            />
            <TextField
              id="phone"
              label={t('form.phone')}
              variant="standard"
              required
              value={phone}
              onChange={handleChangePhone}
            />
            <TextField
              id="case"
              select
              label={t('form.case')}
              required
              //   defaultValue="EUR"
              variant="standard"
              value={serviseCase}
              onChange={handleChangeServiseCase}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="message"
              label={t('form.message')}
              variant="standard"
              className="desktop:col-span-2"
              multiline
              rows={4}
              required
              value={message}
              onChange={handleChangeMessage}
            />
            <CustomButton
              type="submit"
              isDisable={isDisable}
              onClick={sendEmail}
            >
              {t('form.button')}
            </CustomButton>
          </form>
          {alert.isShow && (
            <Alert
              color={alert.color}
              // onDismiss={closeAlert}
              onClose={closeAlert}
              className="w-full mt-3"
            >
              <span className="font-medium">{alert.message}</span>
            </Alert>
          )}
        </div>
      </ContentWrapper>
      <div className="hidden tablet:flex self-center tablet:absolute tablet:top-0 tablet:right-0 pt-6 tablet:pt-0 tablet:h-full overflow-auto tablet:w-[174px] laptop:w-[524px] desktop:w-[695px]">
        <Image
          src="/contact-photo.png"
          width={695}
          height={510}
          alt="Contact-photo"
          className="h-full object-cover"
        />
      </div>
    </div>
  )
}
