import { initializeApp } from 'firebase/app';

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCsQ0q2iAVeb1LdE2XeohFNsKNKousAqG8',
    authDomain: 'cap-eco-auth.firebaseapp.com',
    projectId: 'cap-eco-auth',
    storageBucket: 'cap-eco-auth.appspot.com',
    messagingSenderId: '963644960366',
    appId: '1:963644960366:web:d652a2880496d7da47007f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error.message);
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
        console.log(error);
        alert(error.message);
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
