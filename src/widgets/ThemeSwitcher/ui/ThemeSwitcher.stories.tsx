import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {
    square: true,
    theme: ButtonTheme.CLEAR,
};

export const Dark = Template.bind({});
Dark.args = {
    theme: ButtonTheme.CLEAR,
    square: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
