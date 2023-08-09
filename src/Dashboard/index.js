
import React, { useState, useEffect } from 'react'
import './style.css';
import { useDispatch } from 'react-redux';
import CustomTable from '../component/customTable'
import { Nav, Tab } from 'rsuite';
import axiosInstance from '../api/axiosInstance';
import CustomeDrawer from '../component/customeDrawer';
import { sheetEndPoint } from '../api/endPoints';
import { handleIsLoading } from '../redux/slices/common';
const Dashboard = () => {

    const [active, setActive] = useState('FlowCal Raw');
    const [openDrawer, setOpenDrawer] = useState(false);
    const [tableHeaderData, setTableHeaderData] = useState([]);
    const [tableBodyData, setTableBodyData] = useState([]);

    const Navbar = ({ active, onSelect, ...props }) => {
        return (
            <Nav {...props} activeKey={active} onSelect={onSelect} style={{ marginBottom: 50 }}>
                <Nav.Item eventKey="FlowCal Raw" >
                    Rollup
                </Nav.Item>
                <Nav.Item eventKey="news">Inlets</Nav.Item>
                <Nav.Item eventKey="solutions">Outlets </Nav.Item>
                <Nav.Item eventKey="products">Compressor Stations</Nav.Item>
                <Nav.Item eventKey="about">High Pressure</Nav.Item>
            </Nav>
        );
    };

    const getSheetData = async () => {
        // dispatch(handleIsLoading(true))
        try {
            const response = await axiosInstance.get(sheetEndPoint.GET_SHEET + active);
            if (response.status === 200) {
                dispatch(handleIsLoading(false))
                const { flow_cal_raw_headers, flow_cal_raw_data } = response.data;

                setTableHeaderData(flow_cal_raw_headers);
                setTableBodyData(flow_cal_raw_data);
            }


        } catch (error) {
            dispatch(handleIsLoading(false))
        }
    }

    useEffect(() => {
        getSheetData();
    }, [active]);

    const dispatch = useDispatch();
    return (

        <>
            <h1 onClick={() => setOpenDrawer(!openDrawer)}>Jan 2023</h1>
            <Navbar className='mar-no' appearance="subtle" active={active} onSelect={setActive} />

            <div className='tab-stybg'>



                {<CustomTable active={active} tableHeaderData={tableHeaderData} tableBodyData={tableBodyData} setOpen={setOpenDrawer} />}
                {active === 'news' && <h1>news</h1>}
            </div>

            <CustomeDrawer setOpen={setOpenDrawer} open={openDrawer} />
        </>


    )
}

export default Dashboard