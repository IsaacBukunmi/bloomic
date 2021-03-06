import React from 'react';

import styles from './contactusform.module.scss';


const ContactUsForm = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.header_container}>
                    <h2>Write us a message</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus non ipsam sapiente porro nesciunt mollitia quos animi recusandae, inventore voluptatem.</p>
                </div>
                <div className={styles.form_container}>
                    <form action="/success" method="POST" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="bot-field"/>
                        <input type="hidden" name="form-name" value="contact"/>
                        <div className={styles.personal_info_container}>
                            <div className={styles.input_item}>
                                <label htmlFor="name">Full Name</label> <br />
                                <input type="text" name="name" placeholder="John Doe"/>
                            </div>
                            <div className={styles.input_item}>
                                <label htmlFor="email">Email Address</label> <br />
                                <input type="email"name="email" placeholder="johndoe@gmail.com"/>
                            </div>
                        </div>
                        {/* <input type="file"/> */}
                        <div className={styles.comment_container}>
                            <div className={styles.text_input}>
                                <label>Message</label> <br />
                                <textarea name="message"></textarea>
                            </div>
                        </div>
                        <div  className={styles.button_container}>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUsForm