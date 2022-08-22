import React from 'react';
import CardProduct from '../../components/Card';
import { images } from '../../assets';

const Products = () => {
    return (
        <div className="my-12">
            <div className="products">
                <h1>Products</h1>
                <div className="product-items">
                    <CardProduct
                        image={images['brazil-dark-ground.jpg']}
                        title="Brazil Dark Ground"
                        price="$19.99"
                    />

                    <CardProduct
                        image={images['breakfast-medium-roast.jpg']}
                        title="Breakfast Medium Roast"
                        price="$19.99"
                    />

                    <CardProduct
                        image={images['costarica-light-roast.jpg']}
                        title="Costarica Light Roast"
                        price="$19.99"
                    />

                    <CardProduct
                        image={images['decaf-espresso.jpg']}
                        title="Decaf Espresso"
                        price="$19.99"
                    />

                    <CardProduct
                        image={images['espresso-roast-blend.jpg']}
                        title="Espresso Roast Blend"
                        price="$19.99"
                    />

                    <CardProduct
                        image={images['french-roast.jpg']}
                        title="French Roast"
                        price="$19.99"
                    />

                    <CardProduct
                        image={images['hazelnut-coffe.jpg']}
                        title="Hazelnut Coffe"
                        price="$19.99"
                    />

                    <CardProduct
                        image={images['jamaica-blue.jpg']}
                        title="Jamaica Blue"
                        price="$19.99"
                    />

                    <CardProduct
                        image={images['organic-mexico.jpg']}
                        title="Organic Mexico"
                        price="$29.99"
                    />
                </div>
            </div>
        </div>
    );
};

export default Products;
