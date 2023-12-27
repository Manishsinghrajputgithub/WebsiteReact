import { useEffect } from "react";
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';

import 'react-image-lightbox/style.css';
import 'react-toastify/dist/ReactToastify.min.css';

import Header from "./partials/header/header";
import Footer from "./partials/footer/footer";
import VideoModal from "./features/modals/video-modal";
import QuickViewModal from "./features/modals/quickview-modal";
import QuickViewModalTwo from "./features/modals/quickview-modal-two";
import MobileMenu from "./features/mobile-menu";

import { actions } from '../store/demo';
import { isSafariBrowser, isEdgeBrowser } from "~/utils";

function Layout ( { children, hideQuick, hideVideo } ) {
    const router = useRouter( "" );
    let scrollTop;

    useEffect( () => {
        if ( router.pathname.includes( 'pages/coming-soon' ) ) {
            document.querySelector( "header" ).classList.add( "d-none" );
            document.querySelector( "footer" ).classList.add( "d-none" );
        } else {
            document.querySelector( "header" ).classList.remove( "d-none" );
            document.querySelector( "footer" ).classList.remove( "d-none" );
        }
    }, [ router.pathname ] )

    useEffect( () => {
        hideQuick();
        hideVideo();
        scrollTop = document.querySelector( '#scroll-top' );
        window.addEventListener( 'scroll', scrollHandler, false );
    }, [] )

    function toScrollTop () {
        if ( isSafariBrowser() || isEdgeBrowser() ) {
            let pos = window.pageYOffset;
            let timerId = setInterval( () => {
                if ( pos <= 0 ) clearInterval( timerId );
                window.scrollBy( 0, -120 );
                pos -= 120;
            }, 1 );
        } else {
            window.scrollTo( {
                top: 0,
                behavior: 'smooth'
            } );
        }
    }

    function scrollHandler () {
        if ( window.pageYOffset >= 400 ) {
            scrollTop.classList.add( 'show' );
        } else {
            scrollTop.classList.remove( 'show' );
        }
    }

    function hideMobileMenu () {
        document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
    }

    return (
        <>
            <div className="page-wrapper">
                <Header />

                { children }

                <Footer />
            </div>

            <div className="mobile-menu-overlay" onClick={ hideMobileMenu }></div>

            <button id="scroll-top" title="Back to top" onClick={ toScrollTop }>
                <i className="icon-arrow-up"></i>
            </button>

            <MobileMenu />

            <ToastContainer
                autoClose={ 3000 }
                duration={ 300 }
                newestOnTo={ true }
                className="toast-container"
                position="top-right"
                closeButton={ false }
                hideProgressBar={ true }
                newestOnTop={ true }
                draggable={ false }
            />

            {
                router.pathname === '/' ?
                    <QuickViewModalTwo />
                    :
                    <QuickViewModal />

            }

            <VideoModal />
        </>
    )
}

export default connect( null, { ...actions } )( Layout );