import React from 'react'
import 'rsuite/dist/rsuite.min.css';
// import {  FlexboxGrid } from 'rsuite';
import {
    Container,
    Header,
    Content,
    Footer,
    Form,
    ButtonToolbar,
    Button,
    Navbar,
    Panel,
    FlexboxGrid,
    Input,
    InputGroup, IconButton, Divider,
} from 'rsuite';
import './style.css'
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import { TiArrowRightOutline } from 'react-icons/ti';


const styles = {
    width: 300
};
const Containerr = () => {
    const [visible, setVisible] = React.useState(false);

    const handleChange = () => {
        setVisible(!visible);
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
                                    <FlexboxGrid.Item className="item" colspan={20}><h4 style={{ color: 'white' }}>Welcome to Hydrocarbon</h4></FlexboxGrid.Item>
                                    <FlexboxGrid.Item colspan={16} ><p className='the_page_text'>The intelligence client Project admin board </p></FlexboxGrid.Item>
                                </FlexboxGrid>
                            </div>
                        </FlexboxGrid.Item>

                        <FlexboxGrid.Item className='pd-13' colspan={12} >

                            <FlexboxGrid justify='center'>

                                <FlexboxGrid.Item className="item text-center"  colspan={20}>
                               
                                    <img src="hydro.png" alt="logo" />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item className="item" colspan={20}>


                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item className="item" colspan={20}>
                                </FlexboxGrid.Item>
                                <FlexboxGrid>
                                    <FlexboxGrid.Item >
                                        <Form >
                                            <Form.Group>
                                                <Form.Control className='input1' name="name" placeholder='Email' />
                                            </Form.Group>
                                            <Form.Group>
                                                <InputGroup inside style={styles}>
                                                    <Input className='input1' type={visible ? 'text' : 'password'} />
                                                    <InputGroup.Button className='input_password ' onClick={handleChange}>
                                                        {visible ? <EyeIcon /> : <EyeSlashIcon />}
                                                    </InputGroup.Button>
                                                </InputGroup>
                                                {/* <Form.Control className='input1' name="password" type="password" autoComplete="off" placeholder='Password' /> */}
                                            </Form.Group>
                                            <Form.Group>

                                            <ButtonToolbar>
                                                    <IconButton className='submit_button text-center margin-auto'  icon={<TiArrowRightOutline />} circle />
                                            </ButtonToolbar> 
                                           
                                                <FlexboxGrid  className='col-space' >
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
                </div>
            </div>



        </>
    )
}

export default Containerr