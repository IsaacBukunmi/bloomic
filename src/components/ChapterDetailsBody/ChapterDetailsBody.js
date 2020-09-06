import React from 'react';
import { Link } from 'gatsby';
import ImageGallery from 'react-image-gallery';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import styles from './chapterdetailsbody.module.scss';
import "./chapter-details-gallery.css";
import "./details-slick-theme.css";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={styles.arrowContainerRight}
            onClick={onClick}
        >
            <FontAwesomeIcon 
                className={styles.fontIcon}
                icon={faAngleRight} />
        </div>
    );
}
  
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
        className={styles.arrowContainerLeft}
        onClick={onClick}
        >
            <FontAwesomeIcon 
                className={styles.fontIcon}
                icon={faAngleLeft} />
        </div>
    );
}



const ChapterDetailsBody = (props) => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dotsClass:'slick-dots'
    }
        return(

            <div className={styles.chapterDetailsFluid}>
                <div className={styles.container}>
                    <div className={styles.chapterTitle}>
                        <h2>{props.chapterTitle}</h2>
                    </div>
                    <div className={styles.chapterGalleryContainer}>
                        <Slider {...settings}>
                        {
                            props.chapterImages.map((image) => (
                                <div className={styles.originalImage}>
                                    <img src={image.file.url} alt={image.title}/>
                                </div>
                            ))
                        }
                        </Slider>
                    </div>
                </div>
            </div>
        )
}

export default ChapterDetailsBody;