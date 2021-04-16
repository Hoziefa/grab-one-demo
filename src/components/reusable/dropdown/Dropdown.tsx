import React from 'react';
import { IoIosArrowDown } from 'react-icons/all';

interface IDropdownProps {
    header: { icon?: JSX.Element; text?: string };
    toggleDropDown: MouseEvent;
    isOpen: boolean;
    dropdownList: Array<{ hasDepth: boolean }>
}

export const Dropdown: React.FC<IDropdownProps> = ({ header, toggleDropDown, isOpen , dropdownList}): JSX.Element => {
    return (
        <div className="dropdown">
            <button className="dropdown__btn-toggle">
                { header.icon }
                <span>{ header.text }</span>
                <IoIosArrowDown />
            </button>

            <ul className="dropdown__dropdown-list">
                {/*{dropdownList.map(dropdown => dropdown.hasDepth ?  : )}*/}
            </ul>
        </div>
    );
};
