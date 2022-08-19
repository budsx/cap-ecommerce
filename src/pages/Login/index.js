import React, { useState, useEffect } from 'react';
import { auth, logInWithEmailAndPassword } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            return;
        }

        if (user) navigate('/products');
    }, [loading, user, navigate]);

    return (
        <div>
            <div className="register">
                <div className="register-form">
                    <h1>Login</h1>
                    <div className="register-input">
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
                        <button
                            onClick={() =>
                                logInWithEmailAndPassword(email, password)
                            }
                            className="registerbtn">
                            Login
                        </button>
                        <div class="signin">
                            <p>
                                Create an account?{' '}
                                <a href="/register">Register</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
