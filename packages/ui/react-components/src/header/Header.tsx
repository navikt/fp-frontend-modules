import React from 'react';
import { Sidetittel as PageTitle } from 'nav-frontend-typografi';
import bem from '@navikt/fp-bem-utils';
import './header.less';

interface HeaderProps {
    title: string;
    titleHref?: string;
}

const headerCls = bem('header');
export const Header: React.FunctionComponent<HeaderProps> = ({ title, titleHref, children }) => {
    return (
        <header className={headerCls.block}>
            <div className={headerCls.element('column')}>
                {titleHref ? (
                    <a href={titleHref} className={headerCls.element('title-anchor')}>
                        <PageTitle className={headerCls.element('title')}>
                            NAV
                            <span className={headerCls.element('subtitle')}>{title}</span>
                        </PageTitle>
                    </a>
                ) : (
                    <PageTitle className={headerCls.element('title')}>
                        NAV
                        <span className={headerCls.element('subtitle')}>{title}</span>
                    </PageTitle>
                )}
            </div>
            <div className={headerCls.element('column')}>{children}</div>
        </header>
    );
};

export default Header;
