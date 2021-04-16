import { Component, ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Discover } from './Discover';
import { Enroll } from './Enroll';
import { Deals } from './Deals';
import { Collections } from './Collections';
import { AppFooter } from './AppFooter';

export class Home extends Component {
    public render(): ReactNode {
        return <div className="home-page">
            <Navbar />
            <Discover />
            <Enroll />
            <Deals />
            <Collections />
            <AppFooter />
        </div>;
    }
}
