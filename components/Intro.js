/**@jsx jsx*/
import { jsx, Grid, Box } from 'theme-ui'

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
    <p sx={{ variant: 'para', mt: 4 }}>Hack Club-India Amazon</p>
    <p sx={{ variant: 'para', textAlign: 'center', mb: 4 }}>Alexa Challenge</p>

    {/*
    <img
      src={'./moreecho.png'}
      sx={{ width: ['250px', 'initial'] }}
      alt={'Alexa Image'}
    />*/}
    <Box sx={{ backgroundImage: `url('./moreecho.png')` }}>sss</Box>
    <p sx={{ fontWeight: 'bold', fontSize: [1, 4] }}>
      Your chance to win an Amazon Alexa Echo Dot{' '}
    </p>
  </Grid>
)
