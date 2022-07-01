import { SingleMetricContainer } from '../styles/metrics-styled'

import { MetricType } from './Metrics'

interface MetricProps {
  metric: MetricType
}

const SingleMetric = ({ metric }: MetricProps) => {
  const { num, unit, sentence } = metric
  return (
    <SingleMetricContainer>
      <strong>
        {num}
        {unit}
      </strong>
      {sentence}
    </SingleMetricContainer>
  )
}

export default SingleMetric
