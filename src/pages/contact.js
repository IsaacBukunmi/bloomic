import React from 'react';
import Layout from '../components/Layout';
import ContactUsHero from '../components/ContactUsHero/ContactUsHero';
import ContactUsForm from '../components/ContactUsForm/ContactUsForm';
import Head from '../components/head';


const ContactUsPage = () => {
    return(
        <Layout>
            <Head title="Contact Us"/>
            <ContactUsHero />
            <ContactUsForm />
        </Layout>
    )
}

export default ContactUsPage;