import React from 'react';
import { Message, useToaster } from 'rsuite';

const CustomMessage = ({ type, content, duration }) => {
    const toaster = useToaster();
    // Display the message using the Message component
    toaster.push(<Message showIcon type={'success'} closable>
        The message appears on the .
    </Message>, { placement: 'topEnd', duration: 5000 })

};

export default CustomMessage;