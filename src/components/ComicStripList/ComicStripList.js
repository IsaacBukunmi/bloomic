import React from 'react';
import { Link } from 'gatsby';
import ComicStripItem from '../ComicStripItem/ComicStripItem';
import styles from './comicstriplist.module.scss';
import PageListHeading from '../PageListHeading/PageListHeading'


const comicStripImages = [
    {   
        id:1,
        imageUrl: "https://images.unsplash.com/photo-1593345215990-170543af6949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        stripTitle:"Adventures of Bojo (PT1)",
        stripAuthor:"Adekunle Ciroma"
    },
    {
        id:2,
        imageUrl: "https://images.unsplash.com/photo-1586350716359-f8f07c13d42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        stripTitle:"Adventures of Bojo (PT2)",
        stripAuthor:"Adekunle Ciroma"
    },

    {   
        id:3,
        imageUrl: "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        stripTitle:"Adventures of Bojo (PT3)",
        stripAuthor:"Adekunle Ciroma"
    },

    {   
        id:4,
        imageUrl: "https://images.unsplash.com/photo-1587043266473-a3f8ae532623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        stripTitle:"Adventures of Bojo (PT4)",
        stripAuthor:"Adekunle Ciroma"
    },
    {   
        id:5,
        imageUrl: "https://images.unsplash.com/photo-1587554627207-2c2e54584325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        stripTitle:"Adventures of Bojo (PT5)",
        stripAuthor:"Adekunle Ciroma"
    }

]


const ComicStripList = () => {

    
    return(
        <div className={styles.stripListContainerFluid}>
            <div className={styles.listHeadingContainer}>
                <PageListHeading pageName="Comic Strips"/>
            </div>
            <div className={styles.listContainer}>
                {
                    comicStripImages.map((imageItem, index) => (
                       <ComicStripItem 
                       key={index} 
                       id={imageItem.id} 
                       imageUrl={imageItem.imageUrl} 
                       stripTitle={imageItem.stripTitle}
                       stripAuthor={imageItem.stripAuthor}/>
                    ))
                }
            </div>
        </div>
        
    )
}

export default ComicStripList