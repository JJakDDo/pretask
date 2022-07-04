import Awards from '../components/Awards'

import { ComponentMeta } from '@storybook/react'

export default {
  title: 'Awards',
  component: Awards,
} as ComponentMeta<typeof Awards>

export const Basic = () => <Awards />
