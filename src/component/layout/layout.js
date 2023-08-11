import React, { useState } from 'react';
import './style.css'
import { Container, Header, Sidebar, Sidenav, Content, Navbar } from 'rsuite';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import hydrocarbonIcon from '../../assets/img/hydloogo.png';
import hydrocarbonIconMobile from '../../assets/img/hydro-mobile.png'
import PlusIcon from '@rsuite/icons/Plus';
import { Badge, Button } from 'rsuite';
import { Nav, Tab } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
    const [expand, setExpand] = useState(true);
    const navigate = useNavigate();
    const logoutUser = () => {
        localStorage.clear();
        navigate('/');
    }


    const userInfo = useSelector(state => state.login);

    console.log(userInfo?.first_name)
    return (
        <div className="show-fake-browser sidebar-page">
            <div className='top-line'></div>
            <Container>
                <Sidebar className='sidenav-bar' width={expand ? 260 : 56} collapsible              >
                    <div className=' side-fixed'>
                        <Sidenav.Header>
                            <div style={headerStyles}>

                                <img src={!expand ? hydrocarbonIconMobile : hydrocarbonIcon} alt="logo" />


                            </div>
                        </Sidenav.Header>
                        <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                            <Sidenav.Body>
                                <Nav>


                                    <Nav.Menu
                                        eventKey="1"
                                        trigger="hover"
                                        title="Jan 2023"
                                        icon={<PlusIcon />}
                                        placement="rightStart"
                                    >
                                        <Nav.Item eventKey="3-1">Balance</Nav.Item>
                                        <Nav.Item eventKey="3-2">Model</Nav.Item>

                                    </Nav.Menu>

                                    <Nav.Menu
                                        eventKey="2"
                                        trigger="hover"
                                        title="Fab 2023"
                                        icon={<PlusIcon />}
                                        placement="rightStart"
                                    >
                                        <Nav.Item eventKey="3-1">Balance</Nav.Item>
                                        <Nav.Item eventKey="3-2">Model</Nav.Item>

                                    </Nav.Menu>



                                    <Nav.Menu
                                        eventKey="4"
                                        trigger="hover"
                                        title="Mar 2023"
                                        icon={<PlusIcon />}
                                        placement="rightStart"
                                    >
                                        <Nav.Item eventKey="3-1">Balance</Nav.Item>
                                        <Nav.Item eventKey="3-2">Model</Nav.Item>

                                    </Nav.Menu>

                                    <Nav.Menu
                                        eventKey="5"
                                        trigger="hover"
                                        title="Apr 2023"
                                        icon={<PlusIcon />}
                                        placement="rightStart"
                                    >
                                        <Nav.Item eventKey="3-1">Balance</Nav.Item>
                                        <Nav.Item eventKey="3-2">Model</Nav.Item>

                                    </Nav.Menu>
                                    <Nav.Menu
                                        eventKey="6"
                                        trigger="hover"
                                        title="May 2023"
                                        icon={<PlusIcon />}
                                        placement="rightStart"
                                    >
                                        <Nav.Item eventKey="3-1">Balance</Nav.Item>
                                        <Nav.Item eventKey="3-2">Model</Nav.Item>

                                    </Nav.Menu>

                                    <Nav.Menu
                                        eventKey="7"
                                        trigger="hover"
                                        title="Jan 2023"
                                        icon={<PlusIcon />}
                                        placement="rightStart"
                                    >
                                        <Nav.Item eventKey="3-1">Balance</Nav.Item>
                                        <Nav.Item eventKey="3-2">Model</Nav.Item>

                                    </Nav.Menu>

                                    <Nav.Menu
                                        eventKey="8"
                                        trigger="hover"
                                        title="July 2023"
                                        icon={<PlusIcon />}
                                        placement="rightStart"
                                    >
                                        <Nav.Item eventKey="3-1">Balance</Nav.Item>
                                        <Nav.Item eventKey="3-2">Model</Nav.Item>

                                    </Nav.Menu>

                                </Nav>
                            </Sidenav.Body>
                        </Sidenav>
                    </div>
                </Sidebar>

                <Container>
                    <header className='header-bg'>


                        <div className='togal-button'>
                            <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
                        </div>

                        <div className='togal-right pd-13'>
                            <div className='flot-left ms-30'>
                                {/* <Badge>
                                    <Button icon={<PlusIcon />}>
                                        <img src="/notiicatin.png" /></Button>
                                </Badge> */}
                            </div>
                            <div className='flot-left'>
                                <img className='profile-pic' src="/profile-img.jpg" alt="logo" />
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
                    <main>

                        {children}
                    </main>
                </Container>
            </Container>
        </div>
    );
}

export default Layout;
