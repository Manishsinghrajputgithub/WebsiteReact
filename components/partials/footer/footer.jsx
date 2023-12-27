import { useRouter } from 'next/router';
import ALink from '~/components/features/alink';
import React, { useState, useEffect } from 'react';

function Footer () {
    const router = useRouter( "" );
    const [ isBottomSticky, setIsBottomSticky ] = useState( false );
    const [ containerClass, setContainerClass ] = useState( 'container' );

    useEffect( () => {
        handleBottomSticky();
        setContainerClass( router.asPath.includes( 'fullwidth' ) ? 'container-fluid' : 'container' );
    }, [ router.asPath ] );

    useEffect( () => {
        window.addEventListener( 'resize', handleBottomSticky, { passive: true } );
        return () => {
            window.removeEventListener( 'resize', handleBottomSticky );
        }
    }, [] )

    function handleBottomSticky () {
        setIsBottomSticky( router.pathname.includes( 'product/default' ) && ( window.innerWidth > 991 ) );
    }

    return (
        <footer className="footer mb-0" style={ { backgroundColor: '#222' } }  >
            <div className="footer-newsletter pt-4">
                <div className={ containerClass }>
                    <div className="heading heading-center">
                        <h2 className="title my-2 mt-0">GET THE LATEST DEALS</h2>
                        <p className="text-secondary">and receive $20 coupon for first shopping</p>
                    </div>

                    <div className="row">
                        <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                            <form action="#">
                                <div className="input-group d-sm-flex d-block">
                                    <input type="email" className="form-control font-size-normal text-truncate" placeholder="Enter your Email Address" aria-label="Email Adress" aria-describedby="newsletter-btn" required />
                                    <div className="input-group-append mt-sm-0">
                                        <button className="btn font-size-normal letter-spacing-large btn-white" type="submit" id="newsletter-btn"><span>SUBSCRIBE</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ containerClass }>
                <hr className="mt-0 mb-0" style={ { borderTopColor: '#444' } } />
            </div>

            <div className="footer-middle">
                <div className={ containerClass }>
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="widget widget-about">
                                <h4 className="widget-title text-white">ABOUT Silver Spirit</h4>
                                <p className="text-secondary font-weight-normal font-size-normal">Praesent dapibus, neque id cursus<br /> ucibus, tortor neque egestas augue,<br /> eu vulputate magna eros eu erat. </p>

                                <div className="social-icons">
                                    <a href="#" className="social-icon" title="Facebook" onClick={ e => { e.preventDefault(); } }><i className="icon-facebook-f"></i></a>
                                    <a href="#" className="social-icon" title="Twitter" onClick={ e => { e.preventDefault(); } }><i className="icon-twitter"></i></a>
                                    <a href="#" className="social-icon" title="Instagram" onClick={ e => { e.preventDefault(); } }><i className="icon-instagram"></i></a>
                                    <a href="#" className="social-icon" title="Youtube" onClick={ e => { e.preventDefault(); } }><i className="icon-youtube"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title text-white">USEFUL LINKS</h4>

                                <ul className="widget-list">
                                    <li><ALink href="/pages/about">About Silver Spirit</ALink></li>
                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>How to shop on Silver Spirit</a></li>
                                    <li><ALink href="/pages/faq">FAQ</ALink></li>
                                    <li><ALink href="/pages/contact">Contact us</ALink></li>
                                    <li><ALink href="/pages/login">Log in</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title text-white">CUSTOMER SERVICE</h4>

                                <ul className="widget-list">
                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Payment Methods</a></li>
                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Money-back guarantee!</a></li>
                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Returns</a></li>
                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Shipping</a></li>
                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Terms and conditions</a></li>
                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title text-white">MY ACCOUNT</h4>

                                <ul className="widget-list">
                                    <li><ALink href="/pages/login">Sign In</ALink></li>
                                    <li><ALink href="/shop/cart">View Cart</ALink></li>
                                    <li><ALink href="/shop/wishlist">My Wishlist</ALink></li>
                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Track My Order</a></li>
                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className={ `flex-column align-items-center pt-5 ${containerClass}` }>
                    <figure className="footer-payments mb-1 mr-auto">
                        <img src="images/payments.png" className="mb-2" alt="Payment methods" width="272" height="20" />
                    </figure>
                    <img src="images/home/logo-footer.png" className="mb-2" alt="Silver Spirit Logo" width="82" height="25" />
                    <p className="footer-copyright text-secondary font-weight-normal font-size-normal">Copyright © { ( new Date() ).getFullYear() } Silver Spirit Store. All Rights Reserved.</p>
                </div>
            </div>
            {
                isBottomSticky ?
                    <div className="mb-10"></div>
                    : ""
            }
        </footer>
    );
}

export default React.memo( Footer );