import React from 'react';

import styles from './chapterdetailshero.module.scss';

const ChapterDetailsHero = (props) =>{
    return(
        <div className={styles.chapterDetailsHeroContainerFluid}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Chapter <span>{props.chapterNumber}</span></h1>
                </div>
            </div>
        </div>
    )
}

export default ChapterDetailsHero;