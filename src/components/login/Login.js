import React, { useState } from 'react';
import styles from "./Login.module.css";

import { Outlet, useNavigate, Link } from 'react-router-dom';

import { MdKeyboardArrowLeft } from "react-icons/md";

import { motion } from 'framer-motion';

const singupVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, type: "tween" } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.4, type: "tween" } }
}

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {}

    return (
        <>
            <div className={styles["login-page"]}>
                <motion.div className={styles["login"]} initial="hidden" animate="visible" exit="exit" variants={singupVariants}>
                    <div className={styles["login-top"]}>
                        <div className={styles["title"]}>Login</div>

                        <motion.div className={styles["go-back-button"]} onClick={() => navigate(-1)} whileHover={{ scale: 1.2 ,transition: { duration: 0.00001 } }} whileTap={{ scale: 0.7 ,transition: { duration: 0.00001 } }}>
                            <MdKeyboardArrowLeft />
                        </motion.div>
                    </div>

                    <div className={styles["form"]}>
                        <div className={styles["inputs"]}>
                            <div className={styles["input"]}>
                                <input placeholder=" " type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                                <span className={styles["placeholder"]}>Email</span>
                            </div>

                            <div className={styles["input"]}>
                                <input placeholder=" " type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                                <span className={styles["placeholder"]}>Password</span>
                            </div>
                        </div>

                        <motion.div className={styles["submit"]} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.7 }} onClick={login}>Login</motion.div>
                    </div>


                    <div className={styles["login-bottom"]}>
                        <p>Don't have an account? <Link to="/signup/options"><div className='link'>Create an Account</div></Link></p>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Login;