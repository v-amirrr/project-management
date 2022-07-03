import React from 'react';
import styles from "./SignupOptions.module.css";

import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { GrMail } from "react-icons/gr";
import { ImGithub } from "react-icons/im";

const SignupOptions = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles["options"]}>
                <div className={styles["email"]} onClick={() => navigate("/signup/form")}>
                    <span><GrMail /></span>
                    <p>Sign Up With Email</p>
                </div>

                <div className={styles["google"]}>
                    <span><FcGoogle /></span>
                    <p>Sign Up With Google</p>
                </div>

                <div className={styles["github"]}>
                    <span><ImGithub /></span>
                    <p>Sign Up With GitHub</p>
                </div>
            </div>            
        </>
    );
};

export default SignupOptions;