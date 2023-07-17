import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Tabs from '../component/Tabs'
import BottomNavigation from '../component/BottomNavigation'

const Dashboard = () => {
    return (
        
            <Container maxWidth="xl" sx={{marginTop:'20px'}} >
                <Typography variant="h4" >FlowCal Data</Typography>
                <Grid container spacing={0} >
                    <Grid item xs={12} md={12}>
                        <Tabs />
                    </Grid>
                </Grid>
                <BottomNavigation />
            </Container>
        
    )
}

export default Dashboard