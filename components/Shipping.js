/**@jsx jsx*/
import { jsx } from 'theme-ui'
import Icon from '@hackclub/icons'

export default () => (
  <div sx={{ width: '100vw', bg: 'bgsection', pb: [4, 5], pt: 3 }}>
    <h1 sx={{ variant: 'challengeh', color: 'red' }}>Free Shipping 📦</h1>
    <p sx={{ variant: 'challengep' }}>
      The winner of the challenge will directly be contacted by our team and we
      will dispatch the <b sx={{ color: 'orange' }}>echo dot for free! </b>
      Due to Covid-19 we are not shipping outside India.
    </p>
    <a
      href="./"
      sx={{
        ml: [3, 5, 6],
        fontSize: [2, 2, 3],
        textDecorationLine: 'none',
        color: 'green',
        ':hover': {
          textDecorationLine: 'underline'
        }
      }}
    >
      Learn More {'>'}{' '}
    </a>
  </div>
)
