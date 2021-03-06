import React from 'react';
import {Link} from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';


import styles from './chapterlistings.module.scss';

const ChapterListings = (props) => {
  
        return(
            <div className={styles.listingsContainerFluid}>
                <div className={styles.container}>
                    {
                        props.chapterList.map((chapter) => (
                            <Link className={styles.itemContainer} to={`/comic-series/${props.seriesSlug}/${chapter.chapterSlug}`}>
                                <div className={styles.content}>
                                    <div className={styles.chapterInfo}>
                                        <p><span>Chapter {chapter.chapterNumber}: </span> <br className={styles.rwdBreak}/>{chapter.chapterTitle}</p>
                                        <p><span>Date Released: <br className={styles.rwdBreak}/></span>{chapter.dateReleased}</p>
                                    </div>
                                    <div className={styles.chapterInteraction}>
                                        <p><FontAwesomeIcon icon={faHeart} className={styles.heartIcon}/>5.3k</p>
                                        <p><FontAwesomeIcon icon={faEye} className={styles.eyeIcon}/>2.1k</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    
}

export default ChapterListings