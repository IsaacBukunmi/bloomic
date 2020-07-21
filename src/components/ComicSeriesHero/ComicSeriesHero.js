import React from 'react';

import styles from './comicserieshero.module.scss';

const ComicSeriesHero = () =>{
    return(
        <div className={styles.seriesHeroContainerFluid}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Comic <span>Series</span></h1>
                </div>
            </div>
        </div>
    )
}

export default ComicSeriesHero;