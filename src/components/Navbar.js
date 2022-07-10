import React from 'react';
import styles from "./Navbar.module.css";

import { FaUserAlt } from 'react-icons/fa';

import { motion } from 'framer-motion';

const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.4, type: "tween" } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.4, type: "tween" } }
}

const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.4, type: "tween" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.4, type: "tween" } }
}

const Navbar = () => {
    return (
        <>
            <div className={styles["navbar"]} initial="hidden" animate="visible" exit="exit">
                <motion.div variants={titleVariants} className={styles["title"]}>PROJECT MANGEMENT</motion.div>
                <motion.div variants={buttonVariants} className={styles["profile"]}>
                    <FaUserAlt />
                </motion.div>
            </div>
        </>
    );
};

export default Navbar;