import React from 'react';
import { AiFillInstagram, FaFacebookF, FaYoutube, HiOutlineDeviceMobile, HiOutlineMail, IoLogoTwitter } from 'react-icons/all';

export const AppFooter: React.FC = (): JSX.Element => {
    return (
        <footer className="app-footer">
            <div className="app-footer__info container">
                <div className="app-footer__social-links">
                    <header><h4>follow us on</h4></header>
                    <div className="social-links">
                        <FaFacebookF />
                        <IoLogoTwitter />
                        <AiFillInstagram />
                        <FaYoutube />
                    </div>
                    <span>Get app exclusive deals</span>
                    <button aria-label="download our app" className="app-footer__btn"><HiOutlineDeviceMobile size="1.5rem" /> download our app</button>
                </div>
                <div className="app-footer__grab-one">
                    <header><h4>grabOne</h4></header>
                    <ul>
                        <li>GrabOne Guarantee</li>
                        <li>contact us</li>
                        <li>about us</li>
                        <li>terms & returns</li>
                        <li>blog</li>
                        <li>gift cards</li>
                    </ul>
                </div>
                <div className="app-footer__account">
                    <header><h4>my account</h4></header>
                    <ul>
                        <li>my account</li>
                        <li>my cart</li>
                        <li>my coupons</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="app-footer__merchants">
                    <header><h4>merchants</h4></header>
                    <ul>
                        <li>run a deal</li>
                        <li>merchants center</li>
                    </ul>
                </div>
                <div className="app-footer__subscribe">
                    <header><h4>newsletter signup</h4></header>
                    <p>Sign up for our daily emails and we'll send you all the best deals, tailored for you.</p>
                    <div className="app-footer__subscribe-field">
                        <HiOutlineMail size="1.65rem" />
                        <input type="text" placeholder="enter email address" />
                        <button className="app-footer__subscribe-btn">subscribe</button>
                    </div>
                </div>
            </div>

            <div className="app-footer__copyright container">
                <span className="clickable">privacy policy</span>
                <span>&copy; { new Date().getFullYear() } GrabOne Limited</span>
                <span className="clickable"><img src="https://new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_long.d08e62aa63ff.png" alt="powered by" /></span>
            </div>
        </footer>
    );
};
