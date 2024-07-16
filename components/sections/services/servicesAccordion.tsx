import { styled } from '@mui/material'
import { useMessages, useTranslations } from 'next-intl'
import { ServiceCard } from './serviceCard'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import { useCallback, useState } from 'react'
import { Messages } from './servicesAccordion.types'
import { ContactCardContent } from './contactCard'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
    boxShadow: 'none',
    border: 'none',
  },
  '& .MuiAccordionSummary-content': {
    margin: theme.spacing(0),
    boxShadow: 'none',
    border: 'none',
  },
  '& .MuiAccordionSummary-content.Mui-expanded ': {
    margin: theme.spacing(0),
    boxShadow: 'none',
    border: 'none',
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#F1F1F2',
}))

export const ServicesAccordion = ({
  expanded,
  panel,
  handleChange,
  aria,
  summaryId,
  services,
  hasContactCard,
}: {
  expanded: string | false
  panel: string
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void
  aria: string
  summaryId: string
  services: string[]
  hasContactCard?: boolean
}) => {
  const t = useTranslations('PageLayout.body.servicesSection')
  const [openedServiceId, setOpenedServiceId] = useState('')

  const messages = useMessages() as unknown as Messages
  const worksKeys = openedServiceId
    ? Object.keys(
        messages.PageLayout.body.servicesSection.services[openedServiceId].works
      )
    : []

  const isCartOpened = useCallback(
    (serviceId: string) =>
      expanded === panel && !!openedServiceId && serviceId === openedServiceId,
    [expanded, openedServiceId, panel]
  )

  return (
    <Accordion
      expanded={expanded === panel}
      sx={{
        padding: 0,
        boxShadow: 'none',
        marginBottom: '24px',
        border: 'none',
      }}
      onChange={handleChange(panel)}
    >
      <AccordionSummary
        aria-controls={aria}
        id={summaryId}
        sx={{ padding: 0, border: 'none', boxShadow: 'none', margin: 0 }}
      >
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
                setOpenedCartId={setOpenedServiceId}
                isCartOpened={isCartOpened(serviceId)}
                isOnScreen={panel === 'panel1'}
              />
            )
          })}
          {!!hasContactCard && (
            <div className="bg-blue-very-light hidden flex-col laptop:flex h-full w-[294px] desktop:w-[360px] p-6 absolute bottom-0 right-0">
              <ContactCardContent />
            </div>
          )}
        </div>
      </AccordionSummary>
      <AccordionDetails>
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
      </AccordionDetails>
    </Accordion>
  )
}
