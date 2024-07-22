import { ServicesSection } from '@/components/sections/services/services'
import { GetStaticPropsContext } from 'next'
import { MainInformation } from '@/components/sections/main/main'
import { About } from '@/components/sections/about/about'
import { Contact } from '@/components/sections/contact/contact'
import { Wrapper } from '../components/layouts/wrapper'

export default function Home() {
  return (
    <Wrapper>
      <div className="w-full">
        <MainInformation />
        <ServicesSection />
        <About />
        <Contact />
      </div>
    </Wrapper>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default,
    },
  }
}
