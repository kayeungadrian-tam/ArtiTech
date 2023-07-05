import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent } from '@storybook/testing-library';

import BlogPost from './blog.tsx';

const meta = {
    title: 'View/Pages/Blog',
    component: BlogPost,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        // layout: 'fullscreen',
    },
} satisfies Meta<typeof BlogPost>;

export default meta;
type Story = StoryObj<typeof meta>;


export const SimpleBlog: Story = {
    args: {
        blogMeta: {
            displayName: 'user@test.com',
            uuid: 'uuid',
            createdAt: '2021-01-01',
            thumbnail: 'https://avatars.githubusercontent.com/u/1403242?v=4',
        },
    },
};

