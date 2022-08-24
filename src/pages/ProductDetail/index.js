import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { images } from '../../assets';
import { useDetailProduct } from '../../hooks/useProduct';

const ProductDetail = () => {
    const { id } = useParams();
    const [isLoading, dataDetail, getProductById] = useDetailProduct();

    const getDetail = async () => {
        await getProductById(id);
    };
    useEffect(() => {
        getDetail();
    }, [id]);

    return (
        <div className="my-12">
            <div className="product-detail">
                <div className="product-detail-img">
                    <img
                        src={images[dataDetail?.image] || dataDetail.image}
                        alt=""
                    />
                </div>
                <div className="product-detail-desc">
                    <h1>{dataDetail?.name}</h1>
                    <p className="product-title">{dataDetail?.desc}</p>

                    {/* <input type="number" className="border-2 py-1 px-0" /> */}
                    <div className="flex flex-wrap">
                        <div className="flex w-1/12">
                            <input
                                type="number"
                                defaultValue={''}
                                className="bg-white text-sm text-gray-900 text-center focus:outline-none border border-gray-800 focus:border-gray-600 rounded-l-md w-full"
                            />
                        </div>
                        <div className="flex flex-col w-1/12">
                            <button className="text-white text-center text-md font-semibold rounded-tr-md px-1 bg-gray-800 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600">
                                +
                            </button>
                            <button className="text-white text-center text-md font-semibold rounded-br-md px-1 bg-gray-800 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600">
                                -
                            </button>
                        </div>
                    </div>
                    <h4 className="product-price">${dataDetail?.price}</h4>
                    <button className="btn-atc">
                        <Link to="/cart">Add to cart</Link>
                    </button>
                </div>
            </div>

            <div className="related-product">
                <h2>Related Product</h2>
                <div className="product-items">
                    {/* {data?.map((product) => (
                        <Link to={`/detail/${product.id}`}>
                            <div className="card product-item" key={product.id}>
                                <img
                                    className="product-img"
                                    src={images[product.image] || product.image}
                                    alt=""
                                />
                                <p>{product.name}</p>
                                <h4>${product.price}</h4>
                            </div>
                        </Link>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
