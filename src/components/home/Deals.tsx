import React from 'react';
import { SectionLayout } from '../reusable/SectionLayout';
import { dataProvider } from '../../services/DataProvider';

export const Deals: React.FC = (): JSX.Element => {
    const { sectionTitle, items } = dataProvider.getSectionData('deals');

    return <section className="deals container section-container"><SectionLayout sectionTitle={ sectionTitle } itemsList={ items } /></section>;
};
