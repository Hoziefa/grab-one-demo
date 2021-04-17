import React from 'react';
import { SectionLayout } from '../reusable/SectionLayout';
import { dataProvider } from '../../services/DataProvider';

export const BeautyMassageSpa: React.FC = (): JSX.Element => {
    const { sectionTitle, items } = dataProvider.getSectionData('beautyMassageSpa');

    return <section className="beauty-massage-spa container"><SectionLayout sectionTitle={ sectionTitle } itemsList={ items } /></section>;
};
