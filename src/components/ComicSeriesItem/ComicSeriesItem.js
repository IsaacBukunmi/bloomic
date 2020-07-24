import React, {Fragment} from 'react';
import {navigate} from 'gatsby';

import styles from './comicseriesitem.module.scss';
import SeriesImage from '../../images/hero-bg-ex.jpg';

class ComicSeriesItem extends React.Component {


    chapterListPage() {
        navigate('/series-chapter-list'); //navigate to chapter list page
    }
      

    render(){
        return(
            <Fragment>
                <div className={styles.listItemContainer} onClick={() => this.chapterListPage()}>
                    <div className={styles.listItemContent} >
                        <div className={styles.seriesImage}>
                            <img src="https://image.freepik.com/free-psd/cartoon-comic-style-text-effect-psd-template_70288-50.jpg" alt=""/>
                        </div>  
                        <div className={styles.seriesTitle}>
                            Super Kid strikes back
                        </div>
                    </div>
                </div>
                <div className={styles.listItemContainer} onClick={() => this.chapterListPage()}>
                    <div className={styles.listItemContent}>
                        <div className={styles.seriesImage}>
                            <img src="https://img.freepik.com/free-vector/traveling-chapiteau-circus-show-announcement-retro-cartoon-style-poster-print-with-clown-magician-performance-vector-illustration_98292-3283.jpg?size=338&ext=jpg&ga=GA1.2.887666855.1580842231" alt=""/>
                        </div>  
                        <div className={styles.seriesTitle}>
                            Amazing Show in the Circus
                        </div>
                    </div>
                </div>
                <div className={styles.listItemContainer} onClick={() => this.chapterListPage()}>
                    <div className={styles.listItemContent}>
                        <div className={styles.seriesImage}>
                            <img src="https://img.freepik.com/free-vector/hand-drawn-city-comic-style_23-2147515170.jpg?size=338&ext=jpg&ga=GA1.2.887666855.1580842231" alt=""/>
                        </div>  
                        <div className={styles.seriesTitle}>
                            The lost city of the west
                        </div>
                    </div>
                </div>
                <div className={styles.listItemContainer} onClick={() => this.chapterListPage()}>
                    <div className={styles.listItemContent}>
                        <div className={styles.seriesImage}>
                            <img src="https://img.freepik.com/free-vector/designer-running-away-from-fonts-city_23-2147541947.jpg?size=338&ext=jpg&ga=GA1.2.887666855.1580842231" alt=""/>
                        </div>  
                        <div className={styles.seriesTitle}>
                            George and the tales of Sansas
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ComicSeriesItem;