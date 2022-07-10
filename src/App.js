import React from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Homepage from './components/homepages/Homepage';
import Signup from './components/signup/Signup';
import SignupForm from './components/signup/SignupForm';
import SignupOptions from './components/signup/SignupOptions';
import Login from './components/login/Login';
import SignupImage from './components/signup/SignupImage';

import AuthContextProvider from "./context/AuthContext";

const App = () => {

    const location = useLocation();

    return (
        <>
            <AuthContextProvider>
                <AnimatePresence exitBeforeEnter>
                    <Routes location={location} key={location.key}>

                        <Route path='/' element={<Homepage />} />
                        <Route path='/signup' element={<Signup />}>
                            <Route path="options" element={<SignupOptions />} />
                            <Route path="form" element={<SignupForm />} />
                        </Route>
                        <Route path='/login' element={<Login />} />
                        <Route path="/signup/image" element={<SignupImage />} />
                        
                    </Routes>
                </AnimatePresence>
            </AuthContextProvider>
        </>
    );
};

export default App;