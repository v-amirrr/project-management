import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const initialState = {
    user: null,
}

const authReducer = (action, state) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload };
        
        default:
            return state;
    }
}

const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <>
            <AuthContext.Provider value={ {...state, dispatch} }>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthContextProvider;