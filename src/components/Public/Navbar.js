import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '@/assets/components/Public/Navbar.css'
import '@/assets/pages/Public/base.js'

const Navbar = () => {
    return (
        <header>
            <div className='navbar'>
                <div className='col-md-4 grid-margin stretch-card'>
                    <div className='logo'>
                        <h2 >Logo</h2>
                    </div>
                </div>
                <div className='col-md-8 grid-margin stretch-card'>
                    <div className='row'>
                        <li className='col-md-3 grid-margin stretch-card'>
                            <AnchorLink href='#home' style={{'--i':'1'}}>
                                <i className='fas fa-home'></i>
                                <span>Accueil</span>
                            </AnchorLink>
                        </li>
                        <li className='col-md-3 grid-margin stretch-card'>
                            <AnchorLink href='#knowledge' style={{'--i':'2'}}>
                                <i className='fas fa-home'></i>
                                <span>Comptences</span>
                            </AnchorLink>
                        </li>
                        <li className='col-md-3 grid-margin stretch-card'>
                            <AnchorLink href='#portfolio' style={{'--i':'3'}}>
                                <i className='fas fa-home'></i>
                                <span>Portfolio</span>
                            </AnchorLink>
                        </li>
                        <li className='col-md-3 grid-margin stretch-card'>
                            <AnchorLink href='#contact' style={{'--i':'4'}}>
                                <i className='fas fa-home'></i>
                                <span>Contact</span>
                            </AnchorLink>
                        </li>
                    </div>
                </div>
            </div>

        </header>
       
    );
};

export default Navbar;