/**@jsx jsx*/
import { jsx } from 'theme-ui'

export default () => (
  <div
    sx={{
      width: '150px',
      height: '40px',
      background: `linear-gradient(98.52deg, #07FFD0 4.81%, rgba(47, 208, 57, 0.96) 94.34%)`,
      color: 'white',
      textAlign: 'center',
      mr: 3,
      display: ['none', 'none', 'flex'],
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
    <p sx={{ m: 0 }}>
      <b>REGISTER {`>>`}</b>
    </p>
  </div>
)
