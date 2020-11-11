import React from 'react';
import Layout from '../components/Layout';
import AboutUsHero from '../components/AboutUsHero/AboutUsHero';
import AboutUsBody from '../components/AboutUsBody/AboutUsBody';
import Head from '../components/head';


const AboutUsPage = () => {
    return(
        <Layout>
            <Head title="About Us"/>
            <AboutUsHero />
            <AboutUsBody />
        </Layout>
    )
}

export default AboutUsPage;