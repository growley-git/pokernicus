import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Heading from '../components/Heading.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Element/Heading',
  component: Heading,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // type: { control: 'select', options: ['', 'a', 'Heading'] },
    // size: { control: 'select', options: ['', 'sm', 'lg'] },
    // backgroundColor: { control: 'color' },
  },
  args: {
    // primary: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const H1: Story = {
  args: {
    tag: 'h1'
  },
};

export const H2: Story = {
  args: {
    tag: 'h2'
  },
};

export const H3: Story = {
  args: {
    tag: 'h3'
  },
};

export const H4: Story = {
  args: {
    tag: 'h4'
  },
};

export const H5: Story = {
  args: {
    tag: 'h5'
  },
};

export const H6: Story = {
  args: {
    tag: 'h6'
  },
};