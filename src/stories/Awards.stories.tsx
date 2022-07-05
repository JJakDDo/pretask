import { ComponentMeta } from '@storybook/react'

import Awards from '../components/Awards'
import { AnimationTypes } from '../App'

export default {
  title: 'Awards',
  component: Awards,
} as ComponentMeta<typeof Awards>

export const Basic = ({ duration, delay }: AnimationTypes) => (
  <Awards duration={duration} delay={delay} />
)
