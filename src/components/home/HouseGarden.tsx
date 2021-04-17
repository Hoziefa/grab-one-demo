import React from 'react';
import { SectionLayout } from '../reusable/SectionLayout';
import { dataProvider } from '../../services/DataProvider';

export const HouseGarden: React.FC = (): JSX.Element => {
    const { sectionTitle, items } = dataProvider.getSectionData('houseGarden');

    return <section className="house-garden container"><SectionLayout sectionTitle={ sectionTitle } itemsList={ items } /></section>;
};
