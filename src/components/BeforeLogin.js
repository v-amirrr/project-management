import React from 'react';
import styles from "./BeforeLogin.module.css";

import { Link } from 'react-router-dom';

const BeforeLogin = () => {
    return (
        <>
            <div className={styles["hpmepage-beforelogin"]}>
                <div>
                    <Link to="/signup">
                        <div>Start</div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BeforeLogin;