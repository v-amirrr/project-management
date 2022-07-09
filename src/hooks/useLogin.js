import { useState } from "react"

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

import { useNavigate } from "react-router-dom"

import useAuthContext from "./useAuthContext";

export const useLogin = () => {

    const navigate = useNavigate();

    const { dispatch } = useAuthContext();

    const [loginError, setLoginpError] = useState(null);

    const login = async (email, password) => {
        setLoginpError(null);
        
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            dispatch({ type: "LOGIN", payload: response.user });
            setLoginpError(null);
            console.log(response.user);
            navigate("/");
        } catch (err) {
            setLoginpError(err.message);
        }
    }

    return { login, loginError };
}