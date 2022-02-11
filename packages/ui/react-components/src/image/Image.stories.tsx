import React, { useState } from 'react';

import innvilgetImageUrl from '../assets/images/innvilget_valgt.svg';
import questionNormalUrl from '../assets/images/question_normal.svg';
import questionHoverUrl from '../assets/images/question_hover.svg';
import AdvarselModal from '../advarsel-modal/AdvarselModal';
import Image from './Image';

export default {
  title: 'React Components',
};

export const Default = () => (
  <Image
    alt="Alt-tekst"
    src={innvilgetImageUrl}
  />
);

export const KlikkbartIkon = () => {
  const [visModal, setVisModal] = useState(false);

  return (
    <>
      <Image
        alt="Alt-tekst"
        src={innvilgetImageUrl}
        onClick={() => setVisModal(true)}
      />
      {visModal && (
        <AdvarselModal
          bodyText="Dette er en advarsel"
          showModal
          submit={() => setVisModal(false)}
        />
      )}
    </>
  );
};

export const IkonMedTooltip = () => (
  <Image
    alt="Alt-tekst"
    src={innvilgetImageUrl}
    tooltip={<div><b>Dette er en tooltip-tekst</b></div>}
  />
);

export const AnnetIkonVedHoover = () => (
  <Image
    alt="Alt-tekst"
    src={questionNormalUrl}
    srcHover={questionHoverUrl}
  />
);
