/**@jsx jsx*/
import { jsx, Grid } from 'theme-ui'

export default () => (
  <div sx={{ width: '100vw', bg: '#F9F9FA', mt: 5 }}>
    <h1 sx={{ variant: 'challengeh', color: 'blue' }}>Eligibilty</h1>
    <p sx={{ variant: 'challengep' }}>
      You are eligible to enter if you meet the following requirements at time
      of entry:
    </p>
    <Grid
      columns={[null, null, 2]}
      sx={{ justifyContent: [null, null, 'center'], mx: 'auto', mb: 4 }}
    >
      <Card h1={redh1} p={redp} a={reda} link={redlink} bg={redbg} />
      <Card h1={blueh1} p={bluep} a={bluea} link={bluelink} bg={bluebg} />
    </Grid>
  </div>
)

const Card = ({ bg, h1, p, link, a }) => (
  <div
    sx={{
      background: bg,
      width: ['90vw', '80vw', '40vw'],
      ml: bg == bluebg ? [3, 5, 1] : [3, 5, 6],
      borderRadius: 5
    }}
  >
    <h1 sx={{ color: 'white', mt: 4, ml: 4, mr: 2 }}>{h1}</h1>
    <p sx={{ ml: 4, mr: 2, color: 'white', fontSize: 2 }}>{p}</p>
    <div className="linkcontainer" sx={{ mb: 4 }}>
      <a
        href={link}
        sx={{
          color: 'white',
          ml: 4,
          fontSize: '2',
          textDecorationLine: 'none',
          ':hover': {
            // cursor: 'pointer',
            textDecorationLine: 'underline'
          }
        }}
      >
        {a}{' '}
      </a>
    </div>
  </div>
)

/**This is the data for the cards */

const redbg = 'linear-gradient(159.44deg, #E32D42 1.01%, #B62434 99.4%)'
const redh1 = 'Originality: idea must be original plagiarism not allowed'
const redp = 'Your idea must be original and must be solving social probelms 💡'
const redlink = './'
const reda = ' Know More >'

const bluebg = 'linear-gradient(159.44deg, #338EDA 1.01%, #1469AF 101.08%)'
const blueh1 = 'Member: must be from India and hack club member'
const bluep =
  'You must be from India ( 🇮🇳 )  and a hack club member! Due to covid-19 we are not shipping internationally. '
const bluelink = './'
const bluea = 'Join Hack Club >'
