import React from 'react';
import Banner from '../Components/Banner';
import TopBiillerCompany from '../Components/TopBillerCompany';
import FaqSection from '../Components/FaqSection';
import TopPaymentMethod from '../Components/TopPaymentMethod';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <TopBiillerCompany></TopBiillerCompany>
            </section>
            <section>
                <FaqSection></FaqSection>
            </section>
            <section>
                <TopPaymentMethod></TopPaymentMethod>
            </section>
        </div>
    );
};

export default Home;