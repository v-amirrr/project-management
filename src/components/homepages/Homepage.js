import React, { useEffect } from 'react';

import AfterLogin from './AfterLogin';
import BeforeLogin from "./BeforeLogin";

import useAuthContext from "../../hooks/useAuthContext";

const userLocal = JSON.parse(localStorage.getItem('user'));

const Homepage = () => {

    const { dispatch, user } = useAuthContext();

    useEffect(() => {
        if (userLocal) {
            dispatch({ type: "LOGIN", payload: JSON.parse(localStorage.getItem('user'))});
        } else if(userLocal === false) {
            dispatch({ type: "LOGOUT" });
        }
    }, []);


    return (
        <>
            {
                !!localStorage.getItem('user')
                ?
                <AfterLogin />
                :
                <BeforeLogin />
            }
        </>
    );
};

export default Homepage;