import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {

    Form,
    ButtonToolbar,
    Button,
    Message,
    FlexboxGrid,
    Input,
    InputGroup,
    IconButton,
    useToaster

} from 'rsuite';
import './style.css'
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import { TiArrowRightOutline } from 'react-icons/ti';
import HelperClass from '../../helper';
import { loginUser } from '../../redux/slices/auth/login';
import { handleIsLoading } from '../../redux/slices/common';
const Containerr = () => {
    const [visible, setVisible] = useState(false);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toaster = useToaster();
    const handleChange = () => {
        setVisible(!visible);
    };

    const handleSubmit = async (event) => {
        // Handle the form submission here
        if (event) {
            dispatch(handleIsLoading(true))
            let payload = { 'username': userName, 'password': password }

            try {
                await dispatch(loginUser(payload)).unwrap().then((result) => {


                    dispatch(handleIsLoading(false));
                    navigate('/upload');
                    toaster.push(<Message showIcon type={'success'} closable>
                        User login successfully
                    </Message>, { placement: 'topEnd', duration: 5000 })
                });


                // handle result here
            } catch (rejectedValueOrSerializedError) {
                dispatch(handleIsLoading(false))
                // handle error here
            }



        }
    };

    return (
        <>

            <div className='main_div'>

                <div className="show-grid">
                    <FlexboxGrid >
                        <FlexboxGrid.Item className="item" colspan={12}>
                            <div className="the_page">
                                <img src="bgimg.png" alt="logo" />
                                <FlexboxGrid style={{ marginLeft: '15px' }}>
                                    <FlexboxGrid.Item className="item" colspan={20}>
                                        <div className='login-headign' style={{ color: 'white' }}>Welcome to Hydrocarbon</div>
                                        </FlexboxGrid.Item>
                                    <FlexboxGrid.Item colspan={16} ><div className='the_page_text'>The intelligence client Project admin board </div></FlexboxGrid.Item>
                                </FlexboxGrid>
                            </div>
                        </FlexboxGrid.Item>

                        <FlexboxGrid.Item className='pd-13' colspan={12} >

                            <FlexboxGrid justify='center'>

                                <FlexboxGrid.Item className="item text-center" colspan={20}>

                                    <img src="hydro.png" alt="logo" />
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
                                                {/* <InputGroup inside style={styles}>
                                                    <Input name={'password'} className='input1' type={visible ? 'text' : 'password'} />
                                                    <InputGroup.Button className='input_password ' onClick={handleChange}>
                                                        {visible ? <EyeIcon /> : <EyeSlashIcon />}
                                                    </InputGroup.Button>
                                                </InputGroup> */}
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