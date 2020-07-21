import React from 'react';

import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import NewsLetterForm from './NewsletterForm/NewsletterForm'
import '../styles/styles.scss'

const Layout = (props) => {
    return(
        <div>
            <Nav/>
                {props.children}
                <NewsLetterForm />
            <Footer/>
        </div>
    )
}

export default Layout;