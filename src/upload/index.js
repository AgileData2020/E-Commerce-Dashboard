import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Uploader, useToaster, Message } from 'rsuite';

import { sheetEndPoint } from '../api/endPoints';
import { getLatestFile, setSheetActiveTab, getTabsName, setCollapse } from '../redux/slices/common';




function Upload() {
  const getCommoanData = useSelector(state => state.commonData);
  const navigate = useNavigate();
  const toaster = useToaster();
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();


  return (
    <>

      <main>
        <div className='upload-data'>
          <Uploader
            className='upload-area'
            action={process.env.REACT_APP_API_URL + sheetEndPoint.Upload}
            fileList={selectedFile}
            headers={{ Authorization: `Bearer ${localStorage.getItem('token')}` }}
            onSuccess={(response, file) => {
              toaster.push(<Message type="success">Uploaded successfully</Message>);

              if (response?.excel_file) {

                dispatch(getLatestFile(response?.excel_file));
                dispatch(getTabsName(response?.sheet_names))
                dispatch(setSheetActiveTab(response?.sheet_names[0]));
                dispatch(setCollapse(1));
                navigate('/dashboard');
              }

            }}
            onError={(error) => {

              toaster.push(<Message type="error">{error.response.detail}</Message>);

            }}
            draggable>
            <div className='mt-20p' style={{ alignItems: 'center', justifyContent: 'center' }}>
              <img className='' src="/uload-icon.png" alt="logo" />
              <div className='upload-text'>Upload Data File</div>
              <span>or <span className='blue-text'>browse</span>  your file to upload</span>
            </div>
          </Uploader>

        </div>


      </main>
    </>
  )
}


export default Upload