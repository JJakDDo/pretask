import { MetricsContainer } from '../styles/metrics.styled'

import SingleMetric from './SingleMetric'

const metricsList = [
  {
    id: 0,
    target: 700,
    unit: '만 명',
    sentence: '의 여행자',
  },
  {
    id: 1,
    target: 100,
    unit: '만 개',
    sentence: '의 여행 리뷰',
  },
  {
    id: 2,
    target: 470,
    unit: '만 개',
    sentence: '의 여행 일정',
  },
]

export interface MetricType {
  id: number
  target: number
  unit: string
  sentence: string
}

const Metrics = () => {
  const duration = 0.7
  const delay = 0.1
  return (
    <MetricsContainer duration={duration} delay={delay}>
      {metricsList.map((metric) => {
        return <SingleMetric key={metric.id} metric={metric} />
      })}
    </MetricsContainer>
  )
}

export default Metrics
