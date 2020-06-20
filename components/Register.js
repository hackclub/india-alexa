/**@jsx jsx*/
import { jsx } from 'theme-ui'

export default ({ width, height, display, fontSize }) => (
  <div
    sx={{
      width: width ? width : '150px',
      height: height ? height : '40px',
      background: `linear-gradient(98.52deg, #07FFD0 4.81%, rgba(47, 208, 57, 0.96) 94.34%)`,
      color: 'white',
      textAlign: 'center',
      mr: 3,
      display: display ? display : 'flex',
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
    <p sx={{ m: 0, fontSize: fontSize ? fontSize : null }}>
      <b>REGISTER {`>>`}</b>
    </p>
  </div>
)
