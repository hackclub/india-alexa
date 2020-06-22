import { BaseStyles, Box, Button, Container, Grid, Heading } from 'theme-ui'
import Meta from '@hackclub/meta'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/Footer'
import Resources from '../components/resources.mdx'

export default () => (
  <>
    <Meta
      as={Head}
      title="Alexa Resources"
      description="Resources for Hack Club-India Alexa Challenge"
      //  image="https://workshop-cards.hackclub.com/press.png?fontSize=350px&brand=HQ"
    />
    <Nav />
    <Box
      as="header"
      sx={{
        bg: 'sheet',
        color: 'text',
        pt: [5, null, null, null, 6],
        pb: [3, 4, 5, null, 6],
        textAlign: 'center'
      }}
    >
      <Container variant="copy">
        <Heading as="h1" variant="title" sx={{ color: 'primary', mt: [2, 4] }}>
          Alexa Resources
        </Heading>
        <Heading as="h2" variant="subtitle" sx={{ mt: 3, color: 'text' }}>
          We are providing you with some Amazon Alexa Resources.
        </Heading>
      </Container>
    </Box>
    <Container
      variant="main"
      sx={{
        py: [3, 4],
        px: 3,
        maxWidth: [null, 'copyUltra'],
        h2: { variant: 'text.headline' }
      }}
    >
      <Heading id="banners" variant="headline">
        What is Alexa ?
      </Heading>
      <Box
        as={BaseStyles}
        sx={{
          mx: 0,
          fontSize: 2,
          '> p': { maxWidth: 'copy' },
          h2: { variant: 'text.headline', mt: 4 }
        }}
      >
        <Resources />
      </Box>
    </Container>
    <Footer />
  </>
)
