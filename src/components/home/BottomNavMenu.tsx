import React from 'react';
import { AiOutlineHome, BsGrid, BsPerson, FiSearch, FiShoppingCart } from 'react-icons/all';

export const BottomNavMenu: React.FC = (): JSX.Element => (
    <ul className="bottom-nav-links">
        <li className="clickable"><AiOutlineHome /><span>home</span></li>
        <li className="clickable"><FiSearch /><span>search</span></li>
        <li className="clickable"><BsGrid /><span>categories</span></li>
        <li className="clickable"><FiShoppingCart /><span>cart</span></li>
        <li className="clickable"><BsPerson /><span>account</span></li>
    </ul>
);
