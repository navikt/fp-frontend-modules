import React, { FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';
import bem from '@navikt/fp-bem-utils';

import './tooltip.less';

interface OwnProps {
  children: ReactNode | string;
  content: ReactNode | string;
  alignLeft?: boolean;
  alignRight?: boolean;
  alignTop?: boolean;
  alignBottom?: boolean;
}

/**
 * Tooltip
 */
const Tooltip: FunctionComponent<OwnProps> = ({
  children,
  content,
  alignRight = false,
  alignLeft = false,
  alignTop = false,
  alignBottom = false,
}) => (
  <div className={bem('tooltip').block}>
    <span className={classnames(bem('tooltiptext').block, {
      right: alignRight || (!alignLeft && !alignTop && !alignBottom),
      left: alignLeft,
      top: alignTop,
      bottom: alignBottom,
    })}
    >
      {content}
    </span>
    {children}
  </div>
);

export default Tooltip;
