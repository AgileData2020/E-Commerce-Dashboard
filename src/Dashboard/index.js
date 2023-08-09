
import React, { useState, useEffect } from 'react'
import './style.css';
import { useDispatch } from 'react-redux';
import CustomTable from '../component/customTable'
import { Nav, Tab } from 'rsuite';
import axiosInstance from '../api/axiosInstance';
import CustomeDrawer from '../component/customeDrawer';
import { sheetEndPoint } from '../api/endPoints';
import HelperClass from '../helper';
import { FlexboxGrid, Col } from 'rsuite';
import Loader from '../component/Loader/loader';
const Dashboard = () => {

    const [active, setActive] = useState('FlowCal Raw');
    const [openDrawer, setOpenDrawer] = useState(false);
    const [tableHeaderData, setTableHeaderData] = useState([]);
    const [tableBodyData, setTableBodyData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [multiTableData, setMultiTableData] = useState([]);

    const Navbar = ({ active, onSelect, ...props }) => {
        return (
            <Nav {...props} activeKey={active} onSelect={onSelect} style={{ marginBottom: 50 }}>
                <Nav.Item eventKey="FlowCal Raw">
                    FlowCal Raw
                </Nav.Item>

                <Nav.Item eventKey="Model CS">Model CS </Nav.Item>
                <Nav.Item eventKey="Model Output">Model Output</Nav.Item>
                <Nav.Item eventKey="Rollup">Rollup</Nav.Item>
                <Nav.Item eventKey="Liquids">Liquids</Nav.Item>
                <Nav.Item eventKey='Plant'>Plant</Nav.Item>
                <Nav.Item eventKey='High Pressure'>High Pressure</Nav.Item>
                <Nav.Item eventKey='Compressor Stations'>Compressor Stations</Nav.Item>
                <Nav.Item eventKey='Outlets'>Outlets</Nav.Item>
                <Nav.Item eventKey='Inlets'>Inlets</Nav.Item>

            </Nav>
        );
    };

    const getSheetData = async () => {
        setLoading(true)
        try {
            const response = await axiosInstance.get(sheetEndPoint.GET_SHEET + active);
            if (response.status === 200) {
                setLoading(false)
                if (active === "FlowCal Raw") {

                    const { headers, data } = response.data;

                    setTableHeaderData(headers);
                    setTableBodyData(data);


                } else {

                    setMultiTableData(HelperClass.sheetDataMaker(active, response.data))
                }

            }


        } catch (error) {
            setLoading(false)
            console.log(error, 'error in dashboard component')

        }
    }

    useEffect(() => {
        getSheetData();
    }, [active]);

    const dispatch = useDispatch();
    return (

        <>
            <h1>{active}</h1>
            <Navbar className='mar-no' appearance="subtle" active={active} onSelect={setActive} />



            {
                isLoading ?
                    <Loader />
                    :

                    <div className="show-grid">

                        {
                            active === "FlowCal Raw" ?
                                <div className='tab-stybg'>
                                    <h5>FlowCal Raw</h5>
                                    <CustomTable active={active} tableData={multiTableData} tableHeaderData={tableHeaderData} tableBodyData={tableBodyData} setOpen={setOpenDrawer} />
                                </div>
                                :

                                <FlexboxGrid justify="center" >
                                    {


                                        multiTableData.length > 0 &&
                                        multiTableData?.map((item, index) =>
                                            <FlexboxGrid.Item as={Col} colspan={12} md={12}>


                                                <div className='tab-stybg' style={{ marginTop: '5px' }}>


                                                    <h5>{item['table_' + parseInt(index + 1)]?.table_label}</h5>

                                                    <CustomTable key={item['table_' + parseInt(index + 1)]?.table_label} active={active} tableData={multiTableData} tableHeaderData={item['table_' + parseInt(index + 1)]?.headers} tableBodyData={item['table_' + parseInt(index + 1)]?.data} setOpen={setOpenDrawer} />

                                                </div>
                                            </FlexboxGrid.Item>

                                        )



                                    }


                                </FlexboxGrid>


                        }
                    </div>
            }


            {/* <CustomeDrawer setOpen={setOpenDrawer} open={openDrawer} /> */}
        </>


    )
}

export default Dashboard