/**@jsx jsx*/
import { jsx } from 'theme-ui'

export default () => (
  <div sx={{ width: '100%' }}>
    <h1 sx={{ color: 'red', fontSize: [4, 5, 6], m: 0, mt: 3, ml: [2, 4] }}>
      The Challenge
    </h1>
    {/*
    <p sx={{ ml: 3, mt: 0, fontSize: 3, width: '70vw' }}>
      Tell us about your idea which must involve
      <b> Amazon Alexa or the Echo Dot</b> hardware and the best one wins an
      Amazon Alexa Echo dot!
    </p>*/}
    <p
      sx={{
        ml: [2, 4],
        mr: ['2', null],
        mt: 0,
        fontSize: [2, 2, 3],
        width: ['98w', '80vw']
      }}
    >
      Do you think you can come up with some interesting ideas revolving around
      <b sx={{ color: 'green' }}> Amazon Alexa</b>? What if we could help you
      build that idea into a reality.Tell us about your idea and the best one
      wins an <b sx={{ color: 'muted' }}>Amazon Alexa Echo Dot.</b>
    </p>
    <p
      sx={{
        ml: [2, 4],
        mr: ['2', null],
        mt: 0,
        fontSize: [2, 2, 3],
        width: ['98w', '80vw']
      }}
    >
      🧲 Bonus points for those solutions involving
      <b sx={{ color: 'cyan' }}> Covid-19</b> or promoting{' '}
      <b sx={{ color: 'cyan' }}> social-distancing.</b>
    </p>
  </div>
)
