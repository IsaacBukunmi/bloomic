import React from 'react';
import { Link, graphql, useStaticQuery, } from 'gatsby';

import styles from './homeartsgallery.module.scss';


const  HomeArtsGallery = () => {

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
        <div className={styles.galleryArtsFluid}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.headerContainer}>
                        <div className={styles.borderTop}></div>
                        <h1>Digital Arts</h1>
                    </div>
                    <div>
                        <p><Link to="/digital-arts">View All <span>Digital Arts</span></Link></p>
                    </div>
                </div>
                {/* <div className={styles.imageGalleryContainer}>
                    <ul >
                        {
                            data.allContentfulDigitalArts.edges.slice(0, 5).map((edge) => (
                                <li>
                                    <span>{edge.node.artsTitle}</span>
                                    <img src={edge.node.artsImage.file.url} alt="" />
                                </li>
                            ))
                        }
                    </ul>
                </div> */}
                <div className={styles.imageGalleryContainer}>
                    <div className={styles.artsContainer}>
                        <div className={styles.artsItem1}> 
                        {
                            data.allContentfulDigitalArts.edges.slice(0, 1).map((edge) => (
                                    <img src={edge.node.artsImage.file.url} alt="" />
                            ))
                        }
                        </div>
                        <div className={styles.artsItem2}>
                            {
                                data.allContentfulDigitalArts.edges.slice(1, 2).map((edge) => (
                                        <img src={edge.node.artsImage.file.url} alt="" />
                                ))
                            }
                        </div>
                        <div className={styles.artsItem3}>
                            {
                                data.allContentfulDigitalArts.edges.slice(2, 3).map((edge) => (
                                        <img src={edge.node.artsImage.file.url} alt="" />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default HomeArtsGallery;