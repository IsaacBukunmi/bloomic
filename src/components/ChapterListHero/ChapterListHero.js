import React from 'react';

import styles from './chapterlisthero.module.scss';

const ChapterListHero = () =>{
    return(
        <div className={styles.chapterListHeroContainerFluid}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Super Kid Strikes Back</h1>
                </div>
            </div>
        </div>
    )
}

export default ChapterListHero;