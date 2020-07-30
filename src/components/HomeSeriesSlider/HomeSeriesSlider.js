import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
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


const HomeSeriesSlider = () => {
   
    const data = useStaticQuery(graphql`
    query{
        allContentfulComicSeries{
          edges{
            node{
              seriesTitle
              datePublished
              status
              slug
              seriesAuthor{
                  name
                  role
              }
              heroImage{
                file{
                  url
                }
              }
              seriesImage{
                file{
                  url
                }
                title
              }
              synopsis{
                synopsis
              }
              chapters{
                chapterTitle
                chapterNumber
                chapterImages{
                  file{
                    url
                  }
                }
              }
            }
          }
        }
      }
    `)
    
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
                            {
                                data.allContentfulComicSeries.edges.slice(0, 5).map((edge) => (
                                    <Link to ={`/comic-series/${edge.node.slug}`} className={homeSliderStyles.sliderItem}>
                                        <div className={homeSliderStyles.sliderImage}>
                                            <img src={edge.node.seriesImage.file.url} alt={edge.node.seriesImage.title}/>
                                        </div> 
                                    </Link>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        )
    
}

export default HomeSeriesSlider;