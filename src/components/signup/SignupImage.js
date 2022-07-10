import React, { useState } from 'react';
import styles from "./SignupImage.module.css";

import { useNavigate, Link } from 'react-router-dom';

import { MdCloudUpload } from "react-icons/md";

import { motion } from 'framer-motion';

const singupVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, type: "tween" } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.4, type: "tween" } }
}

const SignupImage = () => {

    const navigate = useNavigate();

    const [image, setImage] = useState(null);

    const uploadHandler = () => {
        if (image) {
            console.log(image);
        }
    };

    return (
        <>
            <div className={styles["signup-page"]}>
                <motion.div className={styles["signup"]} initial="hidden" animate="visible" exit="exit" variants={singupVariants}>
                    <div className={styles["signup-top"]}>
                        <div className={styles["title"]}>Profile Image</div>
                    </div>

                    <div className={styles["signup-image"]}>
                        <motion.label whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.7 }} for="file-upload" className={styles["input"]}>
                            <span><MdCloudUpload /></span>
                            Upload Your Image
                        </motion.label>
                        <input type="file" id="file-upload" accept='.png,.jpg' onChange={e => setImage(e.target.files[0])} />
                        <p>{image?.name}</p>
                    </div>

                    <div className={styles["signup-bottom"]}>
                        <motion.div className={styles["submit"]} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.7 }} onClick={() => navigate("/")}>Skip</motion.div>
                        <motion.div className={styles["submit"]} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.7 }} onClick={uploadHandler}>Next</motion.div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default SignupImage;