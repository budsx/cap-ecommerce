import { initializeApp } from 'firebase/app';

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
    apiKey: 'AIzaSyCsQ0q2iAVeb1LdE2XeohFNsKNKousAqG8',
    authDomain: 'cap-eco-auth.firebaseapp.com',
    projectId: 'cap-eco-auth',
    storageBucket: 'cap-eco-auth.appspot.com',
    messagingSenderId: '963644960366',
    appId: '1:963644960366:web:d652a2880496d7da47007f',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const notify = (msg) =>
    toast.error(msg, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored',
    });

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error.message);
        notify('Invalid email or password');
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, 'users'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        });
    } catch (error) {
        notify(error.message);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
};
