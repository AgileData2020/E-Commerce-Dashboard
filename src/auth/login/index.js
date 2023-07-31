import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import { auth } from '../../api/endPoints';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/slices/auth/login';
import { Button } from "rsuite";


const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const dispatch = useDispatch()
    const submitLoginForm = () => {
        navigate('/upload')
        dispatch(loginUser({ test: 'text' }))
    }

    const styles = {
        padding: 20,
        textAlign: "center"
    };
    return (
        <>
            <h1>Login Form</h1>

            <div style={styles}>
                <Button appearance="primary">Hello World</Button>
            </div>
        </>
    )
}

export default Login