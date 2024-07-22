import { ContentWrapper } from '@/components/layouts/contentWrapper'
import { Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { ServicesAccordion } from './servicesAccordion'
import { ContactCardContent } from './contactCard'

const services1L = ['1', '2', '3']
const services2L = ['4', '5', '6']
const services3L = ['7', '8']

const services1M = ['1', '2']
const services2M = ['3', '4']
const services3M = ['5', '6']
const services4M = ['7', '8']

const servicesS = ['1', '2', '3', '4', '5', '6', '7', '8']

export const ServicesSection = () => {
  const t = useTranslations('PageLayout.body.servicesSection')

  const [openedPanelId, setOpenedPanelId] = useState('')

  return (
    <ContentWrapper>
      <div id="services" className="pt-5 tablet:pt-10 laptop:pt-20 relative">
        <Typography className="title-text mb-1">{t('title')}</Typography>
        <Typography className="subtitle-text pb-6">{t('subTitle')}</Typography>
        <div className="hidden laptop:grid laptop:row-span-3 gap-6 laptop:w-full">
          <ServicesAccordion
            panel="panel1"
            services={services1L}
            openedPanelId={openedPanelId}
            setOpenedPanelId={setOpenedPanelId}
          />
          <ServicesAccordion
            panel="panel2"
            services={services2L}
            openedPanelId={openedPanelId}
            setOpenedPanelId={setOpenedPanelId}
          />
          <ServicesAccordion
            panel="panel3"
            services={services3L}
            hasContactCard={true}
            openedPanelId={openedPanelId}
            setOpenedPanelId={setOpenedPanelId}
          ></ServicesAccordion>
        </div>
        <div className="hidden big-mobile:grid big-mobile:row-span-4 gap-6 big-mobile:w-full laptop:hidden">
          <ServicesAccordion
            panel="panel1"
            services={services1M}
            openedPanelId={openedPanelId}
            setOpenedPanelId={setOpenedPanelId}
          />
          <ServicesAccordion
            panel="panel2"
            services={services2M}
            openedPanelId={openedPanelId}
            setOpenedPanelId={setOpenedPanelId}
          />
          <ServicesAccordion
            panel="panel3"
            services={services3M}
            openedPanelId={openedPanelId}
            setOpenedPanelId={setOpenedPanelId}
          />
          <ServicesAccordion
            panel="panel4"
            services={services4M}
            openedPanelId={openedPanelId}
            setOpenedPanelId={setOpenedPanelId}
          />
        </div>
        <div className="w-full grid row-span-8 gap-6 big-mobile:hidden">
          {servicesS.map((serviceId) => {
            return (
              <ServicesAccordion
                key={serviceId}
                panel={`panel${serviceId}`}
                services={[serviceId]}
                openedPanelId={openedPanelId}
                setOpenedPanelId={setOpenedPanelId}
              />
            )
          })}
        </div>
        <div className="bg-blue-very-light flex flex-col laptop:hidden w-full p-6 mt-5 big-mobile:mt-6">
          <ContactCardContent />
        </div>
      </div>
    </ContentWrapper>
  )
}
