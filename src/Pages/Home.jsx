import React from 'react';
import Banner from '../Components/Banner';
import TopBiillerCompany from '../Components/TopBillerCompany';
import FaqSection from '../Components/FaqSection';
import TopPaymentMethod from '../Components/TopPaymentMethod';
import WhyChooseUs from '../Components/WhyChosseUs';
import HowItWorks from '../Components/HowItWorks';
import Testimonials from '../Components/CustomerTestimonials';
import OurApp from '../Components/OurApp';

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
            <section>
                <WhyChooseUs></WhyChooseUs>
            </section>
            <section>
                <HowItWorks></HowItWorks>
            </section>
            <section>
                <Testimonials></Testimonials>
            </section>
            <section>
                <OurApp></OurApp>
            </section>
        </div>
    );
};

export default Home;