import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ALink from '~/components/features/alink';
import LoginModal from '~/components/features/modals/login-modal';
import HeaderSearch from '~/components/partials/header/partials/header-search';
import WishlistMenu from '~/components/partials/header/partials/wishlist-menu';
import CartMenu from '~/components/partials/header/partials/cart-menu';
import MainMenu from '~/components/partials/header/partials/main-menu';
import StickyHeader from '~/components/features/sticky-header';
import NavbarItems from '~/components/partials/header/partials/navbar';



function Header () {
    const router = useRouter();
    const [ containerClass, setContainerClass ] = useState( 'container' );

    function openMobileMenu () {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    useEffect( () => {
        setContainerClass( router.asPath.includes( 'fullwidth' ) ? 'container-fluid' : 'container' );
    }, [ router.asPath ] );

    return (
     

        <header className="header header-25">
            <div className="header-top">
                <div className={ containerClass }>
                    <div className="header-left">
                        <div className="d-flex align-items-center d-md-block text-secondary">
                            <a href="tel:#"><i className="icon-phone h6 text-secondary" style={ { marginRight: '8px' } } ></i>Call: +0123 456 789</a>
                        </div>
                    </div>

                    <div className="header-right">
                        <div className="social-icons social-icons-color d-none d-md-flex">
                            <a href="#" className="social-icon social-facebook" title="Facebook" onClick={ e => { e.preventDefault(); } }><i className="icon-facebook-f"></i></a>
                            <a href="#" className="social-icon social-twitter" title="Twitter" onClick={ e => { e.preventDefault(); } }><i className="icon-twitter"></i></a>
                            <a href="#" className="social-icon social-pinterest" title="Instagram" onClick={ e => { e.preventDefault(); } }><i className="icon-pinterest-p"></i></a>
                            <a href="#" className="social-icon social-instagram" title="Pinterest" onClick={ e => { e.preventDefault(); } }><i className="icon-instagram"></i></a>
                        </div>

                        <ul className="top-menu text-secondary">
                            <li>
                                <a href="#">Links</a>
                                <ul className="d-flex align-items-center">
                                    <LoginModal />

                                    <li>
                                        <div className="header-dropdown">
                                            <a href="#" onClick={ e => { e.preventDefault(); } }>USD</a>
                                            <div className="header-menu">
                                                <ul>
                                                    <li className="m-0"><a href="#" onClick={ e => { e.preventDefault(); } }>Eur</a></li>
                                                    <li className="m-0"><a href="#" onClick={ e => { e.preventDefault(); } }>Usd</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="header-dropdown">
                                            <a href="#" onClick={ e => { e.preventDefault(); } }>Eng</a>
                                            <div className="header-menu">
                                                <ul>
                                                    <li className="m-0"><a href="#" onClick={ e => { e.preventDefault(); } }>English</a></li>
                                                    <li className="m-0"><a href="#" onClick={ e => { e.preventDefault(); } }>French</a></li>
                                                    <li className="m-0"><a href="#" onClick={ e => { e.preventDefault(); } }>Spanish</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className={ containerClass }>
                    <div className="header-left d-lg-block d-none">
                        <HeaderSearch />
                    </div>

                    <div className="header-center">
                        <ALink href="/" className="logo">
                            <img src="images/home/logo.png" alt="Molla Logo" className="bg-transparent" width="82" height="37" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <WishlistMenu />
                        <CartMenu />
                    </div>
                </div>
            </div>

            <StickyHeader>
                <div className="header-bottom sticky-header">
                    <div className={ containerClass }>
                        <div className="header-left">
                            <MainMenu />

                            <button className="mobile-menu-toggler" onClick={ openMobileMenu }>
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>
                        </div>

                        <div className="header-right overflow-hidden">
                            <i className="la la-lightbulb-o"></i>
                            <p className="text-white text-uppercase">Clearance Up to 30% Off</p>
                        </div>
                    </div>
                </div>
            </StickyHeader>
        </header>
    )
}

export default Header;