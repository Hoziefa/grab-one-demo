import React from 'react';
import { SectionLayout } from '../reusable/SectionLayout';
import { dataProvider } from '../../services/DataProvider';

export const Escapes: React.FC = (): JSX.Element => {
    const { sectionTitle, items } = dataProvider.getSectionData('escapes');

    return <section className="escapes container"><SectionLayout sectionTitle={ sectionTitle } itemsList={ items } /></section>;
};
