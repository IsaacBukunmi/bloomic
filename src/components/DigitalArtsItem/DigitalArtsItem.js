import React, { Fragment, useState } from 'react';
import Lightbox from "react-awesome-lightbox";

import './digital-arts-lightbox.css';
// import "react-awesome-lightbox/build/style.css";

import styles from './digitalartsitem.module.scss';


const DigitalArtsItem = ({artsTitle, artsAuthor, imageURL}) => {

    const[openImage, setOpenImage] = useState(false);

    return(
        <Fragment>
            <div className={styles.artsImageItem}>
                <div className={styles.imageContent}>
                    <img src={imageURL} alt="" onClick={() => setOpenImage(!openImage)}/>
                    
                    {
                        openImage ?
                        <Lightbox image={imageURL} title={`${artsTitle} by ${artsAuthor}`}  onClose={() => setOpenImage(!openImage)}/> : null
                    }
                </div>   
            </div>
        </Fragment>
    )
}

export default DigitalArtsItem;