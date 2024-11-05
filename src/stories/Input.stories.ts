import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Input from '../components/Input.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Element/Input',
  component: Input,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // type: { control: 'select', options: ['', 'a', 'Input'] },
    // size: { control: 'select', options: ['', 'sm', 'lg'] },
    // backgroundColor: { control: 'color' },
  },
  args: {
    // primary: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
};

export const Textarea: Story = {
  args: {
    type: 'textarea'
  },
};

export const Select: Story = {
  args: {
    type: 'select',
    options: [
      {
        value: 'one',
        label: 'Option One'
      },
      {
        value: 'two',
        label: 'Option Two'
      },
      {
        value: 'three',
        label: 'Option Three'
      },
      {
        value: 'four',
        label: 'Option Four'
      },
      {
        value: 'five',
        label: 'Option Five'
      },
    ]
  },
};