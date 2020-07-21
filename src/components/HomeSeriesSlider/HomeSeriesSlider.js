import React from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick';
import "./series-slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import homeSliderStyles from './homeseriesslider.module.scss';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={homeSliderStyles.arrowContainerRight}
            onClick={onClick}
        >
            <FontAwesomeIcon 
                className={homeSliderStyles.fontIcon}
                icon={faAngleRight} />
        </div>
    );
}
  
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
        className={homeSliderStyles.arrowContainerLeft}
        onClick={onClick}
        >
            <FontAwesomeIcon 
                className={homeSliderStyles.fontIcon}
                icon={faAngleLeft} />
        </div>
    );
}

class HomeSeriesSlider extends React.Component {

    render(){

        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0px",
            slidesToShow: 3,
            speed: 500,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
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
                    breakpoint: 700,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      initialSlide: 2
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
            <div className={homeSliderStyles.seriesSliderFluid}>
                <div className={homeSliderStyles.container}>
                    <div className={homeSliderStyles.title}>
                        <div className={homeSliderStyles.headerContainer}>
                            <div className={homeSliderStyles.borderTop}></div>
                            <h1>Comic Series</h1>
                        </div>
                        <div>
                            <p><Link to="/comic-series">View All <span>Comic Series</span></Link></p>
                        </div>
                    </div>
                    <div className={homeSliderStyles.sliderContainer}>
                        <Slider {...settings}>
                            <div className={homeSliderStyles.sliderItem}>
                                <div className={homeSliderStyles.sliderImage}>
                                    <img src="https://images.unsplash.com/photo-1491403938640-b57372002c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </div>
                                
                            </div>
                            <div className={homeSliderStyles.sliderItem}>
                                <div className={homeSliderStyles.sliderImage}>
                                    <img src="https://images.unsplash.com/photo-1587270613291-b5c7042fc104?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </div>
                                
                            </div>
                            <div className={homeSliderStyles.sliderItem}>
                                <div className={homeSliderStyles.sliderImage}>
                                    <img src="https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </div>
                                
                            </div>
                            <div className={homeSliderStyles.sliderItem}>
                                <div className={homeSliderStyles.sliderImage}>
                                    <img src="https://images.unsplash.com/photo-1491403938640-b57372002c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </div>
                                
                            </div>
                            <div className={homeSliderStyles.sliderItem}>
                                <div className={homeSliderStyles.sliderImage}>
                                    <img src="https://images.unsplash.com/photo-1491403938640-b57372002c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </div>
                                
                            </div>
                            <div className={homeSliderStyles.sliderItem}>
                                <div className={homeSliderStyles.sliderImage}>
                                    <img src="https://images.unsplash.com/photo-1587270613304-4cc9ef012b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </div>
                               
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeSeriesSlider;