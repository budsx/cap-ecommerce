import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword } from '../../config/firebase';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const register = async () => {
        if (!name) alert('Name is required');
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            navigate('/products');
        }
    }, [loading, navigate, user]);

    return (
        <div className="my-32">
            <div className="container">
                <div className="register">
                    <div className="register-form">
                        <h1>Register</h1>
                        <div className="register-input">
                            <label htmlFor="name">
                                <b>Name</b>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor="email">
                                <b>Email</b>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="psw">
                                <b>Password</b>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="psw"
                                id="psw"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button onClick={register} className="registerbtn">
                                Register
                            </button>
                            <div className="signin">
                                <p>
                                    Already have an account?{' '}
                                    <a href="login">Sign in</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
