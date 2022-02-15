import React, {
  ReactElement, ElementType, FunctionComponent,
} from 'react';
import classnames from 'classnames';
import bemUtils from '@navikt/fp-bem-utils';
import { Undertekst } from 'nav-frontend-typografi';

import './label.less';

const labelWrapperCls = bemUtils('labelWrapper');

export type LabelType = string | ReactElement;

interface OwnProps {
  input?: LabelType;
  typographyElement?: ElementType;
  readOnly?: boolean;
}

const Label: FunctionComponent<OwnProps> = ({
  input,
  readOnly = false,
  typographyElement: TypoElem = Undertekst,
}) => {
  if (!input) {
    return null;
  }

  return (
    <span className={classnames(labelWrapperCls.block, { readOnly })}>
      <TypoElem tag="span" className={labelWrapperCls.modifier('label')}>{input}</TypoElem>
    </span>
  );
};

export default Label;
