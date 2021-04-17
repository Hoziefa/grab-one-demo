import React from 'react';
import { Item } from './Item';
import { ISectionDataItem } from '../../types';

interface IItemListProps {
    itemsList: Array<ISectionDataItem>
}

export const ItemsList: React.FC<IItemListProps> = ({ itemsList }): JSX.Element => {
    return <ul className="items-list">{ itemsList.map((item): JSX.Element => <Item key={ item.id } { ...item } />) }</ul>;
};
