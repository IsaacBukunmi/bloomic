import React from 'react';
import { DiscussionEmbed } from "disqus-react"
import Layout from '../components/Layout';
import ChapterDetailsHero from '../components/ChapterDetailsHero/ChapterDetailsHero'
import ChapterDetailsBody from '../components/ChapterDetailsBody/ChapterDetailsBody';
import styles from '../styles/templates-styles.module.scss';
import Head from '../components/head';

export const data = graphql`
query($slug:String){
    contentfulSeriesChapter(chapterSlug: { eq: $slug }){
        chapterTitle
        chapterNumber
        chapterSlug
        dateReleased(formatString:"MMMM Do, YYYY")
        chapterImages{
            file{
                url
            }
        }
        comic_series{
            seriesTitle
        }
    }
  }
    `



const ChapterDetails = (props) => {

    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier:props.data.contentfulSeriesChapter.chapterSlug},
    }

    return(
        <Layout>
            <Head title={props.data.contentfulSeriesChapter.chapterTitle}/>
            <ChapterDetailsHero chapterNumber={props.data.contentfulSeriesChapter.chapterNumber} />
            <ChapterDetailsBody chapterImages={props.data.contentfulSeriesChapter.chapterImages} chapterTitle={props.data.contentfulSeriesChapter.chapterTitle}/>
            <div className={styles.comment_container}>
                <DiscussionEmbed {...disqusConfig} />
            </div>
        </Layout>
    )
}

export default ChapterDetails;