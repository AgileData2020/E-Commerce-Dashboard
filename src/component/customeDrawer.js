import React from 'react';
import './customeDrawer.css'
import { Drawer, ButtonToolbar, Button, Placeholder, Nav, Sidenav,Sidebar } from 'rsuite';
import PlusIcon from '@rsuite/icons/Plus';
import hydrocarbonIcon from '../assets/img/hydloogo.png';
import hydrocarbonIconMobile from '../assets/img/hydro-mobile.png'
import LightWeight from './lightWeights/lightWeight';
const headerStyles = {
    padding: 2,
    fontSize: 16,
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
};
const CustomeDrawer = ({ open, setOpen }) => {
    return (
        <>


            <Drawer  size={'xs'}  placement={'left'} open={open} onClose={() => setOpen(false)}>
                <Drawer.Body>
      
                       
                           
                   
                
                <Sidebar className='sidenav-bar'  collapsible>
                    <div className='side-fixed'>
                    <Sidenav.Header>
                            <div style={headerStyles}>

                                <img src={hydrocarbonIcon} alt="logo" />


                            </div>
                        </Sidenav.Header>
                        <Sidenav expanded={true} defaultOpenKeys={['3']} appearance="subtle">
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

                </Drawer.Body>

            </Drawer>


        </>
    );
}

export default CustomeDrawer;
