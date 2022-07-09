import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

import { useNavigate } from "react-router-dom";

import useAuthContext from "./useAuthContext";

export const useSignup = () => {

    const navigate = useNavigate();

    const { dispatch } = useAuthContext();

    const [signupError, setSignupError] = useState(null);

    const signup = async (username, email, password, passwordConfirmation) => {
        setSignupError(null);
        
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            dispatch({ type: "LOGIN", payload: response.user });
            localStorage.setItem("user", JSON.stringify(response.user));
            setSignupError(null);
            navigate("/");
        } catch (err) {
            setSignupError(err.message);
        }
    }

    return { signup, signupError };
}