import React from 'react'




const BottomBar = ({ children }) => {
    const [value, setValue] = React.useState(0);
    return (
        <>
            <h1>Layout like sidebar bottom navigation</h1>
            {children}
        </>
    )
}

export default BottomBar;