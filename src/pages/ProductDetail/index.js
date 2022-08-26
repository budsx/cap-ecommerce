import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { images } from '../../assets';
import { useProduct, useDetailProduct } from '../../hooks/useProduct';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/product/action';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [isLoading, dataDetail, getProductById] = useDetailProduct();
    const [count, setCount] = useState(1);
    const [, dataResult, getAllProduct] = useProduct();
    console.log(dataDetail);
    const [order, setOrder] = useState({
        qty: 0,
    });

    const notify = (msg) =>
        toast.info(msg, {
            position: toast.POSITION.TOP_CENTER,
            theme: 'colored',
        });

    const dispatch = useDispatch();

    const getDetail = async () => {
        await getProductById(id);
    };

    const relatedProduct = async () => {
        await getAllProduct(1, 3, '', '');
    };
    useEffect(() => {
        getDetail();
        relatedProduct();
    }, [id]);

    const handleATC = () => {
        const { id, name, price, image } = dataDetail;
        const { qty } = order;
        const dataOrder = { id, name, price, image, qty };
        if (qty === 0) {
            alert('Please fill all field');
        } else {
            dispatch({
                type: 'ADD_TO_CART',
                value: dataOrder,
            });
            // alert('Added to cart');
            notify('Added To Cart');
        }
    };

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
            <ToastContainer />
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

                    <div className="flex flex-wrap">
                        <div className="flex w-1/12">
                            <input
                                type="number"
                                // readOnly={true}
                                // value={count}
                                min="1"
                                defaultValue={0}
                                onChange={(e) =>
                                    setOrder({ ...order, qty: e.target.value })
                                }
                                className="h-6 bg-white text-sm text-gray-900 text-center focus:outline-none border border-gray-800 focus:border-gray-600 rounded-l-md w-full"
                            />
                        </div>
                        {/* <div className="flex flex-col w-1/12">
                            <button
                                className="text-white text-center text-md font-semibold rounded-tr-md px-1 bg-amber-800 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600"
                                onClick={() => {
                                    setCount(count + 1);
                                }}>
                                +
                            </button>
                            <button
                                className="text-white text-center text-md font-semibold rounded-br-md px-1 bg-amber-800 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600"
                                onClick={() => {
                                    setCount(count - 1);
                                }}>
                                -
                            </button>
                        </div> */}
                    </div>
                    <h4 className="product-price">
                        ${dataDetail?.price * count}
                    </h4>
                    <button className="btn-atc" onClick={handleATC}>
                        Add to cart
                        {/* <Link to="/cart" onClick={handleATC}>
                        </Link> */}
                    </button>
                </div>
            </div>

            <div className="related-product">
                <h2>Related Product</h2>
                <div className="product-items">
                    {dataResult?.map((product) => (
                        <Link to={`/detail/${product.id}`} key={product.id}>
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
