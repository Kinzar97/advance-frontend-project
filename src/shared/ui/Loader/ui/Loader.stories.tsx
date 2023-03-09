import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from './Loader';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;


export const Light = Template.bind({});
Light.args = {};

export const DARK = Template.bind({});
DARK.args = {};
DARK.decorators=[ThemeDecorator(Theme.DARK)];