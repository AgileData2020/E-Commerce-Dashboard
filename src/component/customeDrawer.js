import React, { useState } from 'react';
import './customeDrawer.css';
import { Drawer, Nav, Sidenav, Sidebar } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import { routesPath } from '../Routes';
const headerStyles = {
    padding: 2,
    fontSize: 16,
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
};


const CustomeDrawer = ({ open, setOpen }) => {

    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState('')
    //   currentUseCase for dispaching and show data on dashboard of current file click from sidebar 

    const setPage = (path) => {
        setOpen((open) => !open);
        navigate(path);

    }


    return (
        <>

            <Drawer size={'xs'} placement={'left'} backdrop={false} open={open} onClose={() => setOpen(false)}>
                <Drawer.Body>





                    <Sidebar className='sidenav-bar' collapsible>
                        <div className='side-fixed'>
                            <Sidenav.Header>
                                <div style={headerStyles}>

                                    <h1 onClick={() => setPage('/dashboard')} style={{ color: '#2d64aa', cursor: 'pointer' }}>Fake Store</h1>


                                </div>
                            </Sidenav.Header>

                            <Sidenav expanded={true} defaultOpenKeys={['3']} appearance="subtle">
                                <Sidenav.Body>
                                    <Nav>
                                        <Nav.Item onClick={() => setPage('/revenue/analysis')} eventKey={4}>Revenue Analytics</Nav.Item>

                                    </Nav>

                                    <Nav>
                                        <Nav.Item style={{ background: '#f9f9f9' }} onClick={() => setPage('/inventory')} eventKey={4}>Inventory and Product Registration</Nav.Item>

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
