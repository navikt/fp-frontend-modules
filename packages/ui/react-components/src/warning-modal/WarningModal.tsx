import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import Modal from 'nav-frontend-modal';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import bem from '@navikt/fp-bem-utils';

import advarselImageUrl from '../assets/images/advarsel.svg';
import Image from '../image/Image';

import './warningModal.less';

interface OwnProps {
  headerText?: string;
  bodyText: string;
  showModal: boolean;
  submit: () => void;
}

/**
 * WarningModal
 *
 * Modal med advarselikon og som viser en valgfri tekst i tillegg til knappen OK.
 */
const WarningModal: FunctionComponent<OwnProps> = ({
  bodyText,
  headerText,
  showModal,
  submit,
}) => (
  <Modal
    className={bem('modal').block}
    isOpen={showModal}
    closeButton={false}
    contentLabel={bodyText}
    onRequestClose={submit}
    shouldCloseOnOverlayClick={false}
  >
    <Row>
      <Column xs="1">
        <Image className={bem('image').block} alt={bodyText} src={advarselImageUrl} />
        <div className={bem('divider').block} />
      </Column>
      <Column xs="8" className={bem('text').block}>
        {headerText && <Undertittel>{headerText}</Undertittel>}
        <Normaltekst>{bodyText}</Normaltekst>
      </Column>
      <Column xs="2">
        <Hovedknapp
          className={bem('submitButton').block}
          mini
          htmlType="submit"
          onClick={submit}
          autoFocus
        >
          OK
        </Hovedknapp>
      </Column>
    </Row>
  </Modal>
);

export default WarningModal;
