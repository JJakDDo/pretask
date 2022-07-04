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

export const MetricsContainer = styled.div`
  width: 417px;
  height: 298px;
  opacity: 0;

  font-size: 36px;
  color: #3a3a3a;
  text-align: left;
  padding-top: 150px;
  animation: ${(props: PropsType) => {
    const { duration, delay } = props
    // opacity가 animation이 끝난 후 다시 0으로 리셋이 된다.
    // 해결하기 위해서 forwards를 추가해준다.
    return css`
      ${entranceAnimation} ${duration}s ease-in-out ${delay}s forwards
    `
  }};
`

export const SingleMetricContainer = styled.div`
  height: 36px;
  margin-bottom: 20px;
`
