/**@jsx jsx*/
import { jsx } from 'theme-ui'
import { css, keyframes } from '@emotion/core'

const waveFlag = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-5deg);
  }
`
const waveFlagScaled = keyframes`
  from {
    transform: scale(.875) rotate(0deg);
  }
  to {
    transform: scale(.875) rotate(-5deg);
  }`
const scrolled = props =>
  props.scrolled &&
  css`
    transform: scale(0.875);
    height: 56px;
    &:hover,
    &:focus {
      animation: ${waveFlagScaled} 0.5s linear infinite alternate;
    }
  `

const flag = () => (
  <>
    <a href="https://hackclub.com/" target="__blank">
      <div
        sx={{
          backgroundImage: 'url(./flag.svg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          flexShrink: 0,
          width: ['112px', '172px'],
          height: ['48px', '64px'],
          ml: [3, 4, 4, 5]
        }}
      ></div>
    </a>
  </>
)

export default flag

/**url(https://assets.hackclub.com/flag-orpheus-top.svg) */
