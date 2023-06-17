// A storybook story for the Footer component

import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './footer';
// import FooterProps from '../interface/footer';


const meta = {
    title: 'Components/Layout/Footer',
    component: Footer,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        // layout: 'fullscreen',
    },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        footerData: {
            text: 'This is a footesr',
            link: 'https://www.google.com',
            linkText: 'Google',
            icon: 'pi pi-google',
        }
    }
};
// Default.args = {};



// export const WithLinkAndTextAndIcon = Template.bind({});
// WithLinkAndTextAndIcon.args = {
//     text: 'This is a footer',
//     link: 'https://www.google.com',
//     linkText: 'Google',
//     icon: 'fab fa-google',
// };


