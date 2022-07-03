import React from 'react';

import { Routes, Route } from 'react-router-dom';

import BeforeLogin from './components/BeforeLogin';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<BeforeLogin />} />
            </Routes>
        </>
    );
};

export default App;