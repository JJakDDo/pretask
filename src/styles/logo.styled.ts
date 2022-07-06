import styled, { keyframes, css } from 'styled-components'

interface PropsType {
  duration: number
  delay: number
}

const entranceAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translateY(10px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`

export const LogoContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  opacity: 0;

  font-size: 15px;
  color: #3a3a3ab3;
  margin-top: 150px;
  text-align: center;
  animation: ${(props: PropsType) => {
    const { duration, delay } = props
    return css`
      ${entranceAnimation} ${duration}s ease-out ${delay}s forwards
    `
  }};
`

export const LogoImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: auto;
`

export const LogoText = styled.p`
  padding-top: 280px;
`
