import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageError } from './PageError';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const DARK = Template.bind({});
DARK.args = {};
DARK.decorators=[ThemeDecorator(Theme.DARK)];


