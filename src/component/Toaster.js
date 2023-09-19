import React, { useEffect } from 'react';
import { Message, useToaster } from 'rsuite';





function CustomMessage({ type, content, duration }) {

    useEffect(() => {

    })
    const toaster = useToaster();
    return (
        // Display the message using the Message component
        // toaster.push(<Message showIcon type={'success'} closable>
        //     The message appears on the .
        // </Message>, { placement: 'topEnd', duration: 5000 })
        <h1>saaaaaaaaaaaaaaaaaaaa</h1>
    )

};

export default CustomMessage;