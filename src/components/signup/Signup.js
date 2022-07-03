import React from 'react';
import styles from "./Signup.module.css";

import { Outlet, useNavigate } from 'react-router-dom';

import { MdKeyboardArrowLeft } from "react-icons/md";

import SignupForm from './SignupForm';
import SignupOptions from './SignupOptions';

const Signup = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles["signup"]}>
                <div className={styles["go-back-button"]} onClick={() => navigate(-1)}>
                    <MdKeyboardArrowLeft />
                </div>
                
                <Outlet />
            </div>
        </>
    );
};

export default Signup;