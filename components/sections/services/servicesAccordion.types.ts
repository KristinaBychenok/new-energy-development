interface Services {
  [key: string]: any
}

interface Works {
  [key: string]: any
}

interface ServicesSection {
  services: Services
}

interface Body {
  servicesSection: ServicesSection
}

interface PageLayout {
  body: Body
}

export interface Messages {
  PageLayout: PageLayout
}
