import Reveal from 'react-awesome-reveal';
import { useQuery } from "@apollo/react-hooks";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Apollo And Queries
import withApollo from '~/server/apollo';
import { GET_HOME_DATA } from '~/server/queries';

// Import Custom Component
import ALink from '~/components/features/alink';
import OwlCarousel from '~/components/features/owl-carousel';
import NewCollection from '~/components/partials/home/new-collection';
import FeaturedCollection from '~/components/partials/home/featured-collection';
import NewsletterModal from "~/components/features/modals/newsletter-modal";
import ProductThirteen from '~/components/features/products/product-thirteen';

// Import Utils
import { fadeIn, instagramSlider, fadeInUpShorter } from '~/utils/data';
import { attrFilter } from '~/utils';
import owlCarousel from '~/components/features/owl-carousel';

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA );
    const products = data && data.homeData.products;
    const newProducts = attrFilter( products, 'new' );
    const featuredProducts = attrFilter( products, 'featured' );
    const posts = data && data.homeData.posts;

    if ( error ) {
        return <div></div>
    }

    return (
        <div className={ `main home-page skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` }>
            <div className="intro-slider-container">
                <OwlCarousel adClass="intro-slider owl-dots-inside">
                    <div className="intro-slide bg-image intro-1 d-flex align-items-center" style={ { backgroundImage: 'url(images/home/slider/slider-1.jpg)', backgroundColor: '#222' } } >
                        <div className="container">
                            <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                <div className="intro-content position-static p-3 p-lg-0">
                                    <h4
                                        className="intro-subtitle font-size-normal letter-spacing-large text-primary text-uppercase font-weight-normal mb-1">
                                        <span>Deal Of The Day</span></h4>
                                    <h2 className="intro-title text-white font-weight-normal text-uppercase">Our Favorite Things</h2>
                                    <h2 className="intro-price text-white mb-2"><i>up to <span className="text-primary">60%
                                            off</span></i></h2>
                                    <ALink href="/shop/sidebar/list" className="btn letter-spacing-large btn-white text-uppercase mb-2 mt-2">Discover Now</ALink>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    <div className="intro-slide bg-image intro-2 d-flex align-items-center" style={ { backgroundImage: 'url(images/home/slider/slider-2.jpg)', backgroundColor: '#222' } } >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-6">
                                    <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                        <div className="intro-content position-static p-3 p-lg-0">
                                            <h4
                                                className="intro-subtitle font-size-normal letter-spacing-large text-primary text-uppercase font-weight-normal mb-1">
                                                <span>Deal Of The Day</span></h4>
                                            <h2 className="intro-title text-white mt-0 my-2 ml-0 font-weight-normal text-uppercase mb-0">
                                                Discover Our<br />One Kind Jewelery</h2>
                                            <ALink href="/shop/sidebar/list" className="btn letter-spacing-large btn-white font-weight-normal text-uppercase mb-2 mt-2">Discover Now</ALink>
                                        </div>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>

            <Reveal className="position-relative" style={ { zIndex: '1' } } keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <div className="container">
                    <div className="banner-group my-md-n5 mt-1">
                        <div className="row no-gutters">
                            <div className="col-md-4 col-sm-6 col-12">
                                <div className="banner mb-0 lazy-media">
                                    <figure className="mb-0">
                                        <div className="lazy-overlay"></div>
                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/home/banners/banner-1.jpg"
                                            threshold={ 200 }
                                            width="100%"
                                            height="auto"
                                            effect="blur"
                                        />
                                    </figure>

                                    <div className="banner-content text-center banner-content-center mb-0 my-md-4">
                                        <h4
                                            className="banner-subtitle font-size-normal letter-spacing-large text-white text-uppercase font-weight-normal">
                                            Clearance</h4>
                                        <h3 className="banner-title text-white font-weight-normal text-uppercase my-4 mb-0">
                                            Earrings&nbsp;<br />&amp; Rings&nbsp;</h3>
                                        <h3 className="banner-price text-white text-uppercase my-4 mt-0">Save 30%</h3>
                                        <ALink href={ { pathname: '/shop/sidebar/list', query: { category: 'rings' } } }
                                            className="btn font-size-normal letter-spacing-large btn-dark text-uppercase mt-0 mt-md-3 font-weight-normal text-uppercase">Shop
                                        Clearance</ALink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="banner banner-overlay mb-0 banner-middle bg-image" style={ { backgroundImage: 'url(images/home/banners/banner-2.jpg)' } } ></div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12">
                                <div className="banner lazy-media mb-0" style={ { backgroundColor: '#f9f9f9' } }>
                                    <figure className="mb-0">
                                        <div className="lazy-overlay"></div>
                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/home/banners/banner-3.jpg"
                                            threshold={ 200 }
                                            width="100%"
                                            height="auto"
                                            effect="blur"
                                        />
                                    </figure>

                                    <div className="banner-content text-center banner-content-center mt-2 mt-md-5">
                                        <h3 className="banner-title font-weight-normal text-uppercase mt-1 my-1">
                                            Bracelets&nbsp;<br />&amp; Anklets</h3>
                                        <ALink href={ { pathname: '/shop/sidebar/list', query: { category: 'bracelets-and-anklets' } } }
                                            className="btn font-size-normal letter-spacing-large btn-dark text-uppercase mt-4 font-weight-normal text-uppercase">Shop
                                        Now</ALink>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="banner banner-overlay mb-0" style={ { backgroundImage: 'url(images/home/banners/banner-4.jpg)', backgroundColor: '#544d4d', minHeight: '500px', boxShadow: '0px 5px 15px 0px rgba(0,0,0,.3)', backgroundPosition: 'right' } } >
                                    <div className="banner-content text-center banner-content-right px-3 p-lg-0 mt-lg-1">
                                        <h4
                                            className="banner-subtitle font-size-normal letter-spacing-large text-white text-uppercase mb-2 font-weight-normal">
                                            Exclusive</h4>
                                        <h3 className="banner-title text-white text-uppercase my-4 mb-0">Our New
                                        Romantic<br />Collection 2021</h3>
                                        <p className="banner-txt text-white font-weight-normal my-4 mb-2 mb-md-4 mx-4">Nullam
                                        malesuada eratut turpis. Suspendisse urnanibh viverra non, semper suscipit,
                                        posuere a pede.</p>
                                        <ALink href="/shop/sidebar/list"
                                            className="btn font-size-normal letter-spacing-large btn-primary btn-dark text-uppercase my-2 mb-0">Shop
                                        the Collection</ALink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>

            <NewCollection products={ newProducts } />

            <FeaturedCollection products={ featuredProducts } />

            <div className="banner bg-image shadow-none" style={ { backgroundImage: 'url(https://cdn.caratlane.com/media/static/images/V4/2023/CL/12_DEC/AppBanner/Offer/02/Mobile_768x890.jpg)', backgroundColor: '#edeef3' } } >
                <div className="banner-content text-center banner-content-center px-3 p-lg-0">
                    <img src="images/home/diamond-ring.png" className="mb-2 mt-2 mx-auto w-auto" alt="Banner"
                        width="28" height="32" />
                    <h3 className="banner-title my-4">HIGH QUALITY SINCE 2001</h3>
                    <h6 className="font-weight-normal">Everything you need to complete the perfect collection</h6>
                    <p className="banner-txt mb-2 mb-lg-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                        odio. Quisque volutpat mattis eros. Nullam<br />malesuada erat ut turpis. Suspendisse urna nibh,
                        viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis<br />facilisis
                        fermentum. Aliquam porttitor mauris sit amet orci.</p>
                    <ALink href="/shop/sidebar/list" className="btn font-size-normal letter-spacing-large btn-dark btn-primary my-4">SEE WHAT'S NEW</ALink>
                </div>
            </div>

            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <div className="container pt-3 pt-md-7 small-group">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-9 col-12 popular mb-3 mb-lg-0">
                            <div className="heading heading-center">
                                <h2 className="title text-uppercase mb-3">Popular Products</h2>
                                <span className="cross-txt position-relative py-2 pb-0">
                                    <i className="la la-diamond h5 mb-0"></i>
                                </span>
                            </div>

                            <div>
                                {
                                    products ?
                                        products.slice( 0, 3 ).map( ( item, index ) =>
                                            <ProductThirteen product={ item } key={ "ProductThirteen" + index } />
                                        )
                                        :
                                        new Array( 3 ).fill( 1 ).map( ( item, index ) => (
                                            <div className="skel-pro skel-product-col mb-2" key={ "Skeleton" + index }></div>
                                        ) )
                                }
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-10 col-12 lookbook order-lg-0 order-md-last mb-3 mb-lg-0">
                            <div className="heading heading-center">
                                <h2 className="title text-uppercase mb-3">Lookbook</h2>
                                <span className="cross-txt position-relative py-2 pb-0">
                                    <i className="la la-diamond h5 mb-0"></i>
                                </span>
                            </div>

                            <OwlCarousel adClass="owl-simple owl-nav-inside">
                                <div className="banner banner-overlay bg-image" style={ { backgroundImage: 'url(images/home/banners/banner-6.jpg)' } }>
                                    <div className="banner-content text-center banner-content-center pb-0 pb-lg-1">
                                        <div className="my-3">
                                            <span className="banner-dot position-relative d-inline-block"></span>
                                            <span className="banner-dot position-relative d-inline-block"></span>
                                            <span className="banner-dot position-relative d-inline-block"></span>
                                        </div>
                                        <h4
                                            className="banner-subtitle font-size-normal letter-spacing-large text-white text-uppercase">
                                            Engagement &amp; Fashion<br />Jewelry</h4>
                                    </div>
                                </div>
                                <div className="banner banner-overlay bg-image" style={ { backgroundImage: 'url(images/home/banners/banner-7.jpg)' } } >
                                    <div className="banner-content text-center banner-content-center pb-0 pb-lg-1">
                                        <div className="my-3">
                                            <span className="banner-dot position-relative d-inline-block"></span>
                                            <span className="banner-dot position-relative d-inline-block"></span>
                                            <span className="banner-dot position-relative d-inline-block"></span>
                                        </div>
                                        <h4
                                            className="banner-subtitle font-size-normal letter-spacing-large text-white text-uppercase">
                                            We Crate Custom<br />Designs</h4>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-9 col-12 service mb-3 mb-lg-0">
                            <div className="heading heading-center">
                                <h2 className="title text-uppercase mb-3">Our Services</h2>
                                <span className="cross-txt position-relative py-2 pb-0">
                                    <i className="la la-diamond h5 mb-0"></i>
                                </span>
                            </div>
                            <div className="icon-boxes text-center">
                                <div className="icon-box justify-content-center d-flex flex-column mb-0 pt-4">
                                    <span className="icon-box-icon mb-1 text-dark"><i className="icon-truck"></i></span>
                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title font-size-normal letter-spacing-large text-uppercase">
                                            Payment &amp; Delivery</h3>
                                        <p className="font-weight-normal font-size-normal">Free shipping for orders over $50
								</p>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-boxes text-center">
                                <div className="icon-box justify-content-center d-flex flex-column mb-0 pt-4">
                                    <span className="icon-box-icon mb-1 text-dark"><i className="icon-rotate-left"></i></span>
                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title font-size-normal letter-spacing-large text-uppercase">
                                            Return & Refund</h3>
                                        <p className="font-weight-normal font-size-normal">Free 100% money back guarantee
								</p>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-boxes text-center">
                                <div className="icon-box justify-content-center d-flex flex-column mb-0 pt-4">
                                    <span className="icon-box-icon mb-1 text-dark"><i className="la la-unlock"></i></span>
                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title font-size-normal letter-spacing-large text-uppercase">
                                            Secure Payment</h3>
                                        <p className="font-weight-normal font-size-normal">10% secure payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>

            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <div className="container instagram-container mt-4 mt-md-8">
                    <hr className="mt-0 pb-6 mb-0" />
                    <div className="heading heading-center">
                        <h2 className="title my-2 text-uppercase">Shop by Instagram</h2>
                        <p className="font-weight-normal text-secondary">Shop Your New Look</p>
                    </div>

                    <OwlCarousel adClass="owl-simple mb-4 mt-5" options={ instagramSlider }>
                        <div className="instagram-feed lazy-media">
                            <figure className="mb-0">
                                <LazyLoadImage
                                    alt="instagram"
                                    src="images/home/instagram/instagram-1.jpg"
                                    threshold={ 200 }
                                    width="100%"
                                    height="auto"
                                    effect="blur"
                                />
                            </figure>

                            <div className="instagram-feed-content">
                                <a href="#" onClick={ e => { e.preventDefault(); } }><i className="icon-heart-o"></i>466</a>
                                <a href="#" onClick={ e => { e.preventDefault(); } }><i className="icon-comments"></i>65</a>
                            </div>
                        </div>

                        <div className="instagram-feed lazy-media">
                            <figure className="mb-0">
                                <LazyLoadImage
                                    alt="instagram"
                                    src="images/home/instagram/instagram-2.jpg"
                                    threshold={ 200 }
                                    width="100%"
                                    height="auto"
                                    effect="blur"
                                />
                            </figure>

                            <div className="instagram-feed-content">
                                <a href="#" onClick={ e => { e.preventDefault(); } }><i className="icon-heart-o"></i>39</a>
                                <a href="#" onClick={ e => { e.preventDefault(); } }><i className="icon-comments"></i>78</a>
                            </div>
                        </div>

                        <div className="instagram-feed lazy-media">
                            <figure className="mb-0">
                                <LazyLoadImage
                                    alt="instagram"
                                    src="images/home/instagram/instagram-3.jpg"
                                    threshold={ 200 }
                                    width="100%"
                                    height="auto"
                                    effect="blur"
                                />
                            </figure>

                            <div className="instagram-feed-content">
                                <a href="#" onClick={ e => { e.preventDefault(); } }><i className="icon-heart-o"></i>691</a>
                                <a href="#" onClick={ e => { e.preventDefault(); } }><i className="icon-comments"></i>87</a>
                            </div>
                        </div>

                        <div className="instagram-feed lazy-media">
                            <figure className="mb-0">
                                <LazyLoadImage
                                    alt="instagram"
                                    src="images/home/instagram/instagram-4.jpg"
                                    threshold={ 200 }
                                    width="100%"
                                    height="auto"
                                    effect="blur"
                                />
                            </figure>

                            <div className="instagram-feed-content">
                                <a href="#" onClick={ e => { e.preventDefault(); } }><i className="icon-heart-o"></i>508</a>
                                <a href="#" onClick={ e => { e.preventDefault(); } }><i className="icon-comments"></i>124</a>
                            </div>
                        </div>

                        <div className="instagram-feed lazy-media">
                            <figure className="mb-0">
                                <LazyLoadImage
                                    alt="instagram"
                                    src="images/home/instagram/instagram-5.jpg"
                                    threshold={ 200 }
                                    width="100%"
                                    height="auto"
                                    effect="blur"
                                />
                            </figure>

                            <div className="instagram-feed-content">
                                <a href="#" onClick={ e => { e.preventDefault(); } }><i className="icon-heart-o"></i>433</a>
                                <a href="#" onClick={ e => { e.preventDefault(); } }><i className="icon-comments"></i>27</a>
                            </div>
                        </div>
                    </OwlCarousel>

                    <div className="text-center mb-5">
                        <a className="btn" href="#" onClick={ e => { e.preventDefault(); } }>@Silver Spirit INSTAGRAM</a>
                    </div>
                </div>
            </Reveal>

            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( Home );