import React from 'react';
import Layout from '../components/Layout';
import ChapterDetailsHero from '../components/ChapterDetailsHero/ChapterDetailsHero'
import ChapterDetailsBody from '../components/ChapterDetailsBody/ChapterDetailsBody';

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


    return(
        <Layout>
            <ChapterDetailsHero chapterNumber={props.data.contentfulSeriesChapter.chapterNumber} />
            <ChapterDetailsBody chapterImages={props.data.contentfulSeriesChapter.chapterImages} chapterTitle={props.data.contentfulSeriesChapter.chapterTitle}/>
        </Layout>
    )
}

export default ChapterDetails;