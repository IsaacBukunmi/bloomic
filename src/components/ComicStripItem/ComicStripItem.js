import React, { Fragment, useState } from 'react';
import Lightbox from "react-awesome-lightbox";

import './comic-strip-lightbox.css';
// import "react-awesome-lightbox/build/style.css";

import styles from './comicstripitem.module.scss';


const ComicStripItem = ({id, imageUrl, stripTitle, stripAuthor}) => {

    const[openImage, setOpenImage] = useState(false);

    return(
        <Fragment>
            <div className={styles.stripImageItem} key={id}>
                <div className={styles.imageContent}>
                    <img src={imageUrl} alt="" onClick={() => setOpenImage(!openImage)}/>
                    {
                        openImage ?
                        <Lightbox image={imageUrl} title={`${stripTitle} by ${stripAuthor}`}  onClose={() => setOpenImage(!openImage)}/> : null
                    }
                </div>   
            </div>
        </Fragment>
    )
}

export default ComicStripItem;