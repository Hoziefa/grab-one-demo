import React from 'react';
import { SectionLayout } from '../reusable/SectionLayout';
import { dataProvider } from '../../services/DataProvider';

export const Collections: React.FC = (): JSX.Element => {
    const { sectionTitle, items } = dataProvider.getSectionData('collections');

    return <section className="collection container section-container"><SectionLayout sectionTitle={ sectionTitle } itemsList={ items } /></section>;
};
