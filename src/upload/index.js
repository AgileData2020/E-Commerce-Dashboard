import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { Badge, Button } from 'rsuite';
import { Uploader } from 'rsuite';
import { Progress } from 'rsuite';

import { Nav } from 'rsuite';




function Upload() {
  const navigate = useNavigate();
  return (
    <>
 <header className='header-bg'>


<div className='togal-button'>
    {/* <NavToggle expand={expand} onChange={() => setExpand(!expand)} /> */}
</div>

<div className='togal-right pd-13'>
    <div className='flot-left ms-30'>
        <Badge>
            <Button >
                <img src="notiicatin.png" /></Button>
        </Badge>
    </div>
    <div className='flot-left'>
        <img className='profile-pic' src="profile-img.jpg" alt="logo" />
    </div>



    <div className='flot-left profile-detail'> 
    <Nav>    
    <Nav.Menu  title="Hello, Andrew!">
      <Nav.Item >Profile</Nav.Item>
      <Nav.Item >Checkout</Nav.Item>
      <Nav.Item >Logout</Nav.Item>     
    </Nav.Menu>
  </Nav>
    </div>

</div>
</header>
<main>
  <div className='upload-data'>
<Uploader className='upload-area'  action="//jsonplaceholder.typicode.com/posts/" draggable>
      <div style={{  alignItems: 'center', justifyContent: 'center'  }}>
      <img className='' src="uload-icon.png" alt="logo" />
        <div className='upload-text'>Upload Data File</div>
        <span>or <span className='blue-text'>browse</span>  your file to upload</span>
        <p className='upload-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
    </Uploader>
    <div className='progress'>
  
    <Progress.Line percent={100} status="success" />

    </div>
    </div>
<div className='text-center'  style={{  alignItems: 'center', justifyContent: 'center'  }}>
<Button appearance="primary " className='btn-side'>Done</Button>
</div >
   
    </main>
    </>
  )
}


export default Upload