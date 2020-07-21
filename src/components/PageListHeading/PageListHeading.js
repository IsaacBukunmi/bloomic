import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './pagelistheading.module.scss';

const PageListHeading = (props) => {
    return(
        <div className={styles.listHeading}>
            <div className={styles.breadcrumb}>
                <p><Link to="/"><FontAwesomeIcon icon={faArrowLeft} className={styles.leftArrow} />Home / </Link><span>{props.pageName}</span></p> 
            </div>
            <div className={styles.searchFormContainer}>
                <form action="">
                    <input type="text" placeholder={`Search for a ${props.pageName}`}/>
                </form>
                <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            </div>
        </div>
    )
}

export default PageListHeading;