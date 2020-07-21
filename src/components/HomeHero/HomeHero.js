import React from 'react';
import classNames from 'classnames'
import homeheroStyles from './homehero.module.scss';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomeHero extends React.Component {

    render() {

        const settings = {
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            autoplay:true,
            fade:true,
            pauseOnHover:false
          };

        return(
            <Slider {...settings}>
                <div className={homeheroStyles.homeheroFluid}>
                    <div className={homeheroStyles.homeheroContainer}>
                        <div className={homeheroStyles.homeheroContent}>
                            <h1>Explore various collection of <span>COMIC SERIES</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime amet quaerat laboriosam inventore unde.</p>
                            <div className={homeheroStyles.button}>
                                <button>View Collections</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={homeheroStyles.homeheroFluidTwo}>
                    <div className={homeheroStyles.homeheroContainer}>
                        <div className={homeheroStyles.homeheroContent}>
                            <h1>Explore various collection of <span>COMIC STRIPS</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime amet quaerat laboriosam inventore unde.</p>
                            <div className={homeheroStyles.button}>
                                <button>View Collections</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={homeheroStyles.homeheroFluidThree}>
                    <div className={homeheroStyles.homeheroContainer}>
                        <div className={homeheroStyles.homeheroContent}>
                            <h1>Explore various collection of <span>Digital Arts</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime amet quaerat laboriosam inventore unde.</p>
                            <div className={homeheroStyles.button}>
                                <button>View Collections</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        )
    }
}

export default HomeHero;