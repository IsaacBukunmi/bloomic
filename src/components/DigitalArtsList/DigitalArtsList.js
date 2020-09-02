import React, { useState, useCallback } from 'react';
import { Link, graphql, useStaticQuery, } from 'gatsby';
import './mansory-gallery.css'

import styles from './digitalartslist.module.scss';
import PageListHeading from '../PageListHeading/PageListHeading';
import DigitalArtsItem from '../DigitalArtsItem/DigitalArtsItem';



const DigitalArtsList = () => {

    const data = useStaticQuery(graphql`
    query{
        allContentfulDigitalArts{
          edges{
            node{
              artsTitle
              artsAuthor
              artsImage{
                file{
                  url
                }
              }
              tags
              datePublished
              contentful_id
            }
          }
        }
      }
    `)
  
    return(
        <div className={styles.artListContainerFluid}>
            <div className={styles.listHeadingContainer}>
                <PageListHeading pageName="Digital Arts"/>
            </div>
            <div className={styles.listContainer}>
              { 
                  data.allContentfulDigitalArts.edges.map((edge) => (
                      <DigitalArtsItem key={edge.node.contentful_id} artsTitle={edge.node.artsTitle} artsAuthor={edge.node.artsAuthor} imageURL={edge.node.artsImage.file.url}/>
                  ))
                }
            </div>
        </div>
    )
}

export default DigitalArtsList