import { CustomButton } from '@/components/Button/button'
import { ContentWrapper } from '@/components/layouts/contentWrapper'
import { Alert, TextField, Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

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
  // const [serviseCase, setServiseCase] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    setIsDisable(!userName || !userEmail || !phone || !message)
  }, [message, phone, userEmail, userName])

  const sendEmail = async () => {
    const isFormFilled = !!userName && !!userEmail && !!phone && !!message
    console.log(userName, userEmail, phone, message)
    const formFields = {
      name: userName,
      email: userEmail,
      phone: phone,
      // case: serviseCase,
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
          // setServiseCase('')
          setMessage('')
          setIsDisable(true)
          setAlert({
            isShow: true,
            color: 'success',
            message: t('alert.success'),
          })
        }
      } catch (error) {
        setAlert({
          isShow: true,
          color: 'error',
          message: t('alert.error'),
        })
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
  // const handleChangeServiseCase = useCallback(
  //   (e: ChangeEvent<HTMLInputElement>) => {
  //     setServiseCase(e.target.value)
  //   },
  //   []
  // )
  const handleChangeMessage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value)
    },
    []
  )

  const closeAlert = useCallback(() => {
    setAlert({ isShow: false, color: 'success', message: '' })
  }, [])

  useEffect(() => {
    const timer1 = setTimeout(
      () => setAlert({ isShow: false, color: 'success', message: '' }),
      3000
    )

    return () => {
      clearTimeout(timer1)
    }
  }, [alert.isShow])

  return (
    <div
      id="contact"
      className="relative flex flex-col w-full mt-10 pb-10 laptop:mt-20 laptop:pb-20"
    >
      <ContentWrapper>
        <div className="w-full p-8 bg-beige z-10 relative">
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
          {alert.isShow && (
            <Alert
              color={alert.color}
              onClose={closeAlert}
              className="mb-6 absolute top-6 right-6 w-fit"
            >
              <span className="font-medium">{alert.message}</span>
            </Alert>
          )}
          <div className="flex flex-col laptop:flex-row">
            <form
              className="grid grid-cols-1 gap-4 w-full laptop:w-[670px]"
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
              {/* <TextField
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
              </TextField> */}
              <TextField
                id="message"
                label={t('form.message')}
                variant="standard"
                // className="desktop:col-span-2"
                multiline
                // rows={4}
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
            <div className="bg-white flex flex-col w-full laptop:w-[360px] p-6 mt-6 laptop:mt-0 laptop:ml-6">
              <p className="font-mont font-bold text-16 pb-2">
                {t('contacts.title')}
              </p>
              <p className="font-mont pb-3">{t('contacts.content')}</p>
              <div className="flex flex-col">
                <Typography className="font-mont font-bold leading-6 text-16 pb-2">
                  {'Fr: +33651981641, +33758069214'}
                </Typography>
                <Typography className="font-mont font-bold leading-6 text-16 pb-2">
                  {'En: +33758859618'}
                </Typography>
                <Typography className="font-mont font-bold leading-6 text-16 pb-2">
                  {'Рус: +33608046383'}
                </Typography>
                <Typography className="font-mont font-bold leading-6 text-16">
                  {'Укр: +33616814975'}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
      <div className="flex w-full h-[540px] pt-6 tablet:pt-0 overflow-auto absolute bottom-0">
        <Image
          src="/contact-photo.png"
          width={1440}
          height={540}
          alt="Contact-photo"
          className="h-full object-cover"
        />
      </div>
    </div>
  )
}
