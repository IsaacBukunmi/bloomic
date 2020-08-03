import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ChapterListHero from '../components/ChapterListHero/ChapterListHero';
import ChapterListInfo from '../components/ChapterListInfo/ChapterListInfo';
import ChapterListings from '../components/ChapterListings/ChapterListings';

export const data = graphql`
    query($slug:String){
        contentfulComicSeries(slug: { eq: $slug }){
            seriesTitle
            datePublished(formatString:"MMMM Do, YYYY")
            status
            slug
            seriesAuthor{
                name
                role
            }
            heroImage{
            file{
                url
            }
            }
            seriesImage{
            file{
                url
            }
            title
            }
            synopsis{
            synopsis
            }
            chapters{
                chapterTitle
                chapterNumber
                chapterSlug
                dateReleased(formatString:"MMMM Do, YYYY")
                chapterImages{
                    file{
                    url
                    }
                    title
                }
            }
        }
    }
    `

const Series = (props) => {
    return(
        <Layout>
            <ChapterListHero 
                seriesTitle={props.data.contentfulComicSeries.seriesTitle} 
                seriesImage={props.data.contentfulComicSeries.heroImage.file.url}/>
            <ChapterListInfo  
                seriesTitle={props.data.contentfulComicSeries.seriesTitle} 
                seriesImage={props.data.contentfulComicSeries.heroImage.file.url} 
                status={props.data.contentfulComicSeries.status} 
                datePublished={props.data.contentfulComicSeries.datePublished} 
                seriesImageTitle={props.data.contentfulComicSeries.seriesImage.title} 
                seriesAuthor={props.data.contentfulComicSeries.seriesAuthor} 
                synopsis={props.data.contentfulComicSeries.synopsis.synopsis}/>
            <ChapterListings seriesSlug={props.data.contentfulComicSeries.slug} chapterList={props.data.contentfulComicSeries.chapters}/>
        </Layout>
    )
}

export default Series