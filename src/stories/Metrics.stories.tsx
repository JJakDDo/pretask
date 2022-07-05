import { ComponentMeta } from '@storybook/react'

import Metrics from '../components/Metrics'
import { AnimationTypes } from '../App'

export default {
  title: 'Metrics',
  component: Metrics,
} as ComponentMeta<typeof Metrics>

export const Basic = ({ duration, delay }: AnimationTypes) => (
  <Metrics duration={duration} delay={delay} />
)
