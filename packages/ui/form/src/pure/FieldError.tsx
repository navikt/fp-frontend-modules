import React from 'react';
import bemUtils from '@navikt/fp-bem-utils';

import './fieldError.less';

const fieldErrorCls = bemUtils('fieldError');

interface FieldErrorProps {
  message?: string;
}

const FieldError = ({ message }: FieldErrorProps): JSX.Element => <p className={fieldErrorCls.block}>{message}</p>;

export default FieldError;
