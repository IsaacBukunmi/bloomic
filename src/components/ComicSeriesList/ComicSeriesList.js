import React from 'react';
import { Link } from 'gatsby';
import styles from './comicserieslist.module.scss';
import ComicSeriesItem from '../ComicSeriesItem/ComicSeriesItem';
import PageListHeading from '../PageListHeading/PageListHeading'

const ComicSeriesList = () => {
    
    return(
        <div className={styles.seriesListContainerFluid}>
            <div className={styles.listHeadingContainer}>
                <PageListHeading pageName="Comic Series" />
            </div>
            <div className={styles.listContainer}>
               <ComicSeriesItem />
            </div>
        </div>
    )
}

export default ComicSeriesList