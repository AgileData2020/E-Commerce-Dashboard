import React, { useState } from 'react';

import './style.css';
import { Container, Content, Navbar } from 'rsuite';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';

import { Nav } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import profilImg from './images/profile-circle.png'
import CustomeDrawer from '../customeDrawer';
import Widget from '../widget';

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

    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.clear();
        navigate('/');
    }




    return (
        <div className="show-fake-browser sidebar-page">
            <div className='top-line'></div>


            <Container>

                <CustomeDrawer open={expand} setOpen={setExpand} />
                <Container>
                    <header className='header-bg'>


                        <div className='togal-buttons'>
                            <div className='flot-left'> <h1 onClick={() => navigate('/dashboard')} style={{ color: '#2d64aa', cursor: 'pointer' }}>Store</h1></div>


                            {<div className='flot-left'> <NavToggle expand={expand} onChange={() => setExpand(!expand)} /></div>}


                        </div>

                        <div className='togal-right pd-13'>

                            <div className='flot-left'>
                                <img className='profile-pic' src={profilImg} alt="test" />
                            </div>
                            <div className='flot-left profile-detail'>
                                <Nav>
                                    <Nav.Menu title={'Amir Yousaf'}>

                                        <Nav.Item onClick={() => logoutUser()}>Logout</Nav.Item>
                                    </Nav.Menu>
                                </Nav>
                            </div>

                        </div>
                    </header>
                    <Widget />
                    <Content className='content'>
                        {children}

                    </Content>
                </Container>
            </Container>



        </div>
    );
}

export default React.memo(Layout);
