import React from 'react';
import { Link } from 'gatsby';
import ImageGallery from 'react-image-gallery';

import styles from './homeartsgallery.module.scss';
import "./home-image-gallery.css";

class HomeArtsGallery extends React.Component {
    constructor(){
        super();

        this.state = {
            thumbnailPosition: 'left',
            showPlayButton: false,
            autoPlay:false,
            useTranslate3D:true,
            slideDuration: 1000,
            slideInterval: 4000,
            showNav: true,
        }

        this.images=[
            {
                original:'https://www.pexels.com/photo/3977529/download/?search_query=digital%20arts&tracking_id=qcxs3fs1krk',
                thumbnail:'https://www.pexels.com/photo/3977529/download/?search_query=digital%20arts&tracking_id=qcxs3fs1krk',
            },
            {
                original:'https://unsplash.com/photos/ZSE5vGldTPs/download?force=true&w=1920',
                thumbnail:'https://unsplash.com/photos/ZSE5vGldTPs/download?force=true&w=640',
            },
            {
                original:'https://unsplash.com/photos/XU0YcfPXKI4/download?force=true&w=1920',
                thumbnail:'https://unsplash.com/photos/XU0YcfPXKI4/download?force=true&w=640',
            },
            {
                original:'https://unsplash.com/photos/rhUU1pemhQ0/download?force=true&w=1920',
                thumbnail:'https://unsplash.com/photos/rhUU1pemhQ0/download?force=true&w=640',
            },
            {
                original: 'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                thumbnail:'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            },
            {
              original: 'https://picsum.photos/id/1018/1000/600/',
              thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
              original: 'https://picsum.photos/id/1015/1000/600/',
              thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
              original: 'https://picsum.photos/id/1019/1000/600/',
              thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
          ]
    }

    render(){
        return(
            <div className={styles.galleryArtsFluid}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <div className={styles.headerContainer}>
                            <div className={styles.borderTop}></div>
                            <h1>Digital Arts</h1>
                        </div>
                        <div>
                            <p><Link to="/digital-arts">View All <span>Digital Arts</span></Link></p>
                        </div>
                    </div>
                    <div className={styles.imageGalleryContainer}>
                        <ImageGallery 
                        items={this.images}
                        thumbnailPosition={this.state.thumbnailPosition}
                        showPlayButton={this.state.showPlayButton}
                        autoPlay={this.state.autoPlay}
                        useTranslate3D={this.state.useTranslate3D}
                        slideDuration={this.state.slideDuration}
                        slideInterval={this.state.slideInterval}
                        showNav={this.state.showNav}
                        />
                    </div>
                </div>
            </div>
        )
    }
    
}

export default HomeArtsGallery;