import React from 'react';
import { Link } from 'gatsby';
import errorImg from '../images/not_found.svg';
import styles from '../styles/404.module.scss';
import Head from '../components/head';

const errorPage = () => {
    return(
        <>
            <Head title="Page not found"/>
            <div className={styles.errorBody}>
                <div className={styles.errorImage}>
                    <img src={errorImg} alt="404 image"/>
                </div>
                <div className={styles.errorText}>
                    <h1>Error! Seems you are lost</h1>
                    <p>Don't be scared, <Link to="/">Let's take you home!</Link></p>
                </div>
            </div>
        </>
    )
}

export default errorPage;