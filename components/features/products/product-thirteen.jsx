import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/alink';

import { actions as demoAction } from '~/store/demo';

function ProductThirteen ( props ) {
    const { product } = props;
    const [ maxPrice, setMaxPrice ] = useState( 0 );
    const [ minPrice, setMinPrice ] = useState( 99999 );

    useEffect( () => {
        let min = minPrice;
        let max = maxPrice;
        product.variants.map( item => {
            if ( min > item.price ) min = item.price;
            if ( max < item.price ) max = item.price;
        }, [] );

        if ( product.variants.length == 0 ) {
            min = product.sale_price
                ? product.sale_price
                : product.price;
            max = product.price;
        }

        setMinPrice( min );
        setMaxPrice( max );
    }, [] )

    return (
        <div className="product product-sm bg-white shadow-none product-list align-items-start">
            <figure className="product-media">
                <ALink href={ `/product/default/${product.slug}` }>
                    <LazyLoadImage
                        alt="product"
                        src={ process.env.NEXT_PUBLIC_ASSET_URI + product.sm_pictures[ 0 ].url }
                        threshold={ 500 }
                        effect="black and white"
                        wrapperClassName="product-image"
                    />
                    {
                        product.sm_pictures.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src={ process.env.NEXT_PUBLIC_ASSET_URI + product.sm_pictures[ 1 ].url }
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
                    }
                </ALink>
            </figure>

            <div className="product-body">
                <div className="product-cat text-left">
                    <h3 className="product-title font-size-normal mb-1">
                        <ALink href={ `/product/default/${product.slug}` }>{ product.name }</ALink>
                    </h3>

                    <div className="ratings-container justify-content-start">
                        <div className="ratings">
                            <div className="ratings-val" style={ { width: product.ratings * 20 + '%' } }></div>
                            <span className="tooltip-text">{ product.ratings.toFixed( 2 ) }</span>
                        </div>
                        <span className="ratings-text">( { product.review } Reviews )</span>
                    </div>

                    {
                        product.stock == 0 ?
                            <div className="product-price font-size-normal text-dark justify-content-start">
                                <span className="out-price">${ product.price.toFixed( 2 ) }</span>
                            </div>
                            :
                            minPrice == maxPrice ?
                                <div className="product-price font-size-normal text-dark justify-content-start">${ minPrice.toFixed( 2 ) }</div>
                                :
                                product.variants.length == 0 ?
                                    <div className="product-price font-size-normal text-dark justify-content-start">
                                        <span className="new-price">${ minPrice.toFixed( 2 ) }</span>
                                        <span className="old-price">${ maxPrice.toFixed( 2 ) }</span>
                                    </div>
                                    :
                                    <div className="product-price font-size-normal text-dark justify-content-start">${ minPrice.toFixed( 2 ) }&ndash;${ maxPrice.toFixed( 2 ) }</div>
                    }
                </div>
            </div>
        </div>
    )
}
export default connect( null, { ...demoAction } )( ProductThirteen );