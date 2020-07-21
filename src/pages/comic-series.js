import React from 'react';
import Layout from '../components/Layout';
import ComicSeriesHero from '../components/ComicSeriesHero/ComicSeriesHero';
import ComicSeriesList from '../components/ComicSeriesList/ComicSeriesList';


const ComicSeriesPage = () => {
    return(
        <Layout>
            <ComicSeriesHero />
            <ComicSeriesList />
        </Layout>
    )
}

export default ComicSeriesPage;