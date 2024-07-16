import { Button } from '@mui/material'
import { PropsWithChildren, useCallback } from 'react'

type CustomButtonT = {
  isDisable?: Boolean
  type?: 'button' | 'reset' | 'submit'
  onClick?: () => void
} & PropsWithChildren

export const CustomButton = ({
  isDisable,
  type,
  onClick,
  children,
}: CustomButtonT) => {
  const clickButtonHandler = useCallback(() => {
    onClick && onClick()
  }, [onClick])

  return (
    <Button
      variant="contained"
      className={`font-roboto-condensed px-6 py-3 mt-6 border-r-4 shadow-none h-11 w-fit ${
        isDisable
          ? 'bg-grey-light cursor-default hover:bg-grey-light active:bg-grey-light shadow-none hover:shadow-none active:shadow-none'
          : 'bg-blue-light cursor-pointer hover:bg-blue-default active:bg-blue-dark'
      }`}
      type={type}
      onClick={clickButtonHandler}
    >
      {children}
    </Button>
  )
}
