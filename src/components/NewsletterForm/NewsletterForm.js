import React from 'react';
import addToMailChimp from 'gatsby-plugin-mailchimp';

import styles from './newsletterform.module.scss';

class NewsLetterForm extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            message: '',
        };
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addToMailChimp(this.state.email)
        this.setState({
            message: result.msg
        })
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
                            <form name="subscribeForm" method="POST"  onSubmit={this.handleSubmit}> 
                                <div className={styles.subscribeMessage} dangerouslySetInnerHTML={{ __html: this.state.message}} />   
                                <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className="subscribe-email" 
                                name="email"
                                onChange={this.handleInputChange}
                                value={this.state.email}/>
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsLetterForm;