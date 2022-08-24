import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';
import { images } from '../../assets';

const Products = () => {
    const [isLoading, data, getAllProduct] = useProduct();
    useEffect(() => {
        if (data.length < 1) {
            getAllProduct(1, 12, '', '');
        }
    }, [data.length, getAllProduct]);
    return isLoading ? (
        <div className="my-12">
            <div className="flex items-center justify-center space-x-2 animate-bounce">
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </div>
        </div>
    ) : (
        <div className="my-12">
            <div className="products">
                <h1>Products</h1>
                <div className="product-items">
                    {data?.map((product) => (
                        <Link to={`/detail/${product.id}`} key={product.id}>
                            <div className="card product-item">
                                <img
                                    className="product-img"
                                    src={images[product.image] || product.image}
                                    alt=""
                                />
                                <p>{product.name}</p>
                                <h4>${product.price}</h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
