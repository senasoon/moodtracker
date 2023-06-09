import FormInput, { FormInputProps } from './FormInput';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'atoms/FormInput',
  component: FormInput,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<FormInputProps> = (args) => <FormInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'id',
  type: 'text',
  labelText: '아이디',
};
