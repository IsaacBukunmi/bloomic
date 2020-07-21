import React from 'react';

import styles from './newsletterform.module.scss';

class NewsLetterForm extends React.Component {
    constructor(){
        super();

    }

    render(){
        return(
            <div className={styles.newsletterContainerFluid}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h1>Subscribe To Our <span>Newsletter</span></h1>
                    </div>
                    <div className={styles.subscribeContainer}>
                        <p>To get more updates on new comic series, strips, digital arts, videos and latest information, make sure to subscribe below</p>
                        <div className={styles.formContainer}>
                            <form action="">
                                
                                    <input type="text" placeholder="Enter your email address"/>
                               
                                    <button>Subscribe</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsLetterForm;