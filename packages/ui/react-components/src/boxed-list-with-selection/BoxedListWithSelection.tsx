import React from 'react';
import bem from '@navikt/fp-bem-utils';
import BoxedList from '../boxed-list/BoxedList';
import { Normaltekst } from 'nav-frontend-typografi';
import './boxedListWithSelection.less';

interface ListItemProps {
    name: string;
    selected?: boolean;
}

interface BoxedListWithSelectionProps {
    items: ListItemProps[];
    onClick?: (index: number, e: React.SyntheticEvent) => void;
}

const boxedListWithSelectionItemCls = bem('boxedList__selectItem');

const BoxedListWithSelection: React.FunctionComponent<BoxedListWithSelectionProps> = ({ items, onClick }) => (
    <BoxedList>
        {items.map(({ name, selected }, index) => (
            <li
                className={
                    selected
                        ? `${boxedListWithSelectionItemCls.block} ${boxedListWithSelectionItemCls.modifier('selected')}`
                        : boxedListWithSelectionItemCls.block
                }
                key={`${name}_${index}`}
            >
                <button
                    className={boxedListWithSelectionItemCls.element('button')}
                    aria-current={selected}
                    type="button"
                    onClick={(e) => onClick ? onClick(index, e) : undefined}
                >
                    <Normaltekst tag="span">{name}</Normaltekst>
                </button>
            </li>
        ))}
    </BoxedList>
);

export default BoxedListWithSelection;
