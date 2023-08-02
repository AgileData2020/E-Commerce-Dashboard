import React from 'react';
import { Drawer, ButtonToolbar, Button, Placeholder } from 'rsuite';
const CustomeDrawer = ({ open, setOpen }) => {
    return (
        <>
            <ButtonToolbar>
                <Button onClick={() => setOpen(true)}>Open</Button>

            </ButtonToolbar>

            <Drawer open={open} onClose={() => setOpen(false)}>
                <Drawer.Body>
                    <Placeholder.Paragraph />
                </Drawer.Body>
            </Drawer>


        </>
    );
}

export default CustomeDrawer;
