import React from 'react';
import './customeDrawer.css'
import { Drawer, ButtonToolbar, Button, Placeholder } from 'rsuite';
import LightWeight from './lightWeights/lightWeight';
const CustomeDrawer = ({ open, setOpen }) => {
    return (
        <>


            <Drawer open={open} onClose={() => setOpen(false)}>
                <Drawer.Body>
                    <div className='drawer-bdy'>
                        <div className='charting-heading'>Jan 2023</div>
                        <div>Metor Number: 1011</div>
                        {/* <p className='charting-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimten book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p> */}
                        {/* <img className='img-100' src="/charting.png" alt="charting" /> */}

                        <LightWeight />
                    </div>

                </Drawer.Body>

            </Drawer>


        </>
    );
}

export default CustomeDrawer;
