import React from 'react';

import AfterLogin from './AfterLogin';
import BeforeLogin from "./BeforeLogin";

import useAuthContext from "../../hooks/useAuthContext";

const Homepage = () => {

    const { user } = useAuthContext();

    return (
        <>
            {
                user
                ?
                <AfterLogin />
                :
                <BeforeLogin />
            }
        </>
    );
};

export default Homepage;