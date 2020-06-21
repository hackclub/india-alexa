/**@jsx jsx*/
import { jsx, Grid } from 'theme-ui'

export default () => (
  <div sx={{ width: '100vw', bg: '', pb: 4 }}>
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
        mb: [4, 5],
        gap: [4]
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
    <div sx={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
      <Button
        fontSize={[null, 3]}
        width={['180px', '210px']}
        height={['50px', '60px']}
      />
    </div>
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

const Button = ({ width, height, display, fontSize }) => (
  <div
    sx={{
      width: width ? width : '150px',
      height: height ? height : '40px',
      background: `linear-gradient(143.95deg, #D03085 11.23%, #DC2430 101.13%)`,
      color: 'white',
      textAlign: 'center',
      mr: 3,
      display: display ? display : 'flex',
      borderRadius: '50px',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      ':hover': {
        cursor: 'pointer',
        transform: 'scale(1.1)',
        transition: '0.2s'
      }
    }}
  >
    <p sx={{ m: 0, fontSize: fontSize ? fontSize : 2 }}>
      <b>Resources {`>>`}</b>
    </p>
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
  robot: 'Alexa can be interfaced with IOTs for system Automation.',
  server: 'The registration will end on '
}
