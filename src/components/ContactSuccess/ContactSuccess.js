import React from 'react';
import superThankyou from '../../images/super_thank_you.svg'
import { Link } from 'gatsby';
import styles from './contact-success.module.scss';



const ContactSuccess = () => {
    return(
        <div className={styles.successBody}>
            <div className={styles.successImage}>
                <img src={superThankyou} alt="thank you image"/>
            </div>
            <div className={styles.successText}>
                <h1>Thank you for contacting us! We'll get back to you soon.</h1>
                <Link to="/">Go back home</Link>
            </div>
        </div>
    )
}

export default ContactSuccess;