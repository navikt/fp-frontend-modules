import React, { FunctionComponent } from 'react';
import bemUtils from '@navikt/fp-bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import Card from './Card';
import GenderIcon from './GenderIcon';

const personCardCls = bemUtils('personCard');

interface EmptyPersonCard {
    namePlaceholder: string;
}

const EmptyPersonCard: FunctionComponent<EmptyPersonCard> = ({ namePlaceholder }) => (
    <Card>
        <div className={personCardCls.element('container')}>
            <GenderIcon />
            <Normaltekst tag="p" className={personCardCls.element('namePlaceholder')}>
                {namePlaceholder}
            </Normaltekst>
        </div>
    </Card>
);

export default EmptyPersonCard;
