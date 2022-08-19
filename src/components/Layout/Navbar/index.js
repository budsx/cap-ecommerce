import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, logout } from '../../../config/firebase';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
    // eslint-disable-next-line no-unused-vars
    const [name, setName] = useState('');
    const [user, loading] = useAuthState(auth);
    // const navigate = useNavigate();
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
        // if (!user) return navigate('/login');
        if (user) {
            isUserExist();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, loading]);

    return (
        <div>
            <nav className="navbar">
                <Link to="/">
                    <Logo logo="99COFFE" />
                </Link>
                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className="hamburger">
                        &#9776;
                    </label>
                    <div className="menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        {user ? (
                            <Link to="/cart">
                                <img
                                    src="/assets/img/shop-cart.svg"
                                    alt="shop"
                                    width={'20px'}
                                />
                            </Link>
                        ) : (
                            ''
                        )}

                        {user ? (
                            <li className="logout" onClick={logout}>
                                Logout
                            </li>
                        ) : (
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        )}
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
