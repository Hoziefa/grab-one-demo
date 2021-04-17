import React from 'react';
import { IoIosArrowForward } from 'react-icons/all';
import { ISectionDataItem } from '../../types';
import { ItemsList } from './ItemsList';

interface ISectionLayoutProps {
    sectionTitle: string;
    itemsList: Array<ISectionDataItem>
}

export const SectionLayout: React.FC<ISectionLayoutProps> = ({ sectionTitle, itemsList }): JSX.Element => {
    return (
        <div className="section-layout">
            <header className="section-layout__header">
                <h2 className="section-layout__title clickable">{ sectionTitle }</h2>
                <button aria-label="view content" className="section-layout__btn">view content <IoIosArrowForward size="1rem" /></button>
            </header>

            <ItemsList itemsList={ itemsList } />
        </div>
    );
};
