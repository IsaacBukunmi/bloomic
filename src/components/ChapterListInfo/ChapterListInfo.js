import React from 'react'

import styles from './chapterlistinfo.module.scss';

const ChapterListInfo = () => {
    return(
        <div className={styles.listInfoContainerFluid}>
            <div className={styles.container}>
                <div className={styles.comicCard}>
                    <div className={styles.comicImage}>
                        <img src="https://image.freepik.com/free-psd/cartoon-comic-style-text-effect-psd-template_70288-50.jpg" alt=""/>
                    </div>
                    <div className={styles.comicInfo}>
                        <p><span>Title: </span> Super Kid Strikes Back</p>
                        <p><span>Author: </span>Michael Duro</p>
                        <p><span>Status: </span><small className={styles.status} style={{backgroundColor:'#f27704', padding:'5px 10px', borderRadius:'10px'}}>Ongoing</small></p>
                        <p><span>Date Published: </span>30th June, 2020</p>
                    </div>
                </div>
                <div className={styles.synopsisContainer}>
                    <p>Here comes a short synopsis: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae harum omnis, excepturi molestiae nihil eaque dicta vero sapiente odit non! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, eum.</p>
                </div>
            </div>
        </div>
    )
}

export default ChapterListInfo