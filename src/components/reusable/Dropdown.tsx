import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/all';

interface IDropdownProps {
    header: { icon?: JSX.Element; text: string };
    dropdownList: Array<{ id: string; title: string; children(): JSX.Element } | string>
    hasTextBubble?: boolean;
    hasDepth?: boolean;
    classAttr?: string;
    toggleBackdrop?(isOpen: boolean): void;
}

export const Dropdown: React.FC<IDropdownProps> = ({ header, dropdownList, hasTextBubble = false, hasDepth = false, toggleBackdrop, classAttr = '' }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(typeof dropdownList[0] === 'string' ? dropdownList[0] : dropdownList[0].id);
    const dropdown = useRef<HTMLDivElement>(null);

    const displayDropdown = (): void => {
        setIsOpen(!isOpen);
        toggleBackdrop?.(!isOpen);
    };

    const onDropdownBlur = ({ target }: Event): void => {
        if (dropdown.current?.contains(target as Node)) return;

        setIsOpen(false);
        toggleBackdrop?.(false);
    };

    useEffect((): () => void => {
        document.addEventListener('click', onDropdownBlur);

        return (): void => {
            document.removeEventListener('click', onDropdownBlur);
        };
    }, []);

    const renderDropdownItems = (): JSX.Element[] => (dropdownList.map((dropdownItem): JSX.Element => {
        return typeof dropdownItem === 'string'
            ? <li key={ dropdownItem } className={ `dropdown__item ${ selectedItem === dropdownItem ? 'active' : '' }` } onClick={ (): void => setSelectedItem(dropdownItem) }>
                <span className="dropdown__item-text">{ dropdownItem }</span>
            </li>
            : <li key={ dropdownItem.id } className={ `dropdown__item ${ selectedItem === dropdownItem.id ? 'active' : '' }` } onClick={ (): void => setSelectedItem(dropdownItem.id) }>
                <div className="left-item">{ dropdownItem.title } <IoIosArrowForward /></div>
                { selectedItem === dropdownItem.id && <div className="right-item">{ dropdownItem.children() }</div> }
            </li>;
    }));

    return (
        <div className={ `dropdown ${ classAttr } ${ isOpen ? 'open' : '' }` } ref={ dropdown }>
            <button className={ `dropdown__toggle-btn ${ hasDepth && isOpen ? 'active' : '' }` } onClick={ displayDropdown }>
                { header.icon }
                <span>{ header.text }</span>
                <IoIosArrowDown />
            </button>

            <ul className={ `dropdown__dropdown-list fancy-scrollbar ${ hasTextBubble ? 'has-text-bubble' : '' } ${ hasDepth ? 'has-depth' : '' }` }>
                { renderDropdownItems() }

                { hasDepth && <div className="browse-all txt-transform"><span>browse all categories</span></div> }
            </ul>
        </div>
    );
};
