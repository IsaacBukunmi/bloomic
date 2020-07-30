import React, {Fragment} from 'react';
import {navigate, graphql, useStaticQuery, Link} from 'gatsby';

import styles from './comicseriesitem.module.scss';
import SeriesImage from '../../images/hero-bg-ex.jpg';

const ComicSeriesItem = () => {

        const data = useStaticQuery(graphql`
        query{
            allContentfulComicSeries{
              edges{
                node{
                  seriesTitle
                  datePublished
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
                    chapterImages{
                      file{
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        `)

        return(
            <Fragment>
                {
                    data.allContentfulComicSeries.edges.map((edge) => (
                        <Link className={styles.listItemContainer} to={`/comic-series/${edge.node.slug}`}>
                            <div className={styles.listItemContent} >
                                <div className={styles.seriesImage}>
                                    <img src={edge.node.seriesImage.file.url} alt={edge.node.seriesImage.title}/>
                                </div>  
                                <div className={styles.seriesTitle}>
                                    {edge.node.seriesTitle}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </Fragment>
        )
}


export default ComicSeriesItem;