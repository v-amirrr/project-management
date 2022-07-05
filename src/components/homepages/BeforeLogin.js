import React from 'react';
import styles from "./BeforeLogin.module.css";

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const beforeloginVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
}

const textVariants = {
    hidden: { opacity: 0, scale: 0.9, y: -50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: "tween" } },
    exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.5, type: "tween" } }
}

const BeforeLogin = () => {
    return (
        <>
            <motion.div className={styles["homepage-beforelogin"]} initial="hidden" animate="visible" exit="exit" variants={beforeloginVariants}>
                <motion.div className={styles["homepage-text"]} variants={textVariants}>
                    <div className={styles["title"]}>PROJECT MANAGEMENT</div>
                    <Link to="/signup/options">
                        <motion.div className={styles["start-button"]} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.7 }}>START</motion.div>
                    </Link>
                </motion.div>
            </motion.div>
        </>
    );
};

export default BeforeLogin;