import React from 'react';
import { SectionLayout } from '../reusable/SectionLayout';
import { dataProvider } from '../../services/DataProvider';

export const Store: React.FC = (): JSX.Element => {
    const { sectionTitle, items } = dataProvider.getSectionData('store');

    return <section className="store container section-container"><SectionLayout sectionTitle={ sectionTitle } itemsList={ items } /></section>;
};
