import React, { useState } from 'react';
import './style.css'
import { Container, Header, Sidebar, Sidenav, Content, Navbar } from 'rsuite';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import hydrocarbonIcon from '../../assets/img/hydloogo.png';
import hydrocarbonIconMobile from '../../assets/img/hydro-mobile.png'

import { Badge, Button } from 'rsuite';
import { Nav, Tab } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CustomeDrawer from '../customeDrawer';
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


            <Nav pullLeft>
                <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                    {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
                </Nav.Item>
            </Nav>
        </Navbar>

    );
};



const Layout = ({ children }) => {
    const [expand, setExpand] = useState(false);
    const navigate = useNavigate();
    const logoutUser = () => {
        localStorage.clear();
        navigate('/');
    }


    const userInfo = useSelector(state => state.login);


    return (
        <div className="show-fake-browser sidebar-page">
            <div className='top-line'></div>
          

            <Container>
                
                <CustomeDrawer open={expand} setOpen={setExpand}/>
                <Container>
                    <header className='header-bg'>


                        <div className='togal-buttons'>
                      <div className='flot-left mob-logo'><img src={hydrocarbonIconMobile} alt="logo" /></div>  
                      <div className='flot-left'> <NavToggle expand={expand} onChange={() => setExpand(!expand)} /></div>
                         
                         
                        </div>

                        <div className='togal-right pd-13'>
                            <div className='flot-left ms-30'>
                                {/* <Badge>
                                    <Button icon={<PlusIcon />}>
                                        <img src="/notiicatin.png" /></Button>
                                </Badge> */}
                            </div>
                            <div className='flot-left'>
                                <img className='profile-pic' src="/profile-circle.png" alt="logo" />
                            </div>
                            <div className='flot-left profile-detail'>
                                <Nav>
                                    <Nav.Menu title={userInfo?.first_name + " " + userInfo?.last_name}>
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

export default Layout;
