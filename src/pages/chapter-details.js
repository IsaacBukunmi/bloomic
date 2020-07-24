import React from 'react';
import Layout from '../components/Layout';
import ChapterDetailsHero from '../components/ChapterDetailsHero/ChapterDetailsHero'
import ChapterDetailsBody from '../components/ChapterDetailsBody/ChapterDetailsBody';

const ChapterDetailsPage = () => {
    return(
        <Layout>
            <ChapterDetailsHero />
            <ChapterDetailsBody />
        </Layout>
    )
}

export default ChapterDetailsPage;