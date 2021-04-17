import React from 'react';
import { SectionLayout } from '../reusable/SectionLayout';
import { dataProvider } from '../../services/DataProvider';

export const Automotive: React.FC = (): JSX.Element => {
    const { sectionTitle, items } = dataProvider.getSectionData('automotive');

    return <section className="automotive container section-container"><SectionLayout sectionTitle={ sectionTitle } itemsList={ items } /></section>;
};
