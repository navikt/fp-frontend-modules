import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import bem from '@navikt/fp-bem-utils';

import endretFelt from '../assets/images/endret_felt.svg';
import Image from '../image/Image';

import './editedIcon.less';

const editedIcon = bem('editedIcon');

interface OwnProps {
  className?: string;
}

/*
 * EditedIcon
 *
 * Komponent/Ikon som viser om noe i GUI er endret.
 */

const EditedIcon: FunctionComponent<OwnProps> = ({
  className = '',
}) => (
  <span className={classnames(editedIcon.block, className)}>
    <Image
      src={endretFelt}
      alt="Saksbehandler har endret feltets verdi"
      tooltip="Saksbehandler har endret feltets verdi"
    />
  </span>
);

export default EditedIcon;
