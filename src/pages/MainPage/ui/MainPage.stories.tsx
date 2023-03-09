import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainPage from './MainPage';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const DARK = Template.bind({});
DARK.args = {};
DARK.decorators=[ThemeDecorator(Theme.DARK)];