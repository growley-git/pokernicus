import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import List from '../components/List.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Element/List',
  component: List,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // type: { control: 'select', options: ['', 'a', 'List'] },
    // size: { control: 'select', options: ['', 'sm', 'lg'] },
    // backgroundColor: { control: 'color' },
  },
  args: {
    // primary: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Unordered: Story = {
    args: {},
};

export const Ordered: Story = {
    args: {
        tag: 'ol'
    },
};

export const Unstyled: Story = {
    args: {
        unstyled: true
    },
};

export const Inline: Story = {
    args: {
        inline: true
    },
};