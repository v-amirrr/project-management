import React from 'react';
import styles from "./AfterLogin.module.css";

import Navbar from '../Navbar';

const AfterLogin = () => {
    return (
        <>
            <div className={styles["afterlogin"]}>
                <div className={styles["navbar"]}>
                    <Navbar />
                </div>
            </div>
        </>
    );
};

export default AfterLogin;