import React from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick';
import './strip-slick.css';
import "slick-carousel/slick/slick-theme.css";

import stripSlideStyles from './homestripslide.module.scss';


const HomeStripSlide = () => {

    const settings = {
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 4,
        speed: 3000,
        slidesToScroll: 4,
        autoplay:true,
        autoplaySpeed:0,
        easing:"linear",
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return(
        <div className={stripSlideStyles.stripSliderFluid}>
            <div className={stripSlideStyles.container}>
                <div className={stripSlideStyles.title}>
                    <div className={stripSlideStyles.headerContainer}>
                        <div className={stripSlideStyles.borderTop}></div>
                        <h1>Comic Strips</h1>
                    </div>
                    <div>
                        <p><Link to="/comic-strips">View All <span>Comic Strip</span></Link></p>
                    </div>
                </div>
                <div className={stripSlideStyles.sliderContainer}>
                    <Slider {...settings}>
                        <div className={stripSlideStyles.sliderItem}>
                            <div className={stripSlideStyles.sliderImage}>
                                <img src="https://images.unsplash.com/photo-1593345215990-170543af6949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                        </div>
                        <div className={stripSlideStyles.sliderItem}>
                            <div className={stripSlideStyles.sliderImage}>
                                <img src="https://images.unsplash.com/photo-1586350716359-f8f07c13d42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                        </div>
                        <div className={stripSlideStyles.sliderItem}>
                            <div className={stripSlideStyles.sliderImage}>
                                <img src="https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                        </div>
                        <div className={stripSlideStyles.sliderItem}>
                            <div className={stripSlideStyles.sliderImage}>
                                <img src="https://images.unsplash.com/photo-1587043266473-a3f8ae532623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                        </div>
                        <div className={stripSlideStyles.sliderItem}>
                            <div className={stripSlideStyles.sliderImage}>
                                <img src="https://images.unsplash.com/photo-1587554627207-2c2e54584325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                        </div>
                        <div className={stripSlideStyles.sliderItem}>
                            <div className={stripSlideStyles.sliderImage}>
                                <img src="https://images.unsplash.com/photo-1593345216060-fdc5d77ba65f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                               
                            </div>
                        </div>
                        <div className={stripSlideStyles.sliderItem}>
                            <div className={stripSlideStyles.sliderImage}>
                                <img src="https://images.unsplash.com/photo-1587392739794-e205c4550660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                        </div>
                        <div className={stripSlideStyles.sliderItem}>
                            <div className={stripSlideStyles.sliderImage}>
                                <img src="https://images.unsplash.com/photo-1587553906014-b2b4060dd6f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default HomeStripSlide;