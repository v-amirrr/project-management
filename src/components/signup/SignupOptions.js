import React from 'react';
import styles from "./SignupOptions.module.css";

import { useNavigate } from "react-router-dom";

import ErrorPopup from '../ErrorPopup';

import useSignupWithGoogle from '../../hooks/useSignupWithGoogle';

import { FcGoogle } from "react-icons/fc";
import { GrMail } from "react-icons/gr";
import { ImGithub } from "react-icons/im";

import { motion } from 'framer-motion';

const SignupOptions = () => {

    const navigate = useNavigate();
    const { googleError, signInWithGoogle } = useSignupWithGoogle();

    return (
        <>
            <div className={styles["options"]}>
                <motion.div onClick={() => navigate("/signup/form")} whileTap={{ scale: 0.9, transition: { duration: 0.00001 } }}> 
                    <span><GrMail /></span>
                    <p>Sign Up With Email</p>
                </motion.div>

                <motion.div onClick={signInWithGoogle} whileTap={{ scale: 0.9, transition: { duration: 0.00001 } }}>
                    <span><FcGoogle /></span>
                    <p>Sign Up With Google</p>
                </motion.div>

                <motion.div whileTap={{ scale: 0.9, transition: { duration: 0.00001 } }}>
                    <span><ImGithub /></span>
                    <p>Sign Up With GitHub</p>
                </motion.div>

                {/* <ErrorPopup error={googleError} /> */}
            </div>            
        </>
    );
};

export default SignupOptions;