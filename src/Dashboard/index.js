
import React from 'react'
import './style.css'
import CustomTable from '../component/customTable'
import { Nav, Tab } from 'rsuite';

import CustomeDrawer from '../component/customeDrawer';
const Dashboard = () => {

    const [active, setActive] = React.useState('home');

    const [openDrawer, setOpenDrawer] = React.useState(false);
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

        <>
            <h1 onClick={() => setOpenDrawer(!openDrawer)}>Jan 2023</h1>
            <Navbar className='mar-no' appearance="subtle" active={active} onSelect={setActive} />

            <div className='tab-stybg'>



                {active === 'home' && <CustomTable setOpen={setOpenDrawer} />}
                {active === 'news' && <h1>news</h1>}
            </div>

            <CustomeDrawer setOpen={setOpenDrawer} open={openDrawer} />
        </>


    )
}

export default Dashboard