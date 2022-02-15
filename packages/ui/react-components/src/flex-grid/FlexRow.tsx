import React, { ReactNode, FunctionComponent } from 'react';
import classnames from 'classnames';
import bem from '@navikt/fp-bem-utils';

import './flexRow.less';

const flexRowCls = bem('flexRow');

interface OwnProps {
  children: ReactNode | ReactNode[];
  /**
   * spaceBetween: aktiverer { justify-content: space-between } på raden. Default er false.
   */
  spaceBetween?: boolean;
  alignItemsToBaseline?: boolean;
  alignItemsToFlexEnd?: boolean;
  wrap?: boolean;
  className?: string;
}

const FlexRow: FunctionComponent<OwnProps> = ({
  children,
  spaceBetween = false,
  alignItemsToBaseline = false,
  alignItemsToFlexEnd = false,
  wrap = false,
  className,
}) => (
  <div className={classnames(flexRowCls.block, { spaceBetween }, { alignItemsToBaseline }, { alignItemsToFlexEnd }, { wrap }, className)}>
    {children}
  </div>
);

export default FlexRow;
