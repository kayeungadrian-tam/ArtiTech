import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './card.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Components/Elements/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
        title: 'Card Title',
        id: 1
    }
};




