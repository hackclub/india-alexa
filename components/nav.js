/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Flag from './flag'
import RegisterButton from './Register'

export default () => (
  <Flex
    className="MainHeader"
    sx={{ width: '100%', borderBottom: '1px solid', borderColor: '#E5E5E5' }}
  >
    <div className="first Half">
      <Flag />
    </div>
    <div
      className="SecondHalf"
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'center'
      }}
    >
      <RegisterButton />
    </div>
  </Flex>
)
