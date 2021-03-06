import React, { FunctionComponent, useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Textarea as NavTextarea } from 'nav-frontend-skjema';
import EtikettFokus from 'nav-frontend-etiketter';
import bemUtils from '@navikt/fp-bem-utils';

import Label, { LabelType } from './Label';
import ReadOnlyField from './ReadOnlyField';
import { getError, getValidationRules } from './formUtils';

import './textArea.less';

const textAreaFieldWithBadgesCls = bemUtils('textAreaFieldWithBadges');

type BadgesType = 'suksess' | 'info' | 'advarsel' | 'fokus';

interface Badges {
  text: string;
  type: BadgesType;
  titleText: string;
}

interface OwnProps {
  name: string;
  label: LabelType;
  readOnly?: boolean;
  maxLength?: number;
  badges?: Badges[];
  validate?: ((value: string) => any)[];
  textareaClass?: string;
  placeholder?: string;
}

const TextArea: FunctionComponent<OwnProps> = ({
  name,
  label,
  validate = [],
  readOnly,
  badges,
  ...otherProps
}) => {
  const { formState: { errors } } = useFormContext();
  const { field } = useController({
    name,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
  });

  if (readOnly) {
    return <ReadOnlyField label={<Label input={label} readOnly />} value={field.value} />;
  }

  return (
    <div className={badges ? textAreaFieldWithBadgesCls.block : undefined}>
      { badges && (
        <div className={textAreaFieldWithBadgesCls.modifier('etikettWrapper')}>
          { badges.map(({ text, type, titleText }) => (
            <EtikettFokus key={text} type={type} title={titleText}>
              {text}
            </EtikettFokus>
          ))}
        </div>
      )}
      <NavTextarea
        label={<Label input={label} readOnly={false} />}
        feil={getError(errors, name)}
        {...field}
        onChange={(event) => field.onChange(event.currentTarget.value !== '' ? event.currentTarget.value : undefined)}
        value={field.value ? field.value : ''}
        {...otherProps}
      />
    </div>
  );
};

export default TextArea;
