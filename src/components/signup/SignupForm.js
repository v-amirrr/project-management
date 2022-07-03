import React from 'react';
import styles from "./SignupForm.module.css";

const SignupForm = () => {
    return (
        <>
            <div className={styles["form"]}>
                <div className={styles["title"]}>Create An Account</div>
                <div className={styles["inputs"]}>
                    <div className={styles["input"]}>
                        <input type="text" />
                        <span>Username</span>
                    </div>

                    <div className={styles["input"]}>
                        <input type="email" />
                        <span>Email</span>
                    </div>

                    <div className={styles["input"]}>
                        <input type="password" />
                        <span>Password</span>
                    </div>

                    <div className={styles["input"]}>
                        <input type="password" />
                        <span>Confirm</span>
                    </div>
                </div>

                <div className={styles["submit"]}>Create</div>
            </div>
        </>
    );
};

export default SignupForm;