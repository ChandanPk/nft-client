// import { Button, styled } from "@mui/material";
import Login from './Login'
import Signup from './Signup';
import { useState, useContext } from "react";
import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../contextApi/AuthContext';


const Navbar = () => {
    // const [open, setOpen] = useState(false);
    // const [login, setLogin] = useState(false);
    // const [signup, setSignup] = useState(false);

    // const handleOpen = () => {
    //     setOpen(true);
    //     setLogin(true);
    //     // setSignup(true)
    // }
    // const handleClose = () => {
    //     setOpen(false)
    // };

    const [open, setOpen, login, setLogin, signup, setSignup, handleClose, handleOpen] = useContext(AuthContext);


    return (
        <div className={styles.navContainer}>
            <div className={styles.rightNavItems}>
                <Link className="links" to="/"><div className={styles.navItem}>Home</div></Link>
                <Link className="links" to="/street"><div className={styles.navItem}>Street NFT</div></Link>
                <Link className="links" to="/music"><div className={styles.navItem}>MUSIC NFT</div></Link>
            </div>
            <div className={styles.rightNavItems}>
                <Link to="/score" className="links"><div className={styles.navItem}>SHA POINTS</div></Link>
                <div className={styles.navItem} onClick={handleOpen}>STREET SHA TOKENS</div>
            </div>
            {login && <Login handleClose={handleClose} open={open} />}
            {signup && <Signup handleClose={handleClose} open={open} />}
        </div>

    );
}

export default Navbar;
