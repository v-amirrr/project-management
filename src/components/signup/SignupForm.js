import React, { useState } from 'react';
import styles from "./SignupForm.module.css";

import { motion } from 'framer-motion';

const SignupForm = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const signup = () => {}

    return (
        <>
            <div className={styles["form"]}>
                <div className={styles["inputs"]}>
                    <div className={styles["input"]}>
                        <input placeholder=" " type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                        <span className={styles["placeholder"]}>Username</span>
                    </div>

                    <div className={styles["input"]}>
                        <input placeholder=" " type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <span className={styles["placeholder"]}>Email</span>
                    </div>

                    <div className={styles["input"]}>
                        <input placeholder=" " type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                        <span className={styles["placeholder"]}>Password</span>
                    </div>

                    <div className={styles["input"]}>
                        <input placeholder=" " type="password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)}/>
                        <span className={styles["placeholder"]}>Confirm</span>
                    </div>
                </div>

                <motion.div className={styles["submit"]} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.7 }} onClick={signup}>Create</motion.div>
            </div>
        </>
    );
};

export default SignupForm;