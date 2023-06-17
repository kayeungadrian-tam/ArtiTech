import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './spinner.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Components/Elements/Spinner',
    component: Spinner,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        overlay: false,
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        color: "black",
        size: 'sm',
    },
};


export const Overlay: Story = {
    args: {
        color: "blue",
        size: 'lg',
        overlay: true,
    },
};


// export const Secondary: Story = {
//     args: {
//         label: 'Button',
//     },
// };

// export const Large: Story = {
//     args: {
//         size: 'large',
//         label: 'Button',
//     },
// };

// export const Small: Story = {
//     args: {
//         size: 'small',
//         label: 'Button',
//     },
// };
