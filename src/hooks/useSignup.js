import { useState } from "react"

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export const useSignup = () => {

    const [signupError, setSignupError] = useState(null);

    const signup = async (username, email, password, passwordConfirmation) => {
        setSignupError(null);
        
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            setSignupError(null);
        } catch (err) {
            setSignupError(err.message);
        }
    }

    return { signup, signupError };
}