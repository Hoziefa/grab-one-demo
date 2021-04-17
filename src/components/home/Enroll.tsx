import React from 'react';
import { HiOutlineMail } from 'react-icons/all';

export const Enroll: React.FC = (): JSX.Element => (
    <section className="enroll container section-container">
        <div className="enroll__wrapper">
            <p className="enroll__description">Get the best deals delivered direct to your inbox each day</p>
            <div className="enroll__field">
                <HiOutlineMail size="1.65rem" />
                <input type="text" placeholder="enter email address" />
                <button className="enroll__btn">subscribe</button>
            </div>
        </div>
    </section>
);
