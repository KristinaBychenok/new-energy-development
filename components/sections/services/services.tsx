import { ContentWrapper } from '@/components/layouts/contentWrapper'
import { Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { ServicesAccordion } from './servicesAccordion'

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

  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <div id="services" className="pt-5 tablet:pt-10 laptop:pt-20 relative">
      {/* <div className="bg-grey-light w-full h-[230px] absolute top-0 left-0 -z-10"></div> */}
      <ContentWrapper>
        <Typography className="font-roboto-condensed text-blue-light font-medium leading-6 text-16">
          {t('title')}
        </Typography>
        <Typography className="font-roboto-condensed text-grey-dark font-bold leading-[38px] text-32 pb-6">
          {t('subTitle')}
        </Typography>
        <div className="hidden laptop:flex laptop:w-full laptop:flex-col">
          <ServicesAccordion
            expanded={expanded}
            panel="panel1"
            handleChange={handleChange}
            aria="panel1-content"
            summaryId="panel1-header"
            services={services1L}
          />
          <ServicesAccordion
            expanded={expanded}
            panel="panel2"
            handleChange={handleChange}
            aria="panel2-content"
            summaryId="panel2-header"
            services={services2L}
          />
          <ServicesAccordion
            expanded={expanded}
            panel="panel3"
            handleChange={handleChange}
            aria="panel3-content"
            summaryId="panel3-header"
            services={services3L}
          />
        </div>
        <div className="hidden big-mobile:flex big-mobile:flex-col big-mobile:w-full laptop:hidden">
          <ServicesAccordion
            expanded={expanded}
            panel="panel1"
            handleChange={handleChange}
            aria="panel1-content"
            summaryId="panel1-header"
            services={services1M}
          />
          <ServicesAccordion
            expanded={expanded}
            panel="panel2"
            handleChange={handleChange}
            aria="panel2-content"
            summaryId="panel2-header"
            services={services2M}
          />
          <ServicesAccordion
            expanded={expanded}
            panel="panel3"
            handleChange={handleChange}
            aria="panel3-content"
            summaryId="panel3-header"
            services={services3M}
          />
          <ServicesAccordion
            expanded={expanded}
            panel="panel4"
            handleChange={handleChange}
            aria="panel4-content"
            summaryId="panel4-header"
            services={services4M}
          />
        </div>
        <div className="w-full flex flex-col big-mobile:hidden">
          {servicesS.map((serviceId) => {
            return (
              <ServicesAccordion
                key={serviceId}
                expanded={expanded}
                panel={`panel${serviceId}`}
                handleChange={handleChange}
                aria={`panel${serviceId}-content`}
                summaryId={`panel${serviceId}-header`}
                services={[serviceId]}
              />
            )
          })}
        </div>
      </ContentWrapper>
    </div>
  )
}
