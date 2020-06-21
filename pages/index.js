import Head from 'next/head'
import Nav from '../components/nav'
import Intro from '../components/Intro'
import Challenge from '../components/Challenge'
import Eligibility from '../components/Eligibility'
import Timeline from '../components/Timeline'
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
  </>
)

export default Home
