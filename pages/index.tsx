import { ServicesSection } from '@/components/sections/services/services'
import { GetStaticPropsContext } from 'next'
import { MainInformation } from '@/components/sections/main/main'
import { About } from '@/components/sections/about/about'
import { ChooseUs } from '@/components/sections/chooseUs/chooseUs'
import { Contact } from '@/components/sections/contact/contact'

export default function Home() {
  return (
    <div className="w-full mt-16">
      <MainInformation />
      <About />
      <ServicesSection />
      <ChooseUs />
      <Contact />
    </div>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../messages/${context.locale}.json`)).default,
    },
  }
}
