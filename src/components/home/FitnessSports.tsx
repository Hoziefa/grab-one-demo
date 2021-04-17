import React from 'react';
import { SectionLayout } from '../reusable/SectionLayout';
import { dataProvider } from '../../services/DataProvider';

export const FitnessSports: React.FC = (): JSX.Element => {
    const { sectionTitle, items } = dataProvider.getSectionData('fitnessSports');

    return <section className="fitness-sports container"><SectionLayout sectionTitle={ sectionTitle } itemsList={ items } /></section>;
};
