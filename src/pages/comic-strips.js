import React from 'react';
import Layout from '../components/Layout';
import ComicStripHero from '../components/ComicStripHero/ComicStripHero';
import ComicStripList from '../components/ComicStripList/ComicStripList';
import Head from '../components/head';

const ComicStripPage = () => {
    return(
        <Layout>
            <Head title="comic strips"/>
           <ComicStripHero />
           <ComicStripList />
        </Layout>
    )
}

export default ComicStripPage;