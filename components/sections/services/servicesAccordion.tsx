import { useMessages, useTranslations } from 'next-intl'
import { ServiceCard } from './serviceCard'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Messages } from './servicesAccordion.types'
import { ContactCardContent } from './contactCard'

export const ServicesAccordion = ({
  panel,
  services,
  openedPanelId,
  setOpenedPanelId,
  hasContactCard,
}: {
  panel: string
  services: string[]
  openedPanelId: string
  setOpenedPanelId: (id: string) => void
  hasContactCard?: boolean
}) => {
  const t = useTranslations('PageLayout.body.servicesSection')
  const [openedServiceId, setOpenedServiceId] = useState('')
  const [isCartOpened, setIsCartOpened] = useState(false)
  const [isPanelExpanded, setIsPanelExpanded] = useState(false)

  const messages = useMessages() as unknown as Messages
  const worksKeys = useMemo(
    () =>
      openedServiceId
        ? Object.keys(
            messages.PageLayout.body.servicesSection.services[openedServiceId]
              .works
          )
        : [],
    [messages.PageLayout.body.servicesSection.services, openedServiceId]
  )

  const onClickCard = useCallback(
    (serviceId: string) => {
      if (serviceId === openedServiceId) {
        setOpenedServiceId('')
        setIsCartOpened(false)
        setOpenedPanelId('')
      } else {
        setOpenedServiceId(serviceId)
        setIsCartOpened(true)
        setOpenedPanelId(panel)
      }
    },
    [openedServiceId, panel, setOpenedPanelId]
  )

  useEffect(() => {
    setIsPanelExpanded(panel === openedPanelId)
  }, [openedPanelId, panel])

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-1 big-mobile:grid-cols-2 laptop:grid-cols-3 gap-x-4">
        {services.map((serviceId) => {
          return (
            <ServiceCard
              key={serviceId}
              serviceId={serviceId}
              img={t(`services.${serviceId}.img`)}
              title={t(`services.${serviceId}.title`)}
              subTitle={t(`services.${serviceId}.subTitle`)}
              button={t(`services.${serviceId}.button`)}
              onClickCard={onClickCard}
              isCartOpened={isCartOpened && isPanelExpanded}
              openedServiceId={openedServiceId}
              isOnScreen={panel === 'panel1'}
            />
          )
        })}
        {!!hasContactCard && (
          <div className="bg-blue-very-light hidden flex-col laptop:flex h-full w-[294px] desktop:w-[360px] p-6">
            <ContactCardContent />
          </div>
        )}
      </div>
      {isCartOpened && isPanelExpanded && (
        <div className="flex flex-col w-full bg-grey-light p-6">
          <p className="font-roboto-condensed text-grey-dark font-bold">
            {t('worksTitle')}
          </p>
          <ul className="pt-2">
            {worksKeys.map((workId) => {
              return (
                <li
                  key={workId}
                  className="font-mont text-grey-dark font-normal leading-5 text-14"
                >
                  {t(`services.${openedServiceId}.works.${workId}`)}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
