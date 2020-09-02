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
                <div className={styles.imageGalleryContainer}>
                    <ul >
                        {
                            data.allContentfulDigitalArts.edges.slice(0, 6).map((edge) => (
                                <li>
                                    <span>{edge.node.artsTitle}</span>
                                    <img src={edge.node.artsImage.file.url} alt="" />
                                </li>
                            ))
                        }
                        {/* <li>
                            <span>New York</span>
                            <img src='http://i1276.photobucket.com/albums/y465/gaeowyn/new_york_city_2-wallpaper-960x540_zpsce336d7f.jpg' /></li>
                        
                        <li>
                            <span>London</span>
                            <img src='http://i1276.photobucket.com/albums/y465/gaeowyn/london_in_black_and_white-wallpaper-960x540_zpsa7fa9d45.jpg' /></li>
                        
                        <li>
                            <span>Poznań</span>
                            <img src='http://i1276.photobucket.com/albums/y465/gaeowyn/poznan_poland-wallpaper-960x540_zps6a5470ed.jpg' /></li>
                        
                        <li>
                            <span>Chicago</span>
                            <img src='http://i1276.photobucket.com/albums/y465/gaeowyn/cityscape_skyline_chicago_sculpture-wallpaper-960x540_zps19c2d09d.jpg' />
                        </li>
                        
                        <li>
                            <span>Golden Gate</span>
                            <img src='http://i1276.photobucket.com/albums/y465/gaeowyn/golden_gate_in_fog-wallpaper-960x540_zps1f6fc1af.jpg' />
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
    
}

export default HomeArtsGallery;