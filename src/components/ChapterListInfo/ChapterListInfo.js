import React from 'react';
import styles from './chapterlistinfo.module.scss';


const ChapterListInfo = (props) => {
    return(
        <div className={styles.listInfoContainerFluid}>
            <div className={styles.container}>
                <div className={styles.comicCard}>
                    <div className={styles.comicImage}>
                        <img src={props.seriesImage} alt={props.seriesImageTitle}/>
                    </div>
                    <div className={styles.comicInfo}>
                        <p><span>Title: </span> {props.seriesTitle}</p>
                        <p><span>Author: </span>{
                            props.seriesAuthor.map((author) => (
                                author.name
                            )).join(', ')
                        }</p>
                        <p><span>Status: </span><small className={styles.status} style={ props.status=='Ongoing' ?{backgroundColor:'#f27704', padding:'5px 10px', borderRadius:'10px'} : ( props.status=='Finished' ? {backgroundColor:'#009b19', padding:'5px 10px', borderRadius:'10px'}: {backgroundColor:'#ff0000', padding:'5px 10px', borderRadius:'10px'} ) }>{props.status}</small></p>
                        <p><span>Date Published: </span>{props.datePublished}</p>
                    </div>
                </div>
                <div className={styles.synopsisContainer}>
                    <p>{props.synopsis}</p>
                </div>
            </div>
        </div>
    )
}

export default ChapterListInfo