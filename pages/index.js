import Head from 'next/head'
import Nav from '../components/nav'
import Intro from '../components/Intro'
import Challenge from '../components/Challenge'
import Eligibility from '../components/Eligibility'
import Timeline from '../components/Timeline'
import Alexa from '../components/Alexa'
import Shipping from '../components/Shipping'
import Footer from '../components/Footer'
const Home = () => (
  <>
    <Head>
      <title>Amazon Alexa Challenge</title>
    </Head>
    <Nav />
    <Intro />
    <Challenge />
    <Eligibility />
    <Timeline />
    <Shipping />
    <Alexa />
    <Footer />
  </>
)

export default Home
