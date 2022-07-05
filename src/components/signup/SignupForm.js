import React from 'react';
import styles from "./SignupForm.module.css";

import { motion } from 'framer-motion';

const SignupForm = () => {
    return (
        <>
            <div className={styles["form"]}>
                <div className={styles["inputs"]}>
                    <div className={styles["input"]}>
                        <input placeholder=" " type="text" />
                        <span className={styles["placeholder"]}>Username</span>
                    </div>

                    <div className={styles["input"]}>
                        <input placeholder=" " type="email" />
                        <span className={styles["placeholder"]}>Email</span>
                    </div>

                    <div className={styles["input"]}>
                        <input placeholder=" " type="password" />
                        <span className={styles["placeholder"]}>Password</span>
                    </div>

                    <div className={styles["input"]}>
                        <input placeholder=" " type="password" />
                        <span className={styles["placeholder"]}>Confirm</span>
                    </div>
                </div>

                <motion.div className={styles["submit"]} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.7 }}>Create</motion.div>
            </div>
        </>
    );
};

export default SignupForm;