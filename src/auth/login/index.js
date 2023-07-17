import * as React from 'react';
import { styled } from '@mui/material/styles';
import { TextField, Typography, Box, Paper, Grid, InputLabel, InputAdornment, OutlinedInput, IconButton, FormControl, Button, Link } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import zIndex from '@mui/material/styles/zIndex';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Box sx={{ width: "100%", backgroundColor: '#1930d2', height: '100vh' }}>
                <Box sx={{
                    backgroundColor: '#fff', width: "400px", height: "650px", background: "#1b32d5", position: "absolute",
                    top: "50%", left: { xl: "30%", md: '30%', sm: '20%' }, transform: "translate(-50%,-50%)",
                    display: { xs: "none", sm: "none", md: "block", lg: "block", },
                    zIndex: 1, boxShadow: 15
                }}>

                    <img src="bgimg.png" alt="hydro" style={{ width: '240px', }} />
                    <Box sx={{ padding: '40px' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>Welcome to Hydrocarbon.</Typography>
                        <Typography variant="subtitle1" sx={{ textAlign: "left", color: '#fff',  }} >The itenlligence client Project admin board </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)", border: '1px solid black', width: '80%', backgroundColor: '#ffffff',

                }}>
                    <Grid container spacing={0} sx={{ marginBottom: "10px" }}>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center', height: '100%',
                                position: 'relative',
                            }}>
                                <Grid container >
                                    <Grid item xs={8}>
                                        <img src="hydro.png" alt="hydro" style={{ width: '300px', height: '100%' }} />
                                    </Grid>
                                    <Grid item xs={8} sx={{ marginLeft: '12px' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>Login</Typography>
                                        <Typography variant="body1" sx={{ textAlign: "justify" }} >Lorem ipsum is simply dummy text of the Printing and typesetting industry </Typography>
                                    </Grid>

                                    <Grid item xs={8} sx={{ marginTop: 2 }}>
                                        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                                            <TextField id="outlined-basic" label="Email" type='Email' sx={{ width: '100%', }}></TextField>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8} sx={{ marginTop: 2 }}>
                                        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {!showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                            />
                                        </FormControl>

                                    </Grid>
                                    <Grid item xs={8} >
                                        <Box sx={{ textAlign: 'right' }}>
                                            <Link href="#" sx={{ textDecoration: 'none', color: '#7e7e7e', }}> Forget Password?</Link>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <IconButton aria-label="delete" size="large" sx={{
                                            marginTop: '5px', float: "right", backgroundColor: '#1b32d5', color: '#fff', ":hover":
                                                { backgroundColor: '#1b32d5', },

                                        }}>
                                            <EastOutlinedIcon fontSize="inherit" />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </>
    )
}

export default Login