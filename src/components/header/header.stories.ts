import type { Meta, StoryObj } from '@storybook/react';
import { Header } from "./header.tsx";

const meta = {
    title: 'Components/Layout/Header',
    component: Header,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        // layout: 'fullscreen',
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
    args: {
        user: {
            email: 'user@test.com',
            displayName: 'Test User',
            photoURL: 'https://avatars.githubusercontent.com/u/1403242?v=4',
        },
    },
};

export const LoggedOut: Story = {};
