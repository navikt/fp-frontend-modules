import React, { FunctionComponent } from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import bemUtils from '@navikt/fp-bem-utils';
import { EditedIcon } from '@navikt/fp-react-components';

import Label, { LabelType } from './Label';

import './readOnlyField.less';

const hasValue = (value: any): boolean => value !== undefined && value !== null && value !== '';

const readOnlyContainerCls = bemUtils('readOnlyContainer');

interface OwnProps {
  label?: LabelType;
  isEdited?: boolean;
  value?: string;
}

export const ReadOnlyField: FunctionComponent<OwnProps> = ({
  label,
  value,
  isEdited,
}) => {
  if (!hasValue(value)) {
    return null;
  }
  return (
    <div className={readOnlyContainerCls.block}>
      <Label input={label} readOnly />
      <Normaltekst className={readOnlyContainerCls.modifier('readOnlyContent')}>
        {value}
        {isEdited && <EditedIcon />}
      </Normaltekst>
    </div>
  );
};

ReadOnlyField.defaultProps = {
  isEdited: false,
};

export default ReadOnlyField;
