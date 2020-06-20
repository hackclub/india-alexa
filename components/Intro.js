/**@jsx jsx*/
import { jsx, Grid, Box } from 'theme-ui'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import Zoom from 'react-reveal/Zoom'
import Flip from 'react-reveal/Flip'
import config from 'react-reveal/globals'
config({ ssrFadeout: true })

export default () => (
  <Grid
    columns={[null]}
    sx={{
      width: '100vw',
      height: '',
      background:
        ' linear-gradient(234.85deg, #F47621 12.9%, rgba(101, 5, 224, 0.94) 94.33%)',
      color: 'white',
      justifyContent: 'center',
      alignContent: 'center',
      justifyItems: 'center',
      p: {
        /*fontWeight: 'bold',
        fontSize: [3, 5],
        m: 0,
        lineHeight: '0.9em'
      */
      }
    }}
  >
    <p sx={{ variant: 'para', mt: 4 }}>
      <span className="Orange" sx={{ color: '#FF8000' }}>
        Hack
      </span>
      <span> Club</span>-<span sx={{ color: '#34D54A' }}>India</span> Amazon
    </p>
    <p sx={{ variant: 'para', textAlign: 'center', mb: 4 }}>Alexa Challenge</p>
    <img
      src={'./moreecho2.png'}
      sx={{ width: ['250px', 'initial'] }}
      alt={'Alexa Image'}
    />
    <Bounce>
      <p sx={{ fontWeight: 'bold', mt: 0, fontSize: [1, 3, 4, 4] }}>
        Your chance to win an Amazon Alexa Echo Dot{' '}
      </p>
    </Bounce>
  </Grid>
)
