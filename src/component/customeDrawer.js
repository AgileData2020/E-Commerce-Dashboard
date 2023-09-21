import React, { useState } from 'react';
import './customeDrawer.css';
import { useDispatch } from 'react-redux';
import { getLatestFile, setSheetActiveTab, getTabsName, setCollapse, getcurrentFileID } from '../redux/slices/common';
import { Drawer, Nav, Sidenav, Sidebar } from 'rsuite';
import PlusIcon from '@rsuite/icons/Plus';
import hydrocarbonIcon from '../assets/img/hydloogo.png';

const headerStyles = {
    padding: 2,
    fontSize: 16,
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
};


const CustomeDrawer = ({ open, setOpen, fileData }) => {

    const dispatch = useDispatch();

    //   currentUseCase for dispaching and show data on dashboard of current file click from sidebar 
    const currentUseCase = (currentItem) => {

        dispatch(getcurrentFileID(currentItem?.id));
        dispatch(getLatestFile(currentItem?.excel_file));
        dispatch(getTabsName(currentItem?.sheet_names));
        dispatch(setSheetActiveTab(currentItem.sheet_names[0].data_key));
        dispatch(setCollapse(1));
        setOpen(!open);
    }


    return (
        <>

            <Drawer size={'xs'} placement={'left'} open={open} onClose={() => setOpen(false)}>
                <Drawer.Body>





                    <Sidebar className='sidenav-bar' collapsible>
                        <div className='side-fixed'>
                            <Sidenav.Header>
                                <div style={headerStyles}>

                                    <img src={hydrocarbonIcon} alt="logo" />


                                </div>
                            </Sidenav.Header>
                            <Sidenav expanded={true} defaultOpenKeys={['3']} appearance="subtle">
                                <Sidenav.Body>
                                    <Nav>
                                        {




                                            <Nav.Menu

                                                eventKey={Math.random()}
                                                trigger="hover"
                                                title="Jan 2023"
                                                icon={<PlusIcon />}
                                                placement="rightStart"
                                            >
                                                {
                                                    fileData.map((item) =>

                                                        <Nav.Item onClick={() => currentUseCase(item)} key={item?.id} eventKey={item?.id}>{item?.excel_file?.replaceAll('_', ' ')?.toUpperCase()}</Nav.Item>
                                                    )
                                                }

                                            </Nav.Menu>



                                        }
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
