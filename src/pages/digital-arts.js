import React from 'react';
import Layout from '../components/Layout';
import DigitalArtsHero from '../components/DigitalArtsHero/DigitalArtsHero';
import DigitalArtsList from '../components/DigitalArtsList/DigitalArtsList';

const DigitalArtsPage = () => {
    return(
        <Layout>
            <DigitalArtsHero />
            <DigitalArtsList />
        </Layout>
    )
}

export default DigitalArtsPage;