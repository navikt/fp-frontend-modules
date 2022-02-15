import React, { ReactNode, FunctionComponent } from 'react';
import classnames from 'classnames';
import bem from '@navikt/fp-bem-utils';

import './flexColumn.less';

const flexColumnNewCls = bem('flexColumnNew');

interface OwnProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}

const FlexColumn: FunctionComponent<OwnProps> = ({
  children,
  className,
}) => (
  <div className={classnames(flexColumnNewCls.block, className)}>
    {children}
  </div>
);

export default FlexColumn;
