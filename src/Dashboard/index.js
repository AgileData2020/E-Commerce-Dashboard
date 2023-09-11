
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
import { useSelector } from 'react-redux';
import Loader from '../component/Loader/loader';
import { setSheetActiveTab } from '../redux/slices/common';
import Upload from '../upload';
const Dashboard = () => {
    const dispatch = useDispatch();

    const activeTabs = useSelector(state => state.commonData);



    const [active, setActive] = useState(activeTabs.sheetActiveTab);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [tableHeaderData, setTableHeaderData] = useState([]);
    const [tableBodyData, setTableBodyData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [multiTableData, setMultiTableData] = useState([]);

    const singleTable = ["Envelope", "FlowCal Raw", "FlowCal", 'H2O Adjust', 'ReceiptPoints', "FlowCal Data"]

    const Navbar = ({ active, onSelect, ...props }) => {
        return (
            <Nav {...props} activeKey={active} onSelect={onSelect} style={{ marginBottom: 50 }}>



                {
                    activeTabs?.tabNames.map((item, index) =>
                        <Nav.Item key={item} eventKey={item}>{item}</Nav.Item>

                    )
                }

            </Nav>
        )
    };

    let avoid_Re_rendering = false

    const getSheetData = async () => {
        if (avoid_Re_rendering) { return }

        avoid_Re_rendering = true;
        setLoading(true)
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        try {
            const response = await axiosInstance.get(sheetEndPoint.GET_SHEET + active);
            if (response.status === 200) {

                setLoading(false)
                if (singleTable.includes(active)) {


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
        if (!activeTabs?.collapseable && tableHeaderData.length === 0) {
            getSheetData();
        }

    }, []);



    const setActiveTabs = (e) => {


        dispatch(setSheetActiveTab(e))

    }

    const tableArrangements = ['Inlets 1', 'Inlets 3', 'Outlets 3', 'Outlets 1', 'Outlets', 'Inlets', 'Composition Data', 'Validation Input Table', 'Model Input'];
    return (

        <>
            {/* <h1>{active}</h1> */}


            {

                activeTabs?.collapseable ?
                    <Upload />

                    :

                    <>


                        <Navbar className='mar-no' appearance="subtle" active={active} onSelect={setActiveTabs} />



                        {
                            isLoading ?
                                <Loader />
                                :

                                <div className="show-grid-custom">

                                    {
                                        singleTable.includes(active) ?

                                            <div className='tab-stybg'>
                                                <h5>{active}</h5>

                                                <CustomTable active={active} tableData={multiTableData} tableHeaderData={tableHeaderData} tableBodyData={tableBodyData} setOpen={setOpenDrawer} />

                                            </div>
                                            :

                                            <FlexboxGrid justify="start" >
                                                {


                                                    multiTableData?.length > 0 &&
                                                    multiTableData?.map((item, index) =>
                                                        <FlexboxGrid.Item as={Col} colspan={24} md={tableArrangements.includes(item['table_' + parseInt(index + 1)]?.table_label) ? 24 : tableArrangements.includes(active) ? 24 : 12}>


                                                            <div className='tab-stybg' style={{ marginTop: '5px', }}>


                                                                <h5>{item['table_' + parseInt(index + 1)]?.table_label}</h5>

                                                                <CustomTable tableLabel={item['table_' + parseInt(index + 1)]?.table_label} key={item['table_' + parseInt(index + 1)]?.table_label}
                                                                    active={active} tableData={multiTableData} tableHeaderData={item['table_' + parseInt(index + 1)]?.headers}
                                                                    tableBodyData={item['table_' + parseInt(index + 1)]?.data} setOpen={setOpenDrawer} />

                                                            </div>
                                                        </FlexboxGrid.Item>

                                                    )



                                                }


                                            </FlexboxGrid>


                                    }
                                </div>
                        }

                    </>
            }



        </>


    )
}

export default React.memo(Dashboard)