import LOGO_IMAGE from '../images/triple2x.png'
import { LogoContainer, LogoImage, LogoText } from '../styles/logo-styled'

const Logo = () => {
  const duration = 0.7
  const delay = 0
  return (
    <LogoContainer duration={duration} delay={delay}>
      <LogoImage src={LOGO_IMAGE} alt="로고" />
      <LogoText>2021년 12월 기준</LogoText>
    </LogoContainer>
  )
}

Logo.defaultProps = {}

export default Logo
