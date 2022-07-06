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

export const AwardsContainer = styled.div`
  width: 520px;
  height: 64px;
  opacity: 0;
  display: flex;

  font-size: 14px;
  font-weight: bold;
  color: #3a3a3acc;
  line-height: 22px;
  margin-top: 50px;
  margin-bottom: 140px;
  animation: ${(props: PropsType) => {
    const { duration, delay } = props
    // opacity가 animation이 끝난 후 다시 0으로 리셋이 된다.
    // 해결하기 위해서 forwards를 추가해준다.
    return css`
      ${entranceAnimation} ${duration}s ease-out ${delay}s forwards
    `
  }};
`

export const SingleAwardContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
  height: 100%;
`

export const AwardImage = styled.img`
  width: 54px;
  height: 54px;

  margin-right: 8px;
`
