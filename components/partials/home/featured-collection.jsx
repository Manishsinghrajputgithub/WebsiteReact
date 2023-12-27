import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

// Import Custom Component
import OwlCarousel from '~/components/features/owl-carousel';
import ProductTwelve from '~/components/features/products/product-twelve';

// Import Utils
import { catFilter } from '~/utils';
import { productSlider } from '~/utils/data';

function FeaturedCollection ( props ) {
    const { products } = props;

    return (
        <Tabs defaultIndex={ 0 } selectedTabClassName="show" >
            <div className="seller pt-5 pt-md-6 pb-1 pb-lg-3 my-2 mt-0">
                <div className="container">
                    <div className="heading heading-center mb-5">
                        <h2 className="title text-uppercase mb-3">Best Sellers</h2>

                        <TabList className="nav nav-pills justify-content-center">
                            <Tab className="nav-item">
                                <span className="nav-link font-size-normal letter-spacing-large">All</span>
                            </Tab>

                            <Tab className="nav-item">
                                <span className="nav-link font-size-normal letter-spacing-large">Rings</span>
                            </Tab>

                            <Tab className="nav-item">
                                <span className="nav-link font-size-normal letter-spacing-large">Necklace</span>
                            </Tab>

                            <Tab className="nav-item">
                                <span className="nav-link font-size-normal letter-spacing-large">Earrings</span>
                            </Tab>
                        </TabList>
                    </div>

                    <div className="tab-content tab-content-carousel">
                        <TabPanel>
                            <OwlCarousel adClass="owl-simple" options={ productSlider }>
                                {
                                    products.length > 0 ?
                                        products.slice( 0, 6 ).map( ( item, index ) =>
                                            <ProductTwelve product={ item } key={ "Latest:" + index } />
                                        )
                                        :
                                        new Array( 6 ).fill( 1 ).map( ( item, index ) => (
                                            <div className="skel-pro" key={ "Skeleton" + index }></div>
                                        ) )
                                }
                            </OwlCarousel>
                        </TabPanel>

                        <TabPanel>
                            <OwlCarousel adClass="owl-simple" options={ productSlider }>
                                {
                                    products.length > 0 ?
                                        catFilter( products, [ 'ring' ] ).slice( 0, 6 ).map( ( item, index ) =>
                                            <ProductTwelve product={ item } key={ "ring:" + index } />
                                        )
                                        :
                                        new Array( 6 ).fill( 1 ).map( ( item, index ) => (
                                            <div className="skel-pro" key={ "Skeleton" + index }></div>
                                        ) )
                                }
                            </OwlCarousel>
                        </TabPanel>

                        <TabPanel>
                            <OwlCarousel adClass="owl-simple" options={ productSlider }>
                                {
                                    products.length > 0 ?
                                        catFilter( products, [ 'necklace' ] ).slice( 0, 6 ).map( ( item, index ) =>
                                            <ProductTwelve product={ item } key={ "necklace:" + index } />
                                        )
                                        :
                                        new Array( 6 ).fill( 1 ).map( ( item, index ) => (
                                            <div className="skel-pro" key={ "Skeleton" + index }></div>
                                        ) )
                                }
                            </OwlCarousel>
                        </TabPanel>

                        <TabPanel>
                            <OwlCarousel adClass="owl-simple" options={ productSlider }>
                                {
                                    products.length > 0 ?
                                        catFilter( products, [ 'earrings' ] ).slice( 0, 6 ).map( ( item, index ) =>
                                            <ProductTwelve product={ item } key={ "earrings:" + index } />
                                        )
                                        :
                                        new Array( 6 ).fill( 1 ).map( ( item, index ) => (
                                            <div className="skel-pro" key={ "Skeleton" + index }></div>
                                        ) )
                                }
                            </OwlCarousel>
                        </TabPanel>

                    </div>
                </div>
            </div>
        </Tabs>
    )
}

export default FeaturedCollection;
