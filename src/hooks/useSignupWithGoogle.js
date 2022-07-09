import { useState } from "react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";

import useAuthContext from "./useAuthContext";

import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

const useSignupWithGoogle = () => {

    const { dispatch } = useAuthContext();

    const navigate = useNavigate();

    const [googleError, setGoogleError] = useState(null);

    const signInWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            navigate("/");
            dispatch({ action: "LOGIN", payload: response.user });
            localStorage.setItem("user", JSON.stringify(response.user));
        } catch (err) {
            console.log(err);
            setGoogleError(err);
        }
    }

    return { googleError, signInWithGoogle };
}

export default useSignupWithGoogle;
