import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const DARK = Template.bind({});
DARK.args = {};
DARK.decorators=[ThemeDecorator(Theme.DARK)];


