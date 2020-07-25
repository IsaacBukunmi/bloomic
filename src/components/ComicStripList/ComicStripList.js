import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import ComicStripItem from '../ComicStripItem/ComicStripItem';
import styles from './comicstriplist.module.scss';
import PageListHeading from '../PageListHeading/PageListHeading';


const ComicStripList = () => {

    const data = useStaticQuery(graphql`
    query{
        allContentfulComicStrips{
          edges{
            node{
              stripTitle
              stripAuthor
              stripImage{
                file{
                  url
                }
              }
            }
          }
        }
      }
    `)

    
    return(
        <div className={styles.stripListContainerFluid}>
            <div className={styles.listHeadingContainer}>
                <PageListHeading pageName="Comic Strips"/>
            </div>
            <div className={styles.listContainer}>
                {
                    data.allContentfulComicStrips.edges.map((imageItem, index) => (
                       <ComicStripItem 
                       key={index} 
                       imageUrl={imageItem.node.stripImage.file.url} 
                       stripTitle={imageItem.node.stripTitle}
                       stripAuthor={imageItem.node.stripAuthor}/>
                    ))
                }
            </div>
        </div>
        
    )
}

export default ComicStripList