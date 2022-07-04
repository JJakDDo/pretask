import { useRef, useState, useEffect } from 'react'

import { SingleMetricContainer } from '../styles/metrics-styled'

import { MetricType } from './Metrics'

interface MetricProps {
  metric: MetricType
}

const SingleMetric = ({ metric }: MetricProps) => {
  const { target, unit, sentence } = metric
  const [currentNum, setCurrentNum] = useState(0)
  const rafRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)

  // useEffect와 setInterval을 사용하면 매번 setInterval을 생성하고 clear 해줘야한다.
  // 왜냐하면 props로 넘어오는 값을 사용하기 위해서이다.
  // [] dependency list를 추가해주면 closure에 의해서 props로 넘어온 값을 사용할 수 가 없다.

  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   const time = currentTime
    //   // Exponential Ease-Out으로 숫자 카운팅이 느려지는 효과를 구현
    //   const inc = Number(num) * (-1 * Math.pow(2, (-10 * time) / 2) + 1)
    //   if (Math.round(inc) >= num) {
    //     clearInterval(intervalId)
    //     setCurrentNum(num)
    //   } else {
    //     setCurrentNum(Math.round(inc))
    //     setCurrentTime((prev) => prev + 0.01)
    //   }
    // }, 10)

    // reqeustAnimationFrame의 콜백함수로 숫자가 올라가는 애니메이션 기능을 가지고있다.
    // @params time: number 페이지가 시작된 후 흐른 시간 (ms)
    function startCountingUp(time: number) {
      // startTimeRef에 값이 있는지 확인하고 없으면 현재 시간을 시작시간으로 할당해준다.
      if (startTimeRef.current !== 0) {
        // 애니메이션이 시작하고 몇초가 흘렀는지 계산한다.
        const delta = (time - startTimeRef.current) / 1000
        // Exponential Ease-Out 함수를 사용해서 숫자가 올라가는 효과가 점점 느려지게 구현했다.
        const inc = Number(target) * (-1 * Math.pow(2, (-10 * delta) / 2) + 1)
        // 원하는 값 또는 2초를 도달했으면 currentNum에 target을 할당한다.
        // 아니면 계산식의 결과값을 할당한다.
        if (inc >= target || delta >= 2) {
          return setCurrentNum(target)
        } else {
          setCurrentNum(Math.floor(inc))
        }
      } else {
        startTimeRef.current = time
      }
      // requestAnimationFrame은 항상 자기자신을 호출해줘야 반복적으로 실행할 수 있다.
      rafRef.current = requestAnimationFrame(startCountingUp)
    }
    rafRef.current = requestAnimationFrame(startCountingUp)

    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <SingleMetricContainer>
      <strong>
        {currentNum}
        {unit}
      </strong>
      {sentence}
    </SingleMetricContainer>
  )
}

export default SingleMetric
