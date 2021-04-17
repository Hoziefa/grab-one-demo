import React, { Component, ReactNode } from 'react';
import { BsPerson, FiHeart, FiSearch, FiShoppingCart, HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/all';
import { Dropdown } from '../reusable/Dropdown';
import { idGenerator } from '../../utils/misc';
import { Backdrop } from '../reusable/Backdrop';

interface INavbarState {
    isOpen: boolean;
}

export class Navbar extends Component<{}, INavbarState> {
    public readonly state: Readonly<INavbarState> = { isOpen: false };

    private readonly locationDropdownList = ['Auckland', 'Waikato', 'Wellington', 'Northland', 'Manawatu - Wanganui', 'Tauranga', 'Rotorua - Taupo', 'Hawkes Bay', 'Christchurch', 'Taranaki'];

    private readonly accountDropdownList = ['my account', 'gifts', 'profile', 'my subscriptions', 'my purchases', 'login'];

    private readonly browseCategoriesDropdownList = [
        {
            id: idGenerator('dropdown-item'),
            title: 'activities, events & outdoors',
            children: (): JSX.Element => {
                return (
                    <div>
                        <h3 className="title">activities, events & outdoors</h3>
                        <ul className="list">
                            <li>
                                Adventure & Outdoors
                                <span className="preview">Bungy Jumping, Camping, Horse Riding, Hunting & Fishing, Kayaking</span>
                            </li>
                            <li>
                                Events, Shows & Tickets
                                <span className="preview">Circus, Comedy, Concerts, Expos & Conventions, Festivals</span>
                            </li>
                            <li>
                                Fun & Leisure
                                <span className="preview">Amusement Parks, Bowling, Bus & Boat Tours, Dolphin & Whale Watching, Food Tours</span>
                            </li>
                            <li>
                                Kids Activities
                                <span className="preview">Kid's Camps, Kid's Classes, Kid's Shows, Play Centres, Trampoline</span>
                            </li>
                        </ul>
                    </div>
                );
            },
        },
        {
            id: idGenerator('dropdown-item'),
            title: 'Automotive',
            children: (): JSX.Element => {
                return (
                    <div>
                        <h3 className="title">Automotive</h3>
                        <ul className="list">
                            <li>
                                Automotive Parts & Accessories
                                <span className="preview">Automotive Accessories, Car Parts, Motorbike Parts, Tyres</span>
                            </li>
                            <li>
                                Car Electronics
                                <span className="preview">Car Alarms, Car Amplifiers, Car GPS, Car Handsfree, Car Speakers</span>
                            </li>
                            <li>
                                Wash, Repairs & Maintenance
                                <span className="preview">Automotive Servicing, Car Wash & Grooming, Panel & Paint, Warrant of Fitness (WOF), Wheel Alignment</span>
                            </li>
                        </ul>
                    </div>
                );
            },
        },
        {
            id: idGenerator('dropdown-item'),
            title: 'Baby, Kids & Toys',
            children: (): JSX.Element => {
                return (
                    <div>
                        <h3 className="title">Baby, Kids & Toys</h3>
                        <ul className="list">
                            <li>
                                Baby Essentials
                                <span className="preview">Baby Feeding, Baby Gates, Baby Health & Safety, Baby Monitors, Bathing & Changing</span>
                            </li>
                            <li>
                                Baby Gear
                                <span className="preview">Baby Travel Accessories, Car Seats & Strollers, Carriers & Slings, High Chairs & Boosters, Jumpers & Bouncers</span>
                            </li>
                            <li>
                                Clothing & Accessories - Boys
                                <span className="preview">Boys Accessories, Boys Bags, Boys Bodysuits, Boys Growsuits, Boys Hats & Caps</span>
                            </li>
                            <li>
                                Clothing & Accessories - Girls
                                <span className="preview">Girls Accessories, Girls Bags, Girls Bodysuits, Girls Dresses, Girls Growsuits</span>
                            </li>
                            <li>
                                Nursery & Toddlers Room
                                <span className="preview">Baby Furniture, Nursery & Toddlers Bedding, Nursery & Toddlers Decor, Toddler Furniture</span>
                            </li>
                            <li>
                                Toys
                                <span className="preview">Action Figures & Accessories, Bikes, Scooters & Ride-Ons, Building Blocks & LEGO, Dolls & Accessories, Learning & Development</span>
                            </li>
                        </ul>
                    </div>
                );
            },
        },
        {
            id: idGenerator('dropdown-item'),
            title: 'Beauty, Massage & Spa',
            children: (): JSX.Element => {
                return (
                    <div>
                        <h3 className="title">Beauty, Massage & Spa</h3>
                        <ul className="list">
                            <li>
                                Adventure & Outdoors
                                <span className="preview">Bungy Jumping, Camping, Horse Riding, Hunting & Fishing, Kayaking</span>
                            </li>
                            <li>
                                Events, Shows & Tickets
                                <span className="preview">Circus, Comedy, Concerts, Expos & Conventions, Festivals</span>
                            </li>
                            <li>
                                Fun & Leisure
                                <span className="preview">Amusement Parks, Bowling, Bus & Boat Tours, Dolphin & Whale Watching, Food Tours</span>
                            </li>
                            <li>
                                Kids Activities
                                <span className="preview">Kid's Camps, Kid's Classes, Kid's Shows, Play Centres, Trampoline</span>
                            </li>
                        </ul>
                    </div>
                );
            },
        },
        {
            id: idGenerator('dropdown-item'),
            title: 'Books & Magazines',
            children: (): JSX.Element => {
                return (
                    <div>
                        <h3 className="title">Books & Magazines</h3>
                        <ul className="list">
                            <li>
                                Adventure & Outdoors
                                <span className="preview">Bungy Jumping, Camping, Horse Riding, Hunting & Fishing, Kayaking</span>
                            </li>
                            <li>
                                Events, Shows & Tickets
                                <span className="preview">Circus, Comedy, Concerts, Expos & Conventions, Festivals</span>
                            </li>
                            <li>
                                Fun & Leisure
                                <span className="preview">Amusement Parks, Bowling, Bus & Boat Tours, Dolphin & Whale Watching, Food Tours</span>
                            </li>
                            <li>
                                Kids Activities
                                <span className="preview">Kid's Camps, Kid's Classes, Kid's Shows, Play Centres, Trampoline</span>
                            </li>
                        </ul>
                    </div>
                );
            },
        },
        {
            id: idGenerator('dropdown-item'),
            title: 'Clothing & Fashion - Men\'s',
            children: (): JSX.Element => {
                return (
                    <div>
                        <h3 className="title">Clothing & Fashion - Men's</h3>
                        <ul className="list">
                            <li>
                                Adventure & Outdoors
                                <span className="preview">Bungy Jumping, Camping, Horse Riding, Hunting & Fishing, Kayaking</span>
                            </li>
                            <li>
                                Events, Shows & Tickets
                                <span className="preview">Circus, Comedy, Concerts, Expos & Conventions, Festivals</span>
                            </li>
                            <li>
                                Fun & Leisure
                                <span className="preview">Amusement Parks, Bowling, Bus & Boat Tours, Dolphin & Whale Watching, Food Tours</span>
                            </li>
                            <li>
                                Kids Activities
                                <span className="preview">Kid's Camps, Kid's Classes, Kid's Shows, Play Centres, Trampoline</span>
                            </li>
                        </ul>
                    </div>
                );
            },
        },
        {
            id: idGenerator('dropdown-item'),
            title: 'Clothing & Fashion - Women\'s',
            children: (): JSX.Element => {
                return (
                    <div>
                        <h3 className="title">Clothing & Fashion - Women's</h3>
                        <ul className="list">
                            <li>
                                Adventure & Outdoors
                                <span className="preview">Bungy Jumping, Camping, Horse Riding, Hunting & Fishing, Kayaking</span>
                            </li>
                            <li>
                                Events, Shows & Tickets
                                <span className="preview">Circus, Comedy, Concerts, Expos & Conventions, Festivals</span>
                            </li>
                            <li>
                                Fun & Leisure
                                <span className="preview">Amusement Parks, Bowling, Bus & Boat Tours, Dolphin & Whale Watching, Food Tours</span>
                            </li>
                            <li>
                                Kids Activities
                                <span className="preview">Kid's Camps, Kid's Classes, Kid's Shows, Play Centres, Trampoline</span>
                            </li>
                        </ul>
                    </div>
                );
            },
        },
        {
            id: idGenerator('dropdown-item'),
            title: 'Electronics & Computers',
            children: (): JSX.Element => {
                return (
                    <div>
                        <h3 className="title">Electronics & Computers</h3>
                        <ul className="list">
                            <li>
                                Adventure & Outdoors
                                <span className="preview">Bungy Jumping, Camping, Horse Riding, Hunting & Fishing, Kayaking</span>
                            </li>
                            <li>
                                Events, Shows & Tickets
                                <span className="preview">Circus, Comedy, Concerts, Expos & Conventions, Festivals</span>
                            </li>
                            <li>
                                Fun & Leisure
                                <span className="preview">Amusement Parks, Bowling, Bus & Boat Tours, Dolphin & Whale Watching, Food Tours</span>
                            </li>
                            <li>
                                Kids Activities
                                <span className="preview">Kid's Camps, Kid's Classes, Kid's Shows, Play Centres, Trampoline</span>
                            </li>
                        </ul>
                    </div>
                );
            },
        },
        {
            id: idGenerator('dropdown-item'),
            title: 'Fitness & Sports',
            children: (): JSX.Element => {
                return (
                    <div>
                        <h3 className="title">Fitness & Sports</h3>
                        <ul className="list">
                            <li>
                                Adventure & Outdoors
                                <span className="preview">Bungy Jumping, Camping, Horse Riding, Hunting & Fishing, Kayaking</span>
                            </li>
                            <li>
                                Events, Shows & Tickets
                                <span className="preview">Circus, Comedy, Concerts, Expos & Conventions, Festivals</span>
                            </li>
                            <li>
                                Fun & Leisure
                                <span className="preview">Amusement Parks, Bowling, Bus & Boat Tours, Dolphin & Whale Watching, Food Tours</span>
                            </li>
                            <li>
                                Kids Activities
                                <span className="preview">Kid's Camps, Kid's Classes, Kid's Shows, Play Centres, Trampoline</span>
                            </li>
                        </ul>
                    </div>
                );
            },
        },
        {
            id: idGenerator('dropdown-item'),
            title: 'Grocery & Food',
            children: (): JSX.Element => {
                return (
                    <div>
                        <h3 className="title">Grocery & Food</h3>
                        <ul className="list">
                            <li>
                                First Aid
                                <span className="preview">Bandages, Disinfectant, First Aid Kit, Gauze</span>
                            </li>
                            <li>
                                Household
                                <span className="preview">Air Fresheners, Cleaning Supplies, Insect Repellent, Lighting & Batteries</span>
                            </li>
                            <li>
                                Personal Care
                                <span className="preview">Deodorant, Sanitary Products, Sunscreen, Tissues & Cotton Products</span>
                            </li>
                            <li>
                                Retail Food & Drink
                                <span className="preview">Baking, Beverages, Breakfast & Cereal, Butchery Meats, Canned Goods & Soups</span>
                            </li>
                        </ul>
                    </div>
                );
            },
        },
        {
            id: idGenerator('dropdown-item'),
            title: 'Health, Nutrition & Dental',
            children: (): JSX.Element => {
                return (
                    <div>
                        <h3 className="title">Health, Nutrition & Dental</h3>
                        <ul className="list">
                            <li>
                                First Aid
                                <span className="preview">Bandages, Disinfectant, First Aid Kit, Gauze</span>
                            </li>
                            <li>
                                Household
                                <span className="preview">Air Fresheners, Cleaning Supplies, Insect Repellent, Lighting & Batteries</span>
                            </li>
                            <li>
                                Personal Care
                                <span className="preview">Deodorant, Sanitary Products, Sunscreen, Tissues & Cotton Products</span>
                            </li>
                            <li>
                                Retail Food & Drink
                                <span className="preview">Baking, Beverages, Breakfast & Cereal, Butchery Meats, Canned Goods & Soups</span>
                            </li>
                        </ul>
                    </div>
                );
            },
        },
        {
            id: idGenerator('dropdown-item'),
            title: 'Holidays, Hotels & Travel',
            children: (): JSX.Element => {
                return (
                    <div>
                        <h3 className="title">Holidays, Hotels & Travel</h3>
                        <ul className="list">
                            <li>
                                First Aid
                                <span className="preview">Bandages, Disinfectant, First Aid Kit, Gauze</span>
                            </li>
                            <li>
                                Household
                                <span className="preview">Air Fresheners, Cleaning Supplies, Insect Repellent, Lighting & Batteries</span>
                            </li>
                            <li>
                                Personal Care
                                <span className="preview">Deodorant, Sanitary Products, Sunscreen, Tissues & Cotton Products</span>
                            </li>
                            <li>
                                Retail Food & Drink
                                <span className="preview">Baking, Beverages, Breakfast & Cereal, Butchery Meats, Canned Goods & Soups</span>
                            </li>
                        </ul>
                    </div>
                );
            },
        },
    ];

    public render(): ReactNode {
        const { isOpen } = this.state;

        return (
            <nav className="main-navbar">
                <nav className="main-navbar__primary-nav">
                    <div className="container">
                        <div className="logo"><span>GrabOne</span></div>

                        <div className="main-navbar__wrapper">
                            <ul className="main-navbar__region-links">
                                <li className="clickable txt-transform">
                                    <Dropdown
                                        hasTextBubble
                                        header={ { icon: <HiOutlineLocationMarker size="1.65rem" />, text: 'auckland' } }
                                        dropdownList={ this.locationDropdownList }
                                        classAttr="region-links"
                                    />
                                </li>
                            </ul>

                            <ul className="main-navbar__account-links">
                                <li><FiHeart size="1.65rem" /></li>

                                <li><FiShoppingCart size="1.65rem" /></li>

                                <li>
                                    <Dropdown
                                        hasTextBubble
                                        header={ { icon: <BsPerson size="1.65rem" />, text: '' } }
                                        dropdownList={ this.accountDropdownList }
                                    />
                                </li>

                                <li className="main-navbar__subscribe-link"><HiOutlineMail size="1.65rem" /> <span>subscribe</span></li>

                                <li className="powered-by-logo"><img src="https://new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_short.22da364cd455.png" alt="powered by logo" /></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <nav className="main-navbar__secondary-nav">
                    <div className="container">
                        <ul className="main-navbar__links-container">
                            <li className="main-navbar__links-item">
                                <Dropdown
                                    hasDepth
                                    header={ { text: 'browse categories' } }
                                    dropdownList={ this.browseCategoriesDropdownList }
                                    toggleBackdrop={ this.toggleBackdrop }
                                />
                            </li>

                            <li className="main-navbar__links-item">what's new</li>

                            <li className="main-navbar__links-item">trending</li>

                            <li className="main-navbar__links-item">for you</li>
                        </ul>

                        <div className="main-navbar__search-box">
                            <FiSearch size="1.5rem" />
                            <input type="text" placeholder="search GrabOne" />
                        </div>
                    </div>
                </nav>

                <Backdrop isActive={ isOpen } />
            </nav>
        );
    }

    private toggleBackdrop = (isOpen: boolean): void => this.setState({ isOpen });
}
