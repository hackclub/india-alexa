/**@jsx jsx*/
import { jsx, Grid } from 'theme-ui'

//general margin rules are [3,5,6]

export default () => (
  <div sx={{ width: '100vw', mt: 4 }}>
    <h1 sx={{ variant: 'challengeh', color: 'orange' }}>Schedule 🗓️</h1>
    <p sx={{ variant: 'challengep' }}>
      The registrations will open from{' '}
      <b sx={{ color: 'blue' }}>25-June-2020 </b>
      and will end on <b sx={{ color: 'red' }}>7-July-2020.</b>
    </p>
    <Grid
      columns={[null, null, null, 3]}
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
        gradient={gradient.application}
        img={img.application}
        heading={heading.application}
        para={para.application}
        date={date.application}
      />
      <Card
        gradient={gradient.closing}
        img={img.closing}
        heading={heading.closing}
        para={para.closing}
        date={date.closing}
      />
      <Card
        gradient={gradient.results}
        img={img.results}
        heading={heading.results}
        para={para.results}
        date={date.results}
      />
    </Grid>
  </div>
)

const Card = ({ gradient, img, heading, para, date }) => (
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
    <img src={img} sx={{ mt: 5 }}></img>
    <h1>{heading}</h1>
    <p sx={{ fontSize: 2, width: '90%' }}>
      {para} <b>{date}</b>
    </p>
  </div>
)

/**data for the cards defined here */

const gradient = {
  application: `linear-gradient(143.95deg, #C92DE3 1.79%, #2C3ACD 101.13%)`,
  closing: `linear-gradient(143.95deg, #D03085 11.23%, #DC2430 101.13%)`,
  results: `linear-gradient(143.95deg, #2CE1CE 11.23%, #2992CE 101.13%)`
}

const img = {
  application: 'next.png',
  closing: `close.png`,
  results: `winner.png`
}

const heading = {
  application: '1. Application',
  closing: `2. Closing`,
  results: `3. Results `
}

const para = {
  application: 'The application start from ',
  closing: 'The registration will end on ',
  results: 'Results declared on '
}

const date = {
  application: '25th June 2020.',
  closing: '7th July 2020.',
  results: '12th July 2020.'
}
