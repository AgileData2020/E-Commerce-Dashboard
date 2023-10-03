import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BgImg from './images/bgimg.png'
import {

    Form,
    ButtonToolbar,
    Button,
    Message,
    FlexboxGrid,
    IconButton,
    useToaster

} from 'rsuite';
import './style.css'

import { TiArrowRightOutline } from 'react-icons/ti';
import HelperClass from '../../helper';
import { loginUser } from '../../redux/slices/auth/login';

const Containerr = () => {

    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();
    const toaster = useToaster();

    useLayoutEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/dashboard');
        }
    })

    const handleSubmit = (event) => {
        // Handle the form submission here

        if (event && userName === 'amir' && password === 'task@123') {

            let payload = { 'username': userName, 'password': password }
            localStorage.setItem('token', Math.random())
            navigate('/dashboard');
            toaster.push(<Message showIcon type={'success'} closable>
                User login successfully
            </Message>, { placement: 'topEnd', duration: 5000 })



        } else {
            toaster.push(<Message showIcon type={'error'} closable>
                Wrong Credentials
            </Message>, { placement: 'topEnd', duration: 5000 })
        }
    };

    return (
        <>

            <div className='main_div'>

                <div className="show-grid-auth">
                    <FlexboxGrid >
                        <FlexboxGrid.Item className="item" colspan={12}>
                            <div className="the_page">
                                <img src={BgImg} alt="logo" />
                                <FlexboxGrid style={{ marginLeft: '15px' }}>
                                    <FlexboxGrid.Item className="item" colspan={20}>
                                        <div className='login-headign' style={{ color: 'white', marginTop: '20px', textAlign: 'center' }}>Welcome Fake Store</div>
                                    </FlexboxGrid.Item>

                                </FlexboxGrid>
                            </div>
                        </FlexboxGrid.Item>

                        <FlexboxGrid.Item className='pd-13' colspan={12} >

                            <FlexboxGrid justify='center'>

                                <FlexboxGrid.Item className="item text-center" colspan={20}>

                                    <h1 style={{ color: '#1b32d5' }}> Fake Store</h1>
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item className="item" colspan={20}>


                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item className="item" colspan={20}>
                                </FlexboxGrid.Item>
                                <FlexboxGrid>
                                    <FlexboxGrid.Item >
                                        <Form model={HelperClass.loginSchema()} onSubmit={(e) => handleSubmit(e)}>
                                            <Form.Group>
                                                <Form.Control name={'username'} onChange={(e) => setUserName(e)} className='input1' placeholder='User name' />
                                            </Form.Group>
                                            <Form.Group>

                                                <Form.Control className='input1' onChange={(e) => setPassword(e)} name="password" type="password" autoComplete="off" placeholder='Password' />
                                            </Form.Group>
                                            <Form.Group>

                                                <ButtonToolbar type="submit">
                                                    <IconButton type="submit" className='submit_button text-center margin-auto' icon={<TiArrowRightOutline />} circle />
                                                </ButtonToolbar>

                                                <FlexboxGrid className='col-space' >
                                                    <FlexboxGrid.Item className="item text-center" colspan={24}>
                                                        Don’t have an account?   <Button className='signup-button' appearance="link" style={{ textDecoration: 'none' }}> Sign up</Button>
                                                    </FlexboxGrid.Item>
                                                </FlexboxGrid>


                                            </Form.Group>
                                        </Form>
                                    </FlexboxGrid.Item>
                                </FlexboxGrid>
                            </FlexboxGrid>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </div >
            </div >



        </>
    )
}

export default Containerr