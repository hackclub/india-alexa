import Head from 'next/head'
import Nav from '../components/nav'
import Intro from '../components/Intro'
import Challenge from '../components/Challenge'
const Home = () => (
  <>
    <Head>
      <title>Amazon Alexa Challenge</title>
    </Head>
    <Nav />
    <Intro />
    <Challenge />
  </>
)

export default Home
