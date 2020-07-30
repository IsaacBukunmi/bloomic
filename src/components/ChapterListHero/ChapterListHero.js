import React from 'react';
import styles from './chapterlisthero.module.scss';

const ChapterListHero = (props) =>{
    return(
        <div className={styles.chapterListHeroContainerFluid} style={{backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)
        ),
        url(${props.seriesImage})`}}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>{props.seriesTitle}</h1>
                </div>
            </div>
        </div>
    )
}

export default ChapterListHero;