import { useState } from "react"

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export const useSignup = () => {

    const [error, setError] = useState(null);

    const signup = async (username, email, password) => {
        setError(null);

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
        } catch (err) {
            setError(err.message);
            console.log(err.message);
        }
    }

    return { signup, error };
}