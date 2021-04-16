import React, { Component, ReactNode } from 'react';
import { FiSearch } from 'react-icons/all';

interface INavbarState {
    isOpen: boolean;
}

export class Navbar extends Component<{}, INavbarState> {
    state: INavbarState = { isOpen: false };

    public render(): ReactNode {
        // const { isOpen } = this.state;

        return (
            <nav className="main-navbar">


                <nav className="main-navbar__primary-nav">
                    <div className="container">
                        <div className="logo"><span>GrabOne</span></div>

                        <ul className="main-navbar__region-links">
                            {/*<Dropdown header={ { icon: <HiOutlineLocationMarker />, text: 'Auckland' } } />*/ }
                        </ul>
                    </div>
                </nav>

                <nav className="main-navbar__secondary-nav">
                    <div className="container">
                        <ul className="main-navbar__links-container">
                            <li>browse categories</li>
                            <li>what's new</li>
                            <li>trending</li>
                            <li>for you</li>
                            {/*<Dropdown header={ { icon: <BsPerson /> } } />*/ }
                        </ul>

                        <div className="main-navbar__search-box">
                            <FiSearch size="1.5rem" />
                            <input type="text" placeholder="search GrabOne" />
                        </div>
                    </div>
                </nav>


                {/*<StrapNavbar expand="md">*/ }
                {/*    <NavbarBrand href="/">GrabOne</NavbarBrand>*/ }
                {/*    <NavbarToggle onClick={ (): void => this.setState({ isOpen: false }) } />*/ }
                {/*    <Collapse isOpen={ isOpen } navbar>*/ }
                {/*        <Nav className="ml-auto" navbar>*/ }
                {/*            <UncontrolledDropdown nav inNavbar>*/ }
                {/*                <DropdownToggle nav caret>*/ }
                {/*                    <HiOutlineLocationMarker /> Auckland*/ }
                {/*                </DropdownToggle>*/ }
                {/*                <DropdownMenu right>*/ }
                {/*                    <DropdownItem>Option 1</DropdownItem>*/ }
                {/*                    <DropdownItem divider />*/ }
                {/*                    <DropdownItem>Option 2</DropdownItem>*/ }
                {/*                </DropdownMenu>*/ }
                {/*            </UncontrolledDropdown>*/ }
                {/*        </Nav>*/ }
                {/*    </Collapse>*/ }
                {/*</StrapNavbar>*/ }
            </nav>
        );
    }
}
