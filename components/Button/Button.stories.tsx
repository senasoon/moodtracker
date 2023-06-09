import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Disabled = Template.bind({});

Disabled.args = {
  text: '로그인',
  disabled: true,
};

export const Default = Template.bind({});

Default.args = {
  text: '로그인',
  disabled: false,
};
