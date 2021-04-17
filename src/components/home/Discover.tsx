import React from 'react';
import { ItemsList } from '../reusable/ItemsList';
import { dataProvider } from '../../services/DataProvider';

export const Discover: React.FC = (): JSX.Element => {
    const { discoverMenuItems, items } = dataProvider.getSectionData('discover');

    return (
        <section className="discover-section">
            <div className="container section-container">
                <header className="discover-section__header-image"><img src="https://mediacdn.grabone.co.nz/asset/aOqUZHjneM" alt="gifts" /></header>

                <div className="discover-section__search-content">
                    <aside>
                        <header><span>discover</span></header>

                        <ul className="discover-section__discovery-menu">
                            { discoverMenuItems.map(({ name, amount }): JSX.Element => <li key={ name }>{ name } <small className="discover-section__item-amount">{ amount }</small></li>) }
                        </ul>
                    </aside>

                    <div className="discover-section__items-container"><ItemsList itemsList={ items } /></div>
                </div>
            </div>
        </section>
    );
};
