import React from 'react';
import homeheroStyles from './homehero.module.scss';


class HomeHero extends React.Component {

    render() {
        return(
            <div className={homeheroStyles.homeheroFluid}>
                <div className={homeheroStyles.homeheroContainer}>
                    <div className={homeheroStyles.homeheroContent}>
                        <h1>Explore various collection of <span>COMIC SERIES</span></h1>
                        <p>Browse through the app, Select a comic series from our wide range collection, relax and enjoy beautiful contents</p>
                        <div className={homeheroStyles.button}>
                            <button>View Collections</button>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

export default HomeHero;