import React from 'react';
import Layout from '../components/Layout';
import ContactUsHero from '../components/ContactUsHero/ContactUsHero';
import ContactUsForm from '../components/ContactUsForm/ContactUsForm';


const ContactUsPage = () => {
    return(
        <Layout>
            <ContactUsHero />
            <ContactUsForm />
        </Layout>
    )
}

export default ContactUsPage;