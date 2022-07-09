import React, { useEffect, useState } from 'react';
import styles from "./ErrorPopup.module.css";

import { IoClose } from 'react-icons/io5';

import { AnimatePresence, motion } from 'framer-motion';

const popupVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, type: "tween" } },
    exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.4, type: "tween" } }
}

const ErrorPopup = ({ error }) => {

    const [show, setShow] = useState(false);
    
    useEffect(() => {
        if (error) {
            setShow(true)
        }
    }, [error]);

    const closeErrorPopup = () => {
        setShow(false)
    }

    return (
        <>
        <AnimatePresence>

            {
                show
                &&
                <motion.div className={styles["error-page"]} initial="hidden" animate="visible" exit="exit" variants={popupVariants}>
                    <div className={styles["error-popup"]}>
                        <p>{error}</p>
                        <span onClick={closeErrorPopup}><IoClose /></span>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
        </>
    );
};

export default ErrorPopup;