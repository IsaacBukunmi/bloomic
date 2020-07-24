import React from 'react';
import Layout from '../components/Layout';
import ChapterListHero from '../components/ChapterListHero/ChapterListHero';
import ChapterListInfo from '../components/ChapterListInfo/ChapterListInfo';
import ChapterListings from '../components/ChapterListings/ChapterListings';

const SeriesChapterListPage = () => {
    return(
        <Layout>
           <ChapterListHero />
           <ChapterListInfo />
           <ChapterListings />
        </Layout>
    )
}

export default SeriesChapterListPage;