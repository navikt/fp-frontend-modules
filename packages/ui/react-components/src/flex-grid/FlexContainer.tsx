import bem from '@navikt/fp-bem-utils';
import React, { ReactNode, FunctionComponent } from 'react';
import classnames from 'classnames';

import './flexContainer.less';

const flexContainerCls = bem('flexContainer');

interface OwnProps {
  children?: ReactNode | ReactNode[];
  wrap?: boolean;
  fullHeight?: boolean;
}

const FlexContainer: FunctionComponent<OwnProps> = ({
  children,
  wrap = false,
  fullHeight = false,
}) => (
  <div className={classnames(flexContainerCls.element('fluid'), { flexWrap: wrap, fullHeight })}>
    {children}
  </div>
);

export default FlexContainer;
