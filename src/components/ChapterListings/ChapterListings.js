import React from 'react';
import {navigate} from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';


import styles from './chapterlistings.module.scss';

class ChapterListings extends React.Component {

    chapterDetailsPage() {
        navigate('/chapter-details'); //navigate to chapter details page
    }

    render(){
        return(
            <div className={styles.listingsContainerFluid}>
                <div className={styles.container}>
                    <div className={styles.itemContainer} onClick={() => this.chapterDetailsPage()}>
                        <div className={styles.content}>
                            <div className={styles.chapterInfo}>
                                <p><span>Chapter 1: </span> <br className={styles.rwdBreak}/>The Birth of a Star</p>
                                <p><span>Date Released: <br className={styles.rwdBreak}/></span>31st July, 2020</p>
                            </div>
                            <div className={styles.chapterInteraction}>
                                <p><FontAwesomeIcon icon={faHeart} className={styles.heartIcon}/>5.3k</p>
                                <p><FontAwesomeIcon icon={faEye} className={styles.eyeIcon}/>2.1k</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.itemContainer} onClick={() => this.chapterDetailsPage()}>
                        <div className={styles.content}>
                            <div className={styles.chapterInfo}>
                                <p><span>Chapter 2: </span><br className={styles.rwdBreak}/>Returning from the North</p>
                                <p><span>Date Released: </span><br className={styles.rwdBreak}/>1st August, 2020</p>
                            </div>
                            <div className={styles.chapterInteraction}>
                                <p><FontAwesomeIcon icon={faHeart} className={styles.heartIcon}/>5.3k</p>
                                <p><FontAwesomeIcon icon={faEye} className={styles.eyeIcon}/>2.1k</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.itemContainer} onClick={() => this.chapterDetailsPage()}>
                        <div className={styles.content}>
                            <div className={styles.chapterInfo}>
                                <p><span>Chapter 3: </span><br className={styles.rwdBreak}/>The Last Guide</p>
                                <p><span>Date Released: </span><br className={styles.rwdBreak}/>27th September, 2020</p>
                            </div>
                            <div className={styles.chapterInteraction}>
                                <p><FontAwesomeIcon icon={faHeart} className={styles.heartIcon}/>5.3k</p>
                                <p><FontAwesomeIcon icon={faEye} className={styles.eyeIcon}/>2.1k</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ChapterListings