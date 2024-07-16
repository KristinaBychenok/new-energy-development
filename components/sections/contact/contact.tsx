import { CustomButton } from '@/components/Button/button'
import { ContentWrapper } from '@/components/layouts/contentWrapper'
import { Alert, TextField, Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useGetContact } from './contact.hooks'

export const Contact = () => {
  const t = useTranslations('PageLayout.body.contactSection')

  const {
    userName,
    userEmail,
    phone,
    message,
    handleChangeUserName,
    handleChangeEmail,
    handleChangePhone,
    handleChangeMessage,
    closeAlert,
    isSubmitButtonDisable,
    sendEmail,
    alert,
  } = useGetContact()

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
                type="text"
                id="name"
                label={t('form.name')}
                variant="standard"
                required
                value={userName}
                onChange={handleChangeUserName}
              />
              <TextField
                type="email"
                id="email"
                label={t('form.email')}
                variant="standard"
                required
                value={userEmail.value}
                helperText={userEmail.message}
                error={!userEmail.isValid}
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
                id="message"
                label={t('form.message')}
                variant="standard"
                multiline
                required
                value={message}
                onChange={handleChangeMessage}
              />
              <CustomButton
                type="submit"
                isDisable={isSubmitButtonDisable}
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
        <div className="flex h-full overflow-auto w-full justify-center">
          <Image
            src="/contact-photo.webp"
            width={1440}
            height={540}
            alt="contact-photo"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}
