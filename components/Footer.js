/**@jsx jsx*/
import { jsx, Grid } from 'theme-ui'

export default () => (
  <div
    className="footer"
    sx={{
      width: '100vw',
      background: 'rgb(249, 249, 250) url("/pattern.svg") repeat scroll 0% 0',
      pt: 5,
      mt: 3,
      pb: 5
    }}
  >
    <Grid
      columns={[null, null, 2]}
      sx={{
        width: '100vw',
        img: {
          ':hover': {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            transition: '0.1s'
          }
        },
        gap: [0, 'initial']
      }}
    >
      <div
        className="footerfirsthalf"
        sx={{
          mx: 'auto',
          display: ['flex', 'flex', 'initial'],
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <p
          sx={{
            ml: [3, 3, 5],
            fontSize: [2, 2, 3],
            ':hover': {
              cursor: 'pointer'
            }
          }}
        >
          FAQ
        </p>
        <p
          sx={{
            ml: [3, 3, 5],
            fontSize: [2, 2, 3],
            ':hover': {
              cursor: 'pointer'
            }
          }}
        >
          Resources
        </p>
        <p
          sx={{
            ml: [3, 3, 5],
            mt: [0],
            fontSize: [2, 2, 3],
            flexBasis: ['100%', '100%', null],
            textAlign: ['center', 'center', 'initial']
          }}
        >
          Contact- +91 98765435690
        </p>
      </div>
      <div className="footersecondhalf" sx={{ mx: 'auto' }}>
        <p sx={{ fontSize: [2, 2, 3], mr: [1, null], textAlign: ['center'] }}>
          Connect With Us
        </p>
        <img
          src="social/facebook.png"
          sx={{ width: [40, 46, 50, 64], height: [40, 46, 50, 64], mx: [2, 3] }}
        ></img>
        <img
          src="social/instagram.png"
          sx={{ width: [40, 46, 50, 64], height: [40, 46, 50, 64], mx: [2, 3] }}
        ></img>
        <img
          src="social/twitter.png"
          sx={{ width: [40, 46, 50, 64], height: [40, 46, 50, 64], mx: [2, 3] }}
        ></img>
        <img
          src="social/youtube.png"
          sx={{ width: [40, 46, 50, 64], height: [40, 46, 50, 64], mx: [2, 3] }}
        ></img>
      </div>
    </Grid>
  </div>
)
