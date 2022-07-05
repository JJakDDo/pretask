import LOGO_IMAGE from '../images/triple2x.png'
import { LogoContainer, LogoImage, LogoText } from '../styles/logo.styled'
import { AnimationTypes } from '../App'

const Logo = ({ duration, delay }: AnimationTypes) => {
  return (
    <LogoContainer duration={duration} delay={delay}>
      <LogoImage src={LOGO_IMAGE} alt="로고" />
      <LogoText>2021년 12월 기준</LogoText>
    </LogoContainer>
  )
}

Logo.defaultProps = {
  duration: 0.7,
  delay: 0,
}

export default Logo
