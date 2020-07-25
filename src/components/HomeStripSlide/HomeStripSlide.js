import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Slider from 'react-slick';
import './strip-slick.css';
import "slick-carousel/slick/slick-theme.css";

import stripSlideStyles from './homestripslide.module.scss';


const HomeStripSlide = () => {

    const data = useStaticQuery(graphql`
    query{
        allContentfulComicStrips{
          edges{
            node{
              stripTitle
              stripAuthor
              stripImage{
                file{
                  url
                }
              }
            }
          }
        }
      }
    `)

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
                        {
                            data.allContentfulComicStrips.edges.slice(0, 8).map((edge) => (
                                <div className={stripSlideStyles.sliderItem}>
                                    <div className={stripSlideStyles.sliderImage}>
                                        <img src={edge.node.stripImage.file.url} alt=""/>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default HomeStripSlide;