import React from 'react';

import styles from './aboutushero.module.scss';

const AboutUsHero = () =>{
    return(
        <div className={styles.aboutHeroContainerFluid}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>About <span>Us</span></h1>
                </div>
            </div>
        </div>
    )
}

export default AboutUsHero;