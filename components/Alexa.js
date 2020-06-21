/**@jsx jsx*/
import { jsx, Grid } from 'theme-ui'

export default () => (
  <div sx={{ width: '100vw', bg: 'bgsection' }}>
    <h1 sx={{ variant: 'challengeh', color: 'cyan', pt: 4 }}>About Alexa </h1>
    <p sx={{ variant: 'challengep' }}>
      Amazon Alexa is a{' '}
      <b sx={{ color: 'orange' }}>virtual assistant AI technology </b>developed
      by Amazon. Alexa is used with lots of devices and{' '}
      <b sx={{ color: 'green' }}>Echo Dot</b> is one of them.
    </p>

    <Grid
      columns={[null, null, null, 2]}
      className="timeline"
      sx={{
        ml: [3, 5, 6],
        mr: [3, 5],
        mt: [4, 5],
        mb: 5,
        gap: [null, null, null, 4]
      }}
    >
      <Card
        gradient={gradient.voice}
        img={img.voice}
        heading={heading.voice}
        para={para.voice}
      />
      <Card
        gradient={gradient.robot}
        img={img.robot}
        heading={heading.robot}
        para={para.robot}
      />
    </Grid>
  </div>
)

const Card = ({ gradient, img, heading, para }) => (
  <div
    className="timelinecard"
    sx={{
      color: 'white',
      background: gradient,
      pl: 4,
      pb: 4,
      borderRadius: '10px'
    }}
  >
    <img src={img} sx={{ mt: 5, height: '78px' }}></img>
    <h1>{heading}</h1>
    <p sx={{ fontSize: 2, width: '90%' }}>{para}</p>
  </div>
)

/**data for the cards defined here */

const gradient = {
  voice: `linear-gradient(143.95deg, #C92DE3 1.79%, #2C3ACD 101.13%)`,
  robot: `linear-gradient(143.95deg, #2CE1CE 11.23%, #2992CE 101.13%)`,
  server: `linear-gradient(143.95deg, #D03085 11.23%, #DC2430 101.13%)`
}

const img = {
  voice: 'voice1.png',
  robot: `robot.png`,
  server: `server.png`
}

const heading = {
  voice: 'Voice Assistants',
  robot: 'System Automation',
  server: `2. server`
}

const para = {
  voice: 'It can be used for making powerful voice assistants.',
  robot:
    'Alexa can be combined with interfaced with IOTs for system Automation.',
  server: 'The registration will end on '
}
