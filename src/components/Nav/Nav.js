import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames'
import navStyles from './nav.module.scss'

import BloomicLogo from '../../images/bloomic_logo_new.png'

class Nav extends React.Component {
    constructor(){
        super()
        this.state={
            navOpen:false
        }
    }

    handleNavClick = () => {
        this.setState(prevState => ({
            navOpen:!prevState.navOpen
        }))
    }
    
    handleLinkClick = () => {
        this.setState({
            navOpen:false
        })
    }

    render(){
        return(
            <nav>
                <div className={navStyles.navContainer}>
                    {/* <div className={navStyles.siteName}>
                        <Link to="/">BLOOMIC</Link>   
                    </div> */}
                    <Link to="/">
                        <div className={navStyles.logoContainer}>
                            <img src={BloomicLogo} alt=""/>
                        </div>
                    </Link>
                    <div className={classNames(navStyles.hamburgerMenu, {[navStyles.toggleNav]: this.state.navOpen === true})} onClick={this.handleNavClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>     
                </div>
               
                <div className={classNames(navStyles.navMenuContainer, this.state.navOpen ? navStyles.navMenuContainer: navStyles.closeNavMenuContainer)}>
                    <div className={navStyles.menuSiteName}>
                        BLOOMIC
                    </div>
                    <div className={navStyles.menuItems}>
                        <div className={navStyles.leftMenuItem}>
                            <div className={navStyles.menuLink} activeClassName={navStyles.activeMenuLink}>
                                <Link to="/" onClick={this.handleLinkClick}>Home</Link>
                            </div>
                            <div className={navStyles.menuLink} >
                                <Link to="/comic-series" onClick={this.handleLinkClick}>Comic Series</Link>
                            </div>
                            <div className={navStyles.menuLink}>
                                <Link to="/comic-strips" onClick={this.handleLinkClick}>Comic Strips</Link>
                            </div>
                            <div className={navStyles.menuLink}>
                                <Link to="/digital-arts" onClick={this.handleLinkClick}>Digital Arts</Link>
                            </div>
                        </div>
                        <div className={navStyles.leftMenuItem}>
                            <div className={navStyles.menuLink}>
                                <Link to="/about" onClick={this.handleLinkClick}>About Us</Link>
                            </div>
                            <div className={navStyles.menuLink}>
                                <Link to="/contact" onClick={this.handleLinkClick}>Contact Us</Link>
                            </div>
                            <div className={navStyles.menuLink}>
                                <Link to="" onClick={this.handleLinkClick}>Privacy Policy</Link>
                            </div>
                            <div className={navStyles.menuLink}>
                                <Link to="" onClick={this.handleLinkClick}>Term of use</Link>
                            </div>
                        </div>
                    </div>   
                </div>          
            </nav>
        )
    }
   
}

export default Nav