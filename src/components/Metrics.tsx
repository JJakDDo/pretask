import { MetricsContainer } from '../styles/metrics.styled'
import { AnimationTypes } from '../App'

import SingleMetric from './SingleMetric'

const metricsList = [
  {
    id: 0,
    target: 700,
    unit: '만 명',
    sentence: '의 여행자',
    countingUpDuration: 2,
  },
  {
    id: 1,
    target: 100,
    unit: '만 개',
    sentence: '의 여행 리뷰',
    countingUpDuration: 2,
  },
  {
    id: 2,
    target: 470,
    unit: '만 개',
    sentence: '의 여행 일정',
    countingUpDuration: 2,
  },
]

export interface MetricType {
  id: number
  target: number
  unit: string
  sentence: string
  countingUpDuration: number
}

const Metrics = ({ duration, delay }: AnimationTypes) => {
  return (
    <MetricsContainer duration={duration} delay={delay}>
      {metricsList.map((metric) => {
        // Fade In 애니메이션이 선딜레이가 있기 때문에
        // 숫자 카운팅 애니메이션에도 선딜레이를 추가해준다.
        // delay (s)
        return <SingleMetric key={metric.id} {...metric} delay={delay} />
      })}
    </MetricsContainer>
  )
}

Metrics.defaultProps = {
  duration: 0.7,
  delay: 0.1,
}
export default Metrics
