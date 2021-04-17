import React from 'react';
import { SectionLayout } from '../reusable/SectionLayout';
import { dataProvider } from '../../services/DataProvider';

export const ActivitiesEvents: React.FC = (): JSX.Element => {
    const { sectionTitle, items } = dataProvider.getSectionData('activitiesEvents');

    return <section className="activities-events container section-container"><SectionLayout sectionTitle={ sectionTitle } itemsList={ items } /></section>;
};
