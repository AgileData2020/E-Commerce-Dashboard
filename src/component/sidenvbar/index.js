import React from 'react';
import './style.css'
import { Container, Header, Sidebar, Sidenav, Content, Navbar } from 'rsuite';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import hydrocarbonIcon from '../../assets/img/hydloogo.png';
import hydrocarbonIconMobile from '../../assets/img/hydro-mobile.png'
import PlusIcon from '@rsuite/icons/Plus';
import { Badge, Button } from 'rsuite';
import { Nav, Tab } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';

import CustomTable from '../customTable';
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

const Sidenavebar = () => {
    const [expand, setExpand] = React.useState(true);
    const [active, setActive] = React.useState('home');
    const Navbar = ({ active, onSelect, ...props }) => {
        return (
            <Nav {...props} activeKey={active} onSelect={onSelect} style={{ marginBottom: 50 }}>
                <Nav.Item eventKey="home" >
                Rollup
                </Nav.Item>
                <Nav.Item eventKey="news">Inlets</Nav.Item>
                <Nav.Item eventKey="solutions">Outlets </Nav.Item>
                <Nav.Item eventKey="products">Compressor Stations</Nav.Item>
                <Nav.Item eventKey="about">High Pressure </Nav.Item>
            </Nav>
        );
    };

    return (
        <div className="show-fake-browser sidebar-page">
            <Container>
                <Sidebar className='sidenav-bar' style={{ display: 'flex', flexDirection: 'column' }} width={expand ? 260 : 56} collapsible              >
                    <Sidenav.Header>
                        <div  style={headerStyles}>
                     
                            <img src={!expand ? hydrocarbonIconMobile: hydrocarbonIcon} alt="logo" />


                        </div>
                    </Sidenav.Header>
                    <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                        <Sidenav.Body>
                            <Nav>


                                <Nav.Menu
                                    eventKey="1"
                                    trigger="hover"
                                    title="Rollpu"
                                    icon={<PlusIcon />}
                                    placement="rightStart"
                                >
                                    <Nav.Item eventKey="3-1">Balance</Nav.Item>
                                    <Nav.Item eventKey="3-2">Model</Nav.Item>

                                </Nav.Menu>

                                <Nav.Menu
                                    eventKey="2"
                                    trigger="hover"
                                    title="Outlets"
                                    icon={<PlusIcon />}
                                    placement="rightStart"
                                >
                                    <Nav.Item eventKey="3-1">Balance</Nav.Item>
                                    <Nav.Item eventKey="3-2">Model</Nav.Item>

                                </Nav.Menu>



                                <Nav.Menu
                                    eventKey="4"
                                    trigger="hover"
                                    title="High Pressure"
                                    icon={<PlusIcon />}
                                    placement="rightStart"
                                >
                                    <Nav.Item eventKey="3-1">Balance</Nav.Item>
                                    <Nav.Item eventKey="3-2">Model</Nav.Item>

                                </Nav.Menu>

                                <Nav.Menu
                                    eventKey="5"
                                    trigger="hover"
                                    title="Sheet"
                                    icon={<PlusIcon />}
                                    placement="rightStart"
                                >
                                    <Nav.Item eventKey="3-1">Balance</Nav.Item>
                                    <Nav.Item eventKey="3-2">Model</Nav.Item>

                                </Nav.Menu>
                                <Nav.Menu
                                    eventKey="6"
                                    trigger="hover"
                                    title="Plant"
                                    icon={<PlusIcon />}
                                    placement="rightStart"
                                >
                                    <Nav.Item eventKey="3-1">Balance</Nav.Item>
                                    <Nav.Item eventKey="3-2">Model</Nav.Item>

                                </Nav.Menu>

                                <Nav.Menu
                                    eventKey="7"
                                    trigger="hover"
                                    title="Liquids"
                                    icon={<PlusIcon />}
                                    placement="rightStart"
                                >
                                    <Nav.Item eventKey="3-1">Balance</Nav.Item>
                                    <Nav.Item eventKey="3-2">Model</Nav.Item>

                                </Nav.Menu>

                                <Nav.Menu
                                    eventKey="8"
                                    trigger="hover"
                                    title="FlowCal"
                                    icon={<PlusIcon />}
                                    placement="rightStart"
                                >
                                    <Nav.Item eventKey="3-1">Balance</Nav.Item>
                                    <Nav.Item eventKey="3-2">Model</Nav.Item>

                                </Nav.Menu>

                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>

                </Sidebar>

                <Container>
                    <header className='header-bg'>


                        <div className='togal-button'>
                            <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
                        </div>

                        <div className='togal-right pd-13'>
                            <div className='flot-left ms-30'>
                                <Badge>
                                    <Button icon={<PlusIcon />}>
                                        <img src="notiicatin.png" /></Button>
                                </Badge>
                            </div>
                            <div className='flot-left'>
                                <img className='profile-pic' src="profile-img.jpg" alt="logo" />
                            </div>
                            <div className='flot-left profile-detail'> Hello, Andrew!</div>

                        </div>
                    </header>
                    <main>

                        <h1>Rollup Data</h1>
                        <Navbar className='mar-no' appearance="subtle" active={active} onSelect={setActive} />

                        <div className='tab-stybg'>



                            {active === 'home' && <CustomTable />}
                            {active === 'news' && <h1>news</h1>}
                        </div>

                    </main>
                </Container>
            </Container>
        </div>
    )
}

export default Sidenavebar