import React from 'react';

import styles from './comicstriphero.module.scss';

const ComicStripHero = () => {
    return(
        <div className={styles.stripHeroContainerFluid}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Comic <span>Strips</span></h1>
                </div>
            </div>
        </div>
    )
}

export default ComicStripHero;