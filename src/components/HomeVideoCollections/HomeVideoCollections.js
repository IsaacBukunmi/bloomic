import React from 'react';
import { Link } from 'gatsby';
import ReactPlayer from 'react-player';
import asnoolAnimation from '../../videos/asnool.mp4' 

import styles from './homevideocollections.module.scss';

const HomeVideoCollections = () => {
    const videoSettings = {
        controls:true,
        pip:true,
        width:'100%',
        height:'400px'
 ,   }
    return(
        <div className={styles.homeVideoFluid}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.headerContainer}>
                        <div className={styles.borderTop}></div>
                        <h1>Animation Videos</h1>
                    </div>
                </div>
                <div className={styles.sliderContainer}>
                    <div className={styles.videoItem}>
                        <ReactPlayer {...videoSettings} url={asnoolAnimation} />
                    </div>
                    <div className={styles.videoItem}>
                        <ReactPlayer {...videoSettings} url={asnoolAnimation} />
                    </div>
                    <div className={styles.videoItem}>
                        <ReactPlayer {...videoSettings} url={asnoolAnimation} />
                    </div>
                </div>
                <div className={styles.contact}>
                    <p>Would you like to speak to us, work with us or get your works featured on our platform, then contact us <Link to="/">here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default HomeVideoCollections;