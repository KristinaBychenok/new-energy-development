import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslations } from 'next-intl'
import {
  checkRegExpField,
  emailRegExp,
  nameRegExp,
  phoneRegExp,
} from './contact.helpers'

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
  const [userName, setUserName] = useState({
    value: '',
    isValid: true,
  })
  const [userEmail, setUserEmail] = useState({
    value: '',
    isValid: true,
  })
  const [phone, setPhone] = useState({
    value: '',
    isValid: true,
  })
  const [message, setMessage] = useState({
    value: '',
    isValid: true,
  })

  useEffect(() => {
    setIsDisable(
      !userName.value ||
        !userName.isValid ||
        !userEmail.value ||
        !userEmail.isValid ||
        !phone.value ||
        !phone.isValid ||
        !message.value ||
        !message.isValid
    )
  }, [
    message.isValid,
    message.value,
    phone.isValid,
    phone.value,
    userEmail.isValid,
    userEmail.value,
    userName.isValid,
    userName.value,
  ])

  const handleChangeUserName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const isNameValid =
        e.target.value === ''
          ? true
          : checkRegExpField(e.target.value, nameRegExp) &&
            e.target.value.length <= 100

      setUserName({
        value: e.target.value,
        isValid: isNameValid,
      })
    },
    []
  )
  const handleChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const isEmailValid =
      e.target.value === ''
        ? true
        : checkRegExpField(e.target.value, emailRegExp)
    setUserEmail({
      value: e.target.value,
      isValid: isEmailValid,
    })
  }, [])
  const handleChangePhone = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const isPhoneValid =
      e.target.value === ''
        ? true
        : checkRegExpField(e.target.value, phoneRegExp) &&
          e.target.value.length <= 12
    setPhone({
      value: e.target.value,
      isValid: isPhoneValid,
    })
  }, [])
  const handleChangeMessage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const isMessageValid = e.target.value.length <= 2000

      setMessage({
        value: e.target.value,
        isValid: isMessageValid,
      })
    },
    []
  )

  const closeAlert = useCallback(() => {
    setAlert({ isShow: false, color: 'success', message: '' })
  }, [])

  useEffect(() => {
    const timer1 = setTimeout(
      () => setAlert({ isShow: false, color: 'success', message: '' }),
      10000
    )

    return () => {
      clearTimeout(timer1)
    }
  }, [alert.isShow])

  const sendEmail = async () => {
    setIsDisable(true)
    const isFormFilled =
      !!userName.value && !!userEmail.value && !!phone.value && !!message.value
    const isFormValid =
      userEmail.isValid && userName.isValid && phone.isValid && message.isValid

    const formFields = {
      name: userName.value,
      email: userEmail.value,
      phone: phone.value,
      message: message.value,
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
          setUserName({
            value: '',
            isValid: true,
          })
          setUserEmail({
            value: '',
            isValid: true,
          })
          setPhone({
            value: '',
            isValid: true,
          })
          setMessage({
            value: '',
            isValid: true,
          })
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
