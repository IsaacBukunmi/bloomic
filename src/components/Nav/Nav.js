import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames'

import navStyles from './nav.module.scss'

import BloomicLogo from '../../images/bloomic_logo.png'

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
    

    render(){
        return(
            <nav>
                <div className={navStyles.navContainer}>
                    <div className={navStyles.siteName}>
                        <Link to="/">BLOOMIC</Link>   
                    </div>
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
                                <div className={navStyles.menuItems}>
                                    <div className={navStyles.leftMenuItem}>
                                        <div className={navStyles.menuLink}>
                                            <Link>Home</Link>
                                        </div>
                                        <div className={navStyles.menuLink}>
                                            <Link>Comic Series</Link>
                                        </div>
                                        <div className={navStyles.menuLink}>
                                            <Link>Comic Strips</Link>
                                        </div>
                                        <div className={navStyles.menuLink}>
                                            <Link>Digital Arts</Link>
                                        </div>
                                    </div>
                                </div>   
                            </div>
                     
            </nav>
        )
    }
   
}

export default Nav