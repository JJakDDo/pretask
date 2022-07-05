import { ComponentMeta } from '@storybook/react'

import Logo from '../components/Logo'
import { AnimationTypes } from '../App'

export default {
  title: 'Logo',
  component: Logo,
  decorators: [
    (Story) => (
      <div style={{ textAlign: 'center' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Logo>

export const Basic = ({ duration, delay }: AnimationTypes) => (
  <Logo duration={duration} delay={delay} />
)
