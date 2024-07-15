import { PropsWithChildren } from 'react'
import React from 'react'

export const ContentWrapper = (props: PropsWithChildren) => {
  return (
    <div className="mx-auto flex flex-col w-[328px] big-mobile:w-[420px] tablet:w-[720px] laptop:w-[914px] desktop:w-[1120px]">
      {props.children}
    </div>
  )
}
