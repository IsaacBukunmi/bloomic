import React from 'react';
import Layout from '../components/Layout';
import AboutUsHero from '../components/AboutUsHero/AboutUsHero';
import AboutUsBody from '../components/AboutUsBody/AboutUsBody';


const AboutUsPage = () => {
    return(
        <Layout>
            <AboutUsHero />
            <AboutUsBody />
        </Layout>
    )
}

export default AboutUsPage;