import React from 'react'

import { Box, Container } from '@mui/material'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import { Padding } from '@mui/icons-material';


const BottomBar = ({ children }) => {
    const [value, setValue] = React.useState(0);
    return (
        <Container maxWidth="xl" sx={{ marginTop: '20px' }} >
            {children}
            <Box>
                <Box sx={{ width: 500, margin: 'auto' }}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        sx={{ backgroundColor: '#4f22ed', borderRadius: '10px', }}
                    >
                        <img src='hydrocarbonlogo.png' style={{ marginLeft: '5px', marginTop: '5px', height: '80%' }} />
                        <BottomNavigationAction />
                        <NotificationsNoneIcon sx={{ color: 'white', fontSize: '30px', margin: 'auto' }} />
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ margin: 'auto' }} />
                        <MenuIcon sx={{ color: 'white', fontSize: '30px', margin: 'auto', Padding: '10px 0' }} />
                    </BottomNavigation>
                </Box>
            </Box>
        </Container>
    )
}

export default BottomBar;