import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { Badge, Button } from 'rsuite';
import { Uploader } from 'rsuite';
import { Progress } from 'rsuite';

import { Nav } from 'rsuite';




function Upload() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileSelect = (fileList) => {

    console.log(fileList[0])
    // setSelectedFile(event.target.files[0]);

  }
  return (
    <>

      <main>
        <div className='upload-data'>
          <Uploader className='upload-area' action='http://172.16.0.182:8000/file/upload/{file_type}' fileList={selectedFile} onChange={handleFileSelect} draggable>
            <div style={{ alignItems: 'center', justifyContent: 'center' }}>
              <img className='' src="uload-icon.png" alt="logo" />
              <div className='upload-text'>Upload Data File</div>
              <span>or <span className='blue-text'>browse</span>  your file to upload</span>
              <p className='upload-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
          </Uploader>

        </div>
        <div className='text-center' style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Button appearance="primary " className='btn-side'>Done</Button>
        </div >

      </main>
    </>
  )
}


export default Upload