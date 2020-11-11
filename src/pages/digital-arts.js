import React from 'react';
import Layout from '../components/Layout';
import DigitalArtsHero from '../components/DigitalArtsHero/DigitalArtsHero';
import DigitalArtsList from '../components/DigitalArtsList/DigitalArtsList';
import Head from '../components/head';

const DigitalArtsPage = () => {
    return(
        <Layout>
            <Head title="Digital Arts"/>
            <DigitalArtsHero />
            <DigitalArtsList />
        </Layout>
    )
}

export default DigitalArtsPage;