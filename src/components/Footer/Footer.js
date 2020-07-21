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
                            <Link to="/">About Us</Link>
                            <Link to="/comic-series">Comic Series</Link>
                            <Link to="/comic-strips">Comic Strips</Link>
                            <Link to="/digital-arts">Digital Arts</Link>
                            <Link to="/">Contact Us</Link>
                        </div>    
                    </div>
                    <div className={styles.followContainer}>
                        <div className={styles.socialMedia}>
                            <h3>Follow Us</h3>
                            <div className={styles.socialMediaIcons}>
                                <FontAwesomeIcon className={styles.fontIcon} icon={faInstagram} />
                                <FontAwesomeIcon className={styles.fontIcon} icon={faFacebook} />
                                <FontAwesomeIcon className={styles.fontIcon} icon={faTwitter} />
                                <FontAwesomeIcon className={styles.fontIcon} icon={faYoutube} />
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