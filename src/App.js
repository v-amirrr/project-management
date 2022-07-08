import React from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import BeforeLogin from './components/homepages/BeforeLogin';
import Signup from './components/signup/Signup';
import SignupForm from './components/signup/SignupForm';
import SignupOptions from './components/signup/SignupOptions';
import Login from './components/login/Login';

const App = () => {

    const location = useLocation();

    return (
        <>
            <AnimatePresence exitBeforeEnter>
                    <Routes location={location} key={location.key}>

                        <Route path='/' element={<BeforeLogin />} />
                        <Route path='/signup' element={<Signup />}>
                            <Route path="options" element={<SignupOptions />} />
                            <Route path="form" element={<SignupForm />} />
                        </Route>
                        <Route path='/login' element={<Login />} />
                        
                    </Routes>
            </AnimatePresence>
        </>
    );
};

export default App;