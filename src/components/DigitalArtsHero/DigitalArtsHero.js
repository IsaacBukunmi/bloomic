import React from 'react';

import styles from './digitalartshero.module.scss';

const DigitalArtsHero = () => {
    return(
        <div className={styles.artsHeroContainerFluid}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Digital <span>Arts</span></h1>
                </div>
            </div>
        </div>
    )
}

export default DigitalArtsHero;
