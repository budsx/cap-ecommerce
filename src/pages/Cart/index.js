import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../config/firebase';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const Cart = () => {
    // eslint-disable-next-line no-unused-vars
    const [name, setName] = useState('');
    const [user, loading] = useAuthState(auth);
    const [count, setCount] = useState(1);
    const navigate = useNavigate();
    // check if user is exist or not
    const isUserExist = async () => {
        try {
            const q = query(
                collection(db, 'users'),
                where('uid', '==', user?.uid)
            );
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (error) {
            console.log(error);
            alert('Error in getting user data');
        }
    };

    useEffect(() => {
        if (loading) {
            return;
        }
        if (!user) return navigate('/login');
        if (user) {
            isUserExist();
            navigate('/cart');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, loading]);
    return (
        <div className="my-12">
            <div className="cart">
                <div className="cart-header">
                    <h1>Order</h1>
                </div>
                <div className="cart-product-head">
                    <h3>Product</h3>
                    <h3>Total</h3>
                </div>
                <div className="cart-body">
                    <div className="cart-detail">
                        <img
                            className="cart-img"
                            src="https://images-platform.99static.com//7VDQLeaeWN0pK5kN2Zvy09IAs_U=/133x180:1066x1113/fit-in/500x500/99designs-contests-attachments/114/114421/attachment_114421549"
                            alt=""
                        />
                        <div className="cart-description">
                            <p>White Roasters Coffe - Regular Coffe</p>
                            <h4>$19.99</h4>

                            <div className="flex flex-wrap">
                                <div className="flex w-2/12">
                                    <input
                                        type="number"
                                        readOnly={true}
                                        value={count}
                                        className="bg-white text-sm text-gray-900 text-center focus:outline-none border border-gray-800 focus:border-gray-600 rounded-l-md w-full"
                                    />
                                </div>
                                <div className="flex flex-col w-1/12">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-total">
                        <h4>$19.99</h4>
                    </div>
                </div>
                <div className="cart-body">
                    <div className="cart-detail">
                        <img
                            className="cart-img"
                            src="https://images-platform.99static.com//7VDQLeaeWN0pK5kN2Zvy09IAs_U=/133x180:1066x1113/fit-in/500x500/99designs-contests-attachments/114/114421/attachment_114421549"
                            alt=""
                        />
                        <div className="cart-description">
                            <p>White Roasters Coffe - Regular Coffe</p>
                            <h4>$19.99</h4>
                            <div className="flex flex-wrap">
                                <div className="flex w-2/12">
                                    <input
                                        type="number"
                                        min={1}
                                        onChange={true}
                                        value={count}
                                        className="bg-white text-sm text-gray-900 text-center focus:outline-none border border-gray-800 focus:border-gray-600 rounded-l-md w-full"
                                    />
                                </div>
                                <div className="flex flex-col w-1/12">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-total">
                        <h4>$19.99</h4>
                    </div>
                    <div className="cart-subtotal">
                        <h3>Subtotal</h3>
                    </div>
                    <div className="cart-subtotal">
                        <h4>$19.99</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
