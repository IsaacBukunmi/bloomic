import React from 'react';
import Layout from '../components/Layout';
import ComicSeriesHero from '../components/ComicSeriesHero/ComicSeriesHero';
import ComicSeriesList from '../components/ComicSeriesList/ComicSeriesList';
import Head from '../components/head';


const ComicSeriesPage = () => {
    return(
        <Layout>
            <Head title="Comic Series"/>
            <ComicSeriesHero />
            <ComicSeriesList />
        </Layout>
    )
}

export default ComicSeriesPage;