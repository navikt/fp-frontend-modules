import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { useForm } from 'react-hook-form';
import Datepicker from './Datepicker';
import RadioGroupPanel from './RadioGroupPanel';
import TextArea from './TextArea';
import Form from './Form';
import Label from './Label';
import Checkbox from './Checkbox';
import Select from './Select';
import InputField from './InputField';

export default {
    title: 'Form Components',
    component: Form,
};

const Template: Story<ComponentProps<typeof Form>> = (args) => {
  const formMethods = useForm();
  return (
    <Form formMethods={formMethods}>
      <Datepicker name="datofeltnavn" label="Datofelt"/>
      <RadioGroupPanel
        name="radiofeltnavn"
        label="Er dette et radio group panel?"
        radios={[{
          value: 'ja',
          label: 'Ja',
        }, {
          value: 'nei',
          label: 'Nei',
        }]}
      />
      <TextArea name="textareanavn" label="Tekstfelt" />
      <Label input="Dette er en label" />
      <Checkbox name="checkboxnavn" label="Dette er en checkbox" />
      <InputField name="inputfieldnavn" label="Dette er et inputfield" />
      <Select
        name="selectnavn"
        label='Dette er en select'
        selectValues={[<option value="verdi1">Verdi 1</option>, <option value="verdi2">Verdi 2</option>]}
      />
    </Form>
  );
};

export const FormComponent = Template.bind({});
FormComponent.args = {};
