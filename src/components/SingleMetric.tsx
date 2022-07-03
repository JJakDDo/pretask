import { useState, useEffect } from 'react'

import { SingleMetricContainer } from '../styles/metrics-styled'

import { MetricType } from './Metrics'

interface MetricProps {
  metric: MetricType
}

const SingleMetric = ({ metric }: MetricProps) => {
  const { num, unit, sentence } = metric
  const [currentNum, setCurrentNum] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  // useEffect와 setInterval을 사용하면 매번 setInterval을 생성하고 clear 해줘야한다.
  // 왜냐하면 props로 넘어오는 값을 사용하기 위해서이다.
  // [] dependency list를 추가해주면 closure에 의해서 props로 넘어온 값을 사용할 수 가 없다.

  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = currentTime
      // Exponential Ease-Out으로 숫자 카운팅이 느려지는 효과를 구현
      const inc = Number(num) * (-1 * Math.pow(2, (-10 * time) / 2) + 1)
      if (Math.round(inc) >= num) {
        clearInterval(intervalId)
        setCurrentNum(num)
      } else {
        setCurrentNum(Math.round(inc))
        setCurrentTime((prev) => prev + 0.01)
      }
    }, 10)
    return () => clearInterval(intervalId)
  })
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
