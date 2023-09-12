import React, { useState } from 'react';
import './style.css';
import { Container, IconButton, Content, Navbar } from 'rsuite';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';

import FileUploadIcon from '@rsuite/icons/FileUpload';
import hydrocarbonIconMobile from '../../assets/img/hydro-mobile.png'



import { Nav } from 'rsuite';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CustomeDrawer from '../customeDrawer';
import { setCollapse } from '../../redux/slices/common';

const headerStyles = {
    padding: 2,
    fontSize: 16,

    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
};

const NavToggle = ({ expand, onChange }) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle">


            <Nav >
                <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                    {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
                </Nav.Item>
            </Nav>
        </Navbar>

    );
};



const Layout = ({ children }) => {
    const [expand, setExpand] = useState(false);
    const { file } = useParams();
    const navigate = useNavigate();
    const logoutUser = () => {
        localStorage.clear();
        navigate('/');
    }

    const dispatch = useDispatch();

    const userInfo = useSelector(state => state);




    return (
        <div className="show-fake-browser sidebar-page">
            <div className='top-line'></div>


            <Container>

                <CustomeDrawer open={expand} setOpen={setExpand} />
                <Container>
                    <header className='header-bg'>


                        <div className='togal-buttons'>
                            <div className='flot-left mob-logo'><img src={hydrocarbonIconMobile} alt="logo" /></div>
                            <div className='flot-left'> <NavToggle expand={expand} onChange={() => setExpand(!expand)} /></div>


                        </div>

                        <div className='togal-right pd-13'>
                            <div className='flot-left ms-30'>
                                {
                                    !file &&
                                    <IconButton onClick={() => dispatch(setCollapse())} appearance="primary" title='Upload new file' icon={<FileUploadIcon />}>

                                        upload
                                    </IconButton>
                                }

                            </div>
                            <div className='flot-left'>
                                <img className='profile-pic' src="/profile-circle.png" alt="logo" />
                            </div>
                            <div className='flot-left profile-detail'>
                                <Nav>
                                    <Nav.Menu title={userInfo?.login?.first_name + " " + userInfo?.login?.last_name}>
                                        {/* <Nav.Item >Profile</Nav.Item>
                                        <Nav.Item >Checkout</Nav.Item> */}
                                        <Nav.Item onClick={() => logoutUser()}>Logout</Nav.Item>
                                    </Nav.Menu>
                                </Nav>
                            </div>

                        </div>
                    </header>
                    <Content className='content'>
                        {children}

                    </Content>
                </Container>
            </Container>



        </div>
    );
}

export default React.memo(Layout);
