import React from 'react';

import { Routes, Route } from 'react-router-dom';

import BeforeLogin from './components/BeforeLogin';
import Signup from './components/Signup';
import SignupForm from './components/SignupForm';
import SignupOptions from './components/SignupOptions';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<BeforeLogin />} />
                <Route path='/signup' element={<Signup />}>
                    <Route path="options" element={<SignupOptions />} />
                    <Route path="form" element={<SignupForm />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;