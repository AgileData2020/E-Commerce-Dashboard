import React from 'react'




const BottomBar = ({ children }) => {
    const [value, setValue] = React.useState(0);
    return (
        <>
          
            {children}
        </>
    )
}

export default BottomBar;