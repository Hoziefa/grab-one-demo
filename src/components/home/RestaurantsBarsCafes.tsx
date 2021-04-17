import React from 'react';
import { SectionLayout } from '../reusable/SectionLayout';
import { dataProvider } from '../../services/DataProvider';

export const RestaurantsBarsCafes: React.FC = (): JSX.Element => {
    const { sectionTitle, items } = dataProvider.getSectionData('restaurantsBarsCafes');

    return <section className="restaurants-bars-cafes container"><SectionLayout sectionTitle={ sectionTitle } itemsList={ items } /></section>;
};
