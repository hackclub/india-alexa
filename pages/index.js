import Head from 'next/head'
import Nav from '../components/nav'
import Intro from '../components/Intro'
import Challenge from '../components/Challenge'
import Eligibility from '../components/Eligibility'
const Home = () => (
  <>
    <Head>
      <title>Amazon Alexa Challenge</title>
    </Head>
    <Nav />
    <Intro />
    <Challenge />
    <Eligibility />
  </>
)

export default Home
