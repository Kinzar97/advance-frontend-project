import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const DARK = Template.bind({});
DARK.args = {};
DARK.decorators=[ThemeDecorator(Theme.DARK)];