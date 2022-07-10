import React from 'react';
import styles from "./AfterLogin.module.css";

import Navbar from '../Navbar';

import { motion } from 'framer-motion';

const afterloginVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
}

const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, type: "tween" } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.4, type: "tween" } }
}

const AfterLogin = () => {
    return (
        <>
            <motion.div className={styles["afterlogin"]} initial="hidden" animate="visible" exit="exit" variants={afterloginVariants}>
                <motion.div className={styles["navbar"]} variants={navbarVariants}>
                    <Navbar />
                </motion.div>
            </motion.div>
        </>
    );
};

export default AfterLogin;