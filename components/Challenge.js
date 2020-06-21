/**@jsx jsx*/
import { jsx } from 'theme-ui'
import RegisterButton from './Register'

export default () => (
  <div sx={{ width: '100%', mt: [4, 5] }}>
    <h1 sx={{ color: 'red', variant: 'challengeh' }}>The Challenge</h1>
    <p
      sx={{
        variant: 'challengep'
      }}
    >
      Do you think you can come up with some interesting ideas revolving around
      <b sx={{ color: 'green' }}> Amazon Alexa</b>? What if we could help you
      build that idea into a reality.Tell us about your idea and the best one
      wins an <b sx={{ color: 'muted' }}>Amazon Alexa Echo Dot.</b>
    </p>
    <p
      sx={{
        variant: 'challengep'
      }}
    >
      🧲 Bonus points for those solutions involving
      <b sx={{ color: 'cyan' }}> Covid-19</b> or promoting{' '}
      <b sx={{ color: 'cyan' }}> social-distancing.</b>
    </p>
    <div
      sx={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        mt: [4, 5]
      }}
    >
      <RegisterButton
        fontSize={[null, 2]}
        width={['180px', '210px']}
        height={['50px', '60px']}
      />
    </div>
  </div>
)
