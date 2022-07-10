import { useState } from "react";

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";

import { useNavigate } from "react-router-dom";

import useAuthContext from "./useAuthContext";

const provider = new GoogleAuthProvider();

export const useSignup = () => {

    const navigate = useNavigate();

    const { dispatch } = useAuthContext();

    const [signupError, setSignupError] = useState(null);
    const [googleError, setGoogleError] = useState(null);

    const signup = async (username, email, password, passwordConfirmation) => {
        setSignupError(null);
        
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            dispatch({ type: "LOGIN", payload: response.user });
            localStorage.setItem("user", JSON.stringify(response.user));
            setSignupError(null);
            navigate("/signup/image");
        } catch (err) {
            setSignupError(err.message);
        }
    }


    const signInWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            navigate("/signup/image");
            dispatch({ action: "LOGIN", payload: response.user });
            localStorage.setItem("user", JSON.stringify(response.user));
        } catch (err) {
            console.log(err);
            setGoogleError(err);
        }
    }

    return { signup, signupError, signInWithGoogle, googleError };
}