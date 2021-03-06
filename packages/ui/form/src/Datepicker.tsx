import React, { FunctionComponent, useMemo } from 'react';
import { DatepickerLimitations } from 'nav-datovelger';
import { useFormContext, useController } from 'react-hook-form';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { dateConstants } from '@navikt/fp-date-utils';
import PureDatepicker from './pure/PureDatepicker';
import { getError, getValidationRules } from './formUtils';
import Label, { LabelType } from './Label';
import ReadOnlyField from './ReadOnlyField';

dayjs.extend(customParseFormat);

export interface DatepickerProps {
  label: LabelType;
  name: string;
  validate?: ((value: string | number) => any)[];
  ariaLabel?: string;
  defaultValue?: string;
  limitations?: DatepickerLimitations;
  error?: string;
  disabled?: boolean;
  isReadOnly?: boolean;
  parse?: (value: string) => string;
  disabledDays?: {
    before: Date;
    after?: Date;
  };
  initialMonth?: Date;
}

const Datepicker: FunctionComponent<DatepickerProps> = ({
  name,
  validate,
  limitations,
  label,
  ariaLabel,
  defaultValue,
  error,
  disabled = false,
  isReadOnly = false,
  parse = (value) => value,
  disabledDays,
  initialMonth,
}): JSX.Element => {
  const { formState: { errors } } = useFormContext();
  const { field } = useController({
    name,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
    defaultValue,
  });

  const { onChange, value } = field;

  if (isReadOnly) {
    return (
      <ReadOnlyField
        label={<Label input={label} readOnly />}
        value={value ? dayjs(value, dateConstants.ISO_DATE_FORMAT, true).format(dateConstants.DDMMYYYY_DATE_FORMAT) : undefined}
      />
    );
  }

  return (
    <PureDatepicker
      label={label}
      onChange={(date) => onChange(parse(date))}
      value={value || undefined}
      errorMessage={error || getError(errors, name)}
      limitations={limitations}
      ariaLabel={ariaLabel}
      inputId={name}
      disabled={disabled}
      disabledDays={disabledDays}
      initialMonth={initialMonth}
    />
  );
};

export default Datepicker;
