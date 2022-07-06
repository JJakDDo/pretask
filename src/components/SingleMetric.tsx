import { useRef, useState, useEffect } from 'react'

import { SingleMetricContainer } from '../styles/metrics.styled'

import { MetricType } from './Metrics'

interface MetricProps {
  target: MetricType['target']
  unit: MetricType['unit']
  sentence: MetricType['sentence']
  countingUpDuration: MetricType['countingUpDuration']
  delay: number
}

const SingleMetric = ({
  target,
  unit,
  sentence,
  countingUpDuration,
  delay,
}: MetricProps) => {
  const [currentNum, setCurrentNum] = useState(0)
  const rafRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)

  useEffect(() => {
    // reqeustAnimationFrame의 콜백함수로 숫자가 올라가는 애니메이션 기능을 가지고있다.
    // @params time: number 페이지가 시작된 후 흐른 시간 (ms)
    function startCountingUp(time: number) {
      // startTimeRef에 값이 있는지 확인하고 없으면 현재 시간을 시작시간으로 할당해준다.
      if (startTimeRef.current !== 0) {
        // 선딜레이만큼 시간이 지났는지 확인한다.
        if (time - startTimeRef.current >= delay * 1000) {
          // 애니메이션이 시작하고 몇초가 흘렀는지 계산한다.
          const delta = (time - startTimeRef.current - delay * 1000) / 1000
          // Exponential Ease-Out 함수를 사용해서 숫자가 올라가는 효과가 점점 느려지게 구현했다.
          const inc =
            Number(target) *
            (-1 * Math.pow(2, (-10 * delta) / countingUpDuration) + 1)

          // 원하는 값에 도달 또는 원하는 시간만큼 흘렀으면 currentNum에 target을 할당한다.
          // 아니면 계산식의 결과값을 할당한다.
          if (inc >= target || delta >= countingUpDuration) {
            return setCurrentNum(target)
          } else {
            setCurrentNum(Math.floor(inc))
          }
        }
      } else {
        startTimeRef.current = time
      }
      // requestAnimationFrame은 항상 자기자신을 호출해줘야 반복적으로 실행할 수 있다.
      rafRef.current = requestAnimationFrame(startCountingUp)
    }
    rafRef.current = requestAnimationFrame(startCountingUp)

    return () => cancelAnimationFrame(rafRef.current)
  }, [countingUpDuration, delay, target])

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
