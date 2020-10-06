import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import styles from './footer.module.scss';

const Footer = () => {
    return(
        <div className={styles.footerContainerFluid}>
            <div className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <div className={styles.quickLinksContainer}>
                        <h3>Quick Links</h3>
                        <div className={styles.quickLinks}>
                            <Link to="/about">About Us</Link>
                            <Link to="/comic-series">Comic Series</Link>
                            <Link to="/comic-strips">Comic Strips</Link>
                            <Link to="/digital-arts">Digital Arts</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>    
                    </div>
                    <div className={styles.followContainer}>
                        <div className={styles.socialMedia}>
                            <h3>Follow Us</h3>
                            <div className={styles.socialMediaIcons}>
                                <a href="https://www.instagram.com/thebloomic/" className={styles.fontIcon}><FontAwesomeIcon  icon={faInstagram} /></a>
                                <a href="https://web.facebook.com/bloomic.app.7" className={styles.fontIcon}><FontAwesomeIcon  icon={faFacebook} /></a>
                                <a href="" className={styles.fontIcon}><FontAwesomeIcon  icon={faTwitter} /></a>
                                <a href="" className={styles.fontIcon}><FontAwesomeIcon  icon={faYoutube} /></a>
                            </div>
                        </div>
                        <div className={styles.privacyPolicy}>
                            <p><Link to="/">Privacy Policy</Link></p>
                            <p><Link to="/">Terms of Use</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerCopyright}>
                <p>Copyright &copy;2020 Bloomic. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;