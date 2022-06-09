import { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = props => {
    const [open, setOpen] = useState(false);
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);

    const handleOpen = () => {
        setOpen(true);
        setSignup(false);
        setLogin(true);
    }
    const handleClose = () => {
        setOpen(false)
    };

    return (
        <AuthContext.Provider value={[open, setOpen, login, setLogin, signup, setSignup, handleClose, handleOpen]}>
            {props.children}
        </AuthContext.Provider>
    )
}