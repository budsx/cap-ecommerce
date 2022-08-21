import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { auth, db, logout } from '../../../config/firebase';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
    // eslint-disable-next-line no-unused-vars
    const [name, setName] = useState('');
    const [user, loading] = useAuthState(auth);
    const [open, setOpen] = useState(false);
    // check if user is exist or not
    const isUserExist = async () => {
        try {
            const getUser = query(
                collection(db, 'users'),
                where('uid', '==', user?.uid)
            );
            const doc = await getDocs(getUser);
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
        if (user) {
            isUserExist();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, loading]);

    return (
        <div className="shadow-md w-full fixed top-0 left">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <Link to="/">
                    <div
                        className="font-bold text-2xl cursor-pointer flex items-center
      text-gray-800">
                        <span className="text-3xl text-amber-800 mr-1 pt-2">
                            <ion-icon name="cafe-outline"></ion-icon>
                        </span>
                        <h1>99COFFE</h1>
                    </div>
                </Link>

                <div
                    className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                    onClick={() => {
                        setOpen(!open);
                    }}>
                    <ion-icon name={open ? 'close' : 'menu-sharp'}></ion-icon>
                </div>
                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0
                     w-full md:w-auto md:pl-0 pl-9 transition-all duration-75 ease-in ${
                         open ? 'top-20 ' : 'top-[-490px]'
                     }`}>
                    <li className="md:ml-8 text-lg md:my-0 my-7">
                        <Link
                            to="/"
                            className="hover:text-amber-800 duration-300">
                            Home
                        </Link>
                    </li>
                    <li className="md:ml-8 text-lg md:my-0 my-7">
                        <Link
                            to={'/products'}
                            className="hover:text-amber-800 duration-300">
                            Products
                        </Link>
                    </li>
                    {user ? (
                        <Link to={'/cart'}>
                            <li className="md:ml-8 text-lg md:my-0 my-7">
                                <ion-icon name="bag-outline"></ion-icon>
                            </li>
                        </Link>
                    ) : (
                        ''
                    )}

                    {user ? (
                        <li
                            className="md:ml-8 text-lg md:my-0 my-7 cursor-pointer"
                            onClick={logout}>
                            Logout
                            {/* <a
                                href="login"
                                className="hover:text-amber-800 duration-300">
                                Logout
                            </a> */}
                        </li>
                    ) : (
                        <li className="md:ml-8 text-lg md:my-0 my-7">
                            <Link
                                to={'/login'}
                                className="hover:text-amber-800 duration-300">
                                Signin
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
