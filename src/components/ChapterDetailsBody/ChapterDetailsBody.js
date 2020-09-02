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

// class ChapterDetailsBody extends React.Component {
//     constructor(){
//         super();

//         this.state = {
//             thumbnailPosition: 'bottom',
//             showPlayButton: false,
//             autoPlay:false,
//             useTranslate3D:true,
//             slideDuration: 500,
//             slideInterval: 4000,
//             showNav: true,
//             showBullets:true,
//             showIndex:true,
//             infinite:false,
//         }

//         this.images=[
            
//             {
//                 original:'https://images.unsplash.com/photo-1594712844257-f20c563fe5de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//                 thumbnail:'https://images.unsplash.com/photo-1594712844257-f20c563fe5de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//             },
//             {
//                 original:'https://images.unsplash.com/photo-1593345216060-fdc5d77ba65f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//                 thumbnail:'https://images.unsplash.com/photo-1593345216060-fdc5d77ba65f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//             },
//             {
//                 original:'https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//                 thumbnail:'https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//             },
//             {
//                 original:'https://images.unsplash.com/photo-1593345215990-170543af6949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//                 thumbnail:'https://images.unsplash.com/photo-1593345215990-170543af6949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//             },
//             {
//                 original: 'https://image.freepik.com/free-vector/comic-zoom-lines-motion-background-with-halftone-effect_1017-20700.jpg',
//                 thumbnail:'https://image.freepik.com/free-vector/comic-zoom-lines-motion-background-with-halftone-effect_1017-20700.jpg',
//             },
//             {
//               original: 'https://img.freepik.com/free-vector/background-crack-comic-style-pop-art-colorful-vector_1035-14016.jpg?size=338&ext=jpg&ga=GA1.2.887666855.1580842231',
//               thumbnail: 'https://img.freepik.com/free-vector/background-crack-comic-style-pop-art-colorful-vector_1035-14016.jpg?size=338&ext=jpg&ga=GA1.2.887666855.1580842231',
//             },
//             {
//               original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmCw1COQHpOoFRFnHf4gomtPCzJ3l2OwC7Og&usqp=CAU',
//               thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmCw1COQHpOoFRFnHf4gomtPCzJ3l2OwC7Og&usqp=CAU',
//             },
//             {
//               original: 'https://img.freepik.com/free-vector/speed-line_10876-236.jpg?size=626&ext=jpg&ga=GA1.2.887666855.1580842231',
//               thumbnail: 'https://img.freepik.com/free-vector/speed-line_10876-236.jpg?size=626&ext=jpg&ga=GA1.2.887666855.1580842231',
//             },
//             {
//                 original: 'https://img.freepik.com/free-vector/thank-you-composition-comic-style_23-2147831785.jpg?size=338&ext=jpg&ga=GA1.2.887666855.1580842231',
//                 thumbnail: 'https://img.freepik.com/free-vector/thank-you-composition-comic-style_23-2147831785.jpg?size=338&ext=jpg&ga=GA1.2.887666855.1580842231',
//             },
//           ]
//     }

//     render(){
//         return(
//             <div className={styles.chapterDetailsFluid}>
//                 <div className={styles.container}>
//                     <div className={styles.chapterTitle}>
//                         <h2>The Birth of a Star</h2>
//                     </div>
//                     <div className={styles.chapterGalleryContainer}>
//                         <ImageGallery 
//                         items={this.images}
//                         thumbnailPosition={this.state.thumbnailPosition}
//                         showPlayButton={this.state.showPlayButton}
//                         autoPlay={this.state.autoPlay}
//                         useTranslate3D={this.state.useTranslate3D}
//                         slideDuration={this.state.slideDuration}
//                         slideInterval={this.state.slideInterval}
//                         showNav={this.state.showNav}
//                         showBullets={this.state.showBullets}
//                         showIndex={this.state.showIndex}
//                         infinite={this.state.infinite}
//                         />
//                     </div>
//                 </div>
//             </div>
//         )
//     }
    
// }
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