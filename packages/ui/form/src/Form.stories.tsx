import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { useForm } from 'react-hook-form';
import Datepicker from './Datepicker';
import RadioGroupPanel from './RadioGroupPanel';
import TextArea from './TextArea';
import Form from './Form';

export default {
    title: 'Form Components',
    component: Form,
};

const Template: Story<ComponentProps<typeof Form>> = (args) => {
  const formMethods = useForm();
  return (
    <Form formMethods={formMethods}>
      <Datepicker name="test" label="Datofelt"/>
      <RadioGroupPanel
        name="test"
        label="Er dette et radio group panel?"
        radios={[{
          value: 'ja',
          label: 'Ja',
        }, {
          value: 'nei',
          label: 'Nei',
        }]}
      />
      <TextArea name="test" label="Tekstfelt" />
    </Form>
  );
};

export const FormComponent = Template.bind({});
FormComponent.args = {};
