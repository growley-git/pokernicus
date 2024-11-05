import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Alert from '../components/Alert.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Element/Alert',
  component: Alert,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // type: { control: 'select', options: ['', 'a', 'Alert'] },
    // size: { control: 'select', options: ['', 'sm', 'lg'] },
    // backgroundColor: { control: 'color' },
  },
  args: {
    // primary: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    primary: true
  },
};

export const Secondary: Story = {
  args: {
    secondary: true
  },
};

export const Success: Story = {
  args: {
    success: true
  },
};

export const Warning: Story = {
  args: {
    warning: true
  },
};

export const Danger: Story = {
  args: {
    danger: true
  },
};

export const Info: Story = {
  args: {
    info: true
  },
};

export const Light: Story = {
  args: {
    light: true
  },
};

export const Dark: Story = {
  args: {
    dark: true
  },
};