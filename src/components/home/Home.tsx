import { Component, ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Discover } from './Discover';
import { Enroll } from './Enroll';
import { Deals } from './Deals';
import { Collections } from './Collections';
import { Escapes } from './Escapes';
import { ActivitiesEvents } from './ActivitiesEvents';
import { Store } from './Store';
import { RestaurantsBarsCafes } from './RestaurantsBarsCafes';
import { BeautyMassageSpa } from './BeautyMassageSpa';
import { HouseGarden } from './HouseGarden';
import { FitnessSports } from './FitnessSports';
import { Automotive } from './Automotive';
import { BottomNavMenu } from './BottomNavMenu';
import { AppFooter } from './AppFooter';

export class Home extends Component {
    public render(): ReactNode {
        return (
            <div className="home-page">
                <Navbar />
                <Discover />
                <Enroll />
                <Deals />
                <Collections />
                <Escapes />
                <ActivitiesEvents />
                <Store />
                <RestaurantsBarsCafes />
                <BeautyMassageSpa />
                <HouseGarden />
                <FitnessSports />
                <Automotive />
                <BottomNavMenu />
                <AppFooter />
            </div>
        );
    }
}
