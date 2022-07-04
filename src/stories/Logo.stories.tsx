import Logo from '../components/Logo'

import { ComponentMeta } from '@storybook/react'

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

export const Basic = () => <Logo />
