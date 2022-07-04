import React from 'react';
import styles from "./BeforeLogin.module.css";

import image from "../../assets/reshot-illustration-business-presentation-XC7LN58S2T-fd715-removebg.png";

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: [0, 1, 0.1], transition: { delay: 0.5, duration: 2, type: "tween" } },
    exit: {opacity: 0, transition: { duration: 0.5, type: "tween" }}
}

const textVariants = {
    hidden: { opacity: 0, scale: 0.9, y: -50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { delay: 2, duration: 0.5, type: "tween" } },
    exit: {opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.5, type: "tween" }}
}

const BeforeLogin = () => {
    return (
        <>
            <div className={styles["homepage-beforelogin"]}>
                <motion.img variants={imageVariants} initial="hidden" animate="visible" exit="exit" className={styles["image"]} src={image} alt="image" />
                
                <motion.div className={styles["homepage-text"]} variants={textVariants} initial="hidden" animate="visible" exit="exit">
                    <div className={styles["title"]}>PROJECT MANAGEMENT</div>
                    <Link to="/signup/options">
                        <motion.div className={styles["start-button"]} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.7 }}>START</motion.div>
                    </Link>
                </motion.div>
            </div>
        </>
    );
};

export default BeforeLogin;