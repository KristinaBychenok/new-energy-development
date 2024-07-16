import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslations } from 'next-intl'
import { checkRegExpField, emailRegExp } from './contact.helpers'

export type AlertColor = 'success' | 'error'

export const useGetContact = () => {
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
  const [userEmail, setUserEmail] = useState({
    value: '',
    isValid: true,
    message: '',
  })
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    setIsDisable(
      !userName || !userEmail.value || !userEmail.isValid || !phone || !message
    )
  }, [message, phone, userEmail.isValid, userEmail.value, userName])

  const handleChangeUserName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value)
    },
    []
  )
  const handleChangeEmail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const isEmailValid =
        e.target.value === ''
          ? true
          : checkRegExpField(e.target.value, emailRegExp)
      setUserEmail({
        value: e.target.value,
        isValid: isEmailValid,
        message: isEmailValid ? '' : t('form.emailNotValidMessage'),
      })
    },
    [t]
  )
  const handleChangePhone = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }, [])
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

  const sendEmail = async () => {
    const isFormFilled = !!userName && !!userEmail && !!phone && !!message
    const isFormValid = userEmail.isValid

    const formFields = {
      name: userName,
      email: userEmail.value,
      phone: phone,
      message: message,
    }

    if (isFormFilled && isFormValid) {
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
          setUserEmail({
            value: '',
            isValid: true,
            message: '',
          })
          setPhone('')
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

  return {
    userName,
    userEmail,
    phone,
    message,
    handleChangeUserName,
    handleChangeEmail,
    handleChangePhone,
    handleChangeMessage,
    closeAlert,
    isSubmitButtonDisable: isDisable,
    sendEmail,
    alert,
  }
}
