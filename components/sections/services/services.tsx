import { ContentWrapper } from '@/components/layouts/contentWrapper'
import { Button, Container, Grid, Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import { ServiceCard } from './serviceCard'

const services = ['Repair', 'Installation']

export const ServicesSection = () => {
  const t = useTranslations('PageLayout.body.servicesSection')

  return (
    <div id="services" className="pt-10 pb-5 tablet:py-10 relative">
      <div className="bg-grey-light w-full h-[230px] absolute top-0 left-0 -z-10"></div>
      <ContentWrapper>
        <Typography className="font-roboto-condensed text-blue-light font-medium leading-6 text-16">
          {t('title')}
        </Typography>
        <Typography className="font-roboto-condensed text-grey-dark font-bold leading-[38px] text-32 pb-6">
          {t('subTitle')}
        </Typography>
        {services.map((service) => {
          return (
            <ServiceCard
              key={service}
              service={service}
              img={t(`services.${service}.img`)}
              title={t(`services.${service}.title`)}
              subTitle={t(`services.${service}.subTitle`)}
              services={[
                'Erection of foundation and concrete works',
                'Plumbing works',
                'Smart home setup',
                'House furnishing',
                'Electrical works',
              ]}
              button={t(`services.${service}.button`)}
            />
          )
        })}
        {/* <Grid
          container
          spacing={2}
          sx={{ flexGrow: 1 }}
          className="mt-0 items-center justify-center"
        >
          <Grid item sm={4} md={4}>
            <div className="h-[280px] bg-white shadow-md">
              <Typography>Construction of villas</Typography>
              <Typography>Turnkey and custom construction</Typography>
              <Button>Learn more</Button>
            </div>
          </Grid>
          <Grid item sm={4} md={4}>
            <div className="h-[280px] bg-white shadow-md">
              <Typography>Construction of villas</Typography>
              <Typography>Turnkey and custom construction</Typography>
              <Button>Learn more</Button>
            </div>
          </Grid>
          <Grid item sm={4} md={4}>
            <div className="h-[280px] bg-white shadow-md">
              <Typography>Construction of villas</Typography>
              <Typography>Turnkey and custom construction</Typography>
              <Button>Learn more</Button>
            </div>
          </Grid>
          <Grid item sm={4} md={4}>
            <div className="h-[280px] bg-white shadow-md">
              <Typography>Construction of villas</Typography>
              <Typography>Turnkey and custom construction</Typography>
              <Button>Learn more</Button>
            </div>
          </Grid>
          <Grid item sm={4} md={4}>
            <div className="h-[280px] bg-white shadow-md">
              <Typography>Construction of villas</Typography>
              <Typography>Turnkey and custom construction</Typography>
              <Button>Learn more</Button>
            </div>
          </Grid>
          <Grid item sm={4} md={4}>
            <div className="h-[280px] bg-white shadow-md">
              <Typography>Construction of villas</Typography>
              <Typography>Turnkey and custom construction</Typography>
              <Button>Learn more</Button>
            </div>
          </Grid>
          <Grid item sm={4} md={4}>
            <div className="h-[280px] bg-white shadow-md">
              <Typography>Construction of villas</Typography>
              <Typography>Turnkey and custom construction</Typography>
              <Button>Learn more</Button>
            </div>
          </Grid>
          <Grid item sm={4} md={4}>
            <div className="h-[280px] bg-white shadow-md">
              <Typography>Construction of villas</Typography>
              <Typography>Turnkey and custom construction</Typography>
              <Button>Learn more</Button>
            </div>
          </Grid>
        </Grid> */}
      </ContentWrapper>
    </div>
  )
}
