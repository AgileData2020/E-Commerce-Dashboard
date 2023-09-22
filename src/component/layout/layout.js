import React, { useState } from 'react';
import { sheetEndPoint } from '../../api/endPoints';
import { useToaster, Message } from 'rsuite';
import './style.css';
import { Container, IconButton, Content, Navbar } from 'rsuite';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import ArowBackIcon from '@rsuite/icons/ArowBack';
import axiosInstance from '../../api/axiosInstance';
import FileUploadIcon from '@rsuite/icons/FileUpload';
import hydrocarbonIconMobile from '../../assets/img/hydro-mobile.png'
import { setCollapse } from '../../redux/slices/common';
import { Nav } from 'rsuite';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CustomeDrawer from '../customeDrawer';


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
    const [isLoading, setLoading] = useState(false);


    const [fileData, setFilesData] = useState([])
    const { file } = useParams();
    const navigate = useNavigate();

    const toaster = useToaster();
    const logoutUser = () => {
        localStorage.clear();
        navigate('/');
    }

    const dispatch = useDispatch();
    const userInfo = useSelector(state => state);
    const getAllSheetData = async () => {

        setLoading(true);
        setExpand(!expand)
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        try {
            const response = await axiosInstance.get(sheetEndPoint.GET_ALL_SHEETS);
            if (response.status === 200) {

                setLoading(false);
                setFilesData(response.data);



            }

        } catch (error) {
            setLoading(false)

            if (error?.response?.status === 400) {
                toaster.push(<Message type="error">{error.response?.data?.detail}</Message>);

            } else {
                toaster.push(<Message type="error">{error?.message}</Message>);
            }
        }
    }

    return (
        <div className="show-fake-browser sidebar-page">
            <div className='top-line'></div>


            <Container>

                <CustomeDrawer open={expand} setOpen={setExpand} fileData={fileData} fileParams={file} />
                <Container>
                    <header className='header-bg'>


                        <div className='togal-buttons'>
                            <div className='flot-left mob-logo'><img src={hydrocarbonIconMobile} alt="logo" /></div>


                            {<div className='flot-left'> <NavToggle expand={expand} onChange={() => getAllSheetData()} /></div>}


                        </div>

                        <div className='togal-right pd-13'>
                            <div className='flot-left ms-30'>
                                {
                                    !file &&
                                    (
                                        userInfo?.commonData?.collapseable ?
                                            <IconButton onClick={() => dispatch(setCollapse())} appearance="primary" title='back to sheet' icon={<ArowBackIcon />}>
                                                Back

                                            </IconButton> :

                                            <IconButton onClick={() => dispatch(setCollapse())} appearance="primary" title='Upload new file' icon={<FileUploadIcon />}>

                                                Upload
                                            </IconButton>
                                    )
                                }

                            </div>
                            <div className='flot-left'>
                                <img className='profile-pic' src="/profile-circle.png" alt="logo" />
                            </div>
                            <div className='flot-left profile-detail'>
                                <Nav>
                                    <Nav.Menu title={userInfo?.login?.first_name + " " + userInfo?.login?.last_name}>

                                        <Nav.Item onClick={() => logoutUser()}>Logout</Nav.Item>
                                    </Nav.Menu>
                                </Nav>
                            </div>

                        </div>
                    </header>
                    <Content className='content'>
                        {children}

                    </Content>
                </Container>
            </Container>



        </div>
    );
}

export default React.memo(Layout);
