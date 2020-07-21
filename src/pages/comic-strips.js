import React from 'react';
import Layout from '../components/Layout';
import ComicStripHero from '../components/ComicStripHero/ComicStripHero';
import ComicStripList from '../components/ComicStripList/ComicStripList';

const ComicStripPage = () => {
    return(
        <Layout>
           <ComicStripHero />
           <ComicStripList />
        </Layout>
    )
}

export default ComicStripPage;