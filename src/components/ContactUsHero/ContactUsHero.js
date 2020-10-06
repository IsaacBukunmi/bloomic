import React from 'react';

import styles from './contactushero.module.scss';

const ContactUsHero = () => {
    return(
        <div className={styles.contactHeroContainerFluid}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Contact <span>Us</span></h1>
                </div>
            </div>
        </div>
    )
}

export default ContactUsHero;