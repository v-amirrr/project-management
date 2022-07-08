import React from 'react';
import styles from "./Signup.module.css";

import { Outlet, useNavigate, Link } from 'react-router-dom';

import { MdKeyboardArrowLeft } from "react-icons/md";

import { motion } from 'framer-motion';

const singupVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, type: "tween" } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.4, type: "tween" } }
}

const Signup = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles["signup-page"]}>
                <motion.div className={styles["signup"]} initial="hidden" animate="visible" exit="exit" variants={singupVariants}>
                    <div className={styles["signup-top"]}>
                        <div className={styles["title"]}>Sign Up</div>

                        <motion.div className={styles["go-back-button"]} onClick={() => navigate(-1)} whileHover={{ scale: 1.2 ,transition: { duration: 0.00001 } }} whileTap={{ scale: 0.7 ,transition: { duration: 0.00001 } }}>
                            <MdKeyboardArrowLeft />
                        </motion.div>
                    </div>
                    
                    <Outlet />

                    <div className={styles["signup-bottom"]}>
                        <div>Already have an account? <Link to="/login"><div className='link'>Login</div></Link></div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Signup;