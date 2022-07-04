import Metrics from '../components/Metrics'

import { ComponentMeta } from '@storybook/react'

export default {
  title: 'Metrics',
  component: Metrics,
} as ComponentMeta<typeof Metrics>

export const Basic = () => <Metrics />
