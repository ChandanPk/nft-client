import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, Button, Grid, Link, TextField } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import Signup from './Signup';
import { AuthContext } from '../contextApi/AuthContext';
import { useState, useContext } from 'react';


// const Login = ({ open, handleClose }) => {
const Login = () => {


    const [open, setOpen, login, setLogin, signup, setSignup, handleClose, handleOpen] = useContext(AuthContext);


    const handleModal = ()=> {
        setLogin(false)
        setSignup(true)
    }

    return (
         <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ textAlign: "center" }}>
                        {/* <div style={{display: "inline-block", textAlign: "center"}}> */}
                        <Avatar sx={{
                            bgcolor: 'secondary.main', display: "inline-block"
                        }}>
                            <LockIcon sx={{ marginTop: '6px' }} />
                        </Avatar>
                        <Typography component="h1" variant="h5" sx={{ color: "#111" }}>
                            Log In
                        </Typography>
                        {/* </div> */}

                    </Box>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="none"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <div onClick={handleModal} style={{color: "blue", textDecoration: "underline", cursor: "pointer"}} variant="body2">
                                    Don't have a account? Sign up
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Modal >
    );
}

export default Login;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 300,
    maxWidth: 350,
    bgcolor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
};