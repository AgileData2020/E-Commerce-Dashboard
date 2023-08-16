import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {  Grid, IconButton } from '@mui/material';
import CustomTable from '../table';
import DateRange from '../DateRange';
import SearchIcon from '@mui/icons-material/Search';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Tabss = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={0} >
                    <Grid item xs={12} md={12}>
                        <Box sx={{ margin: '0 50px' }}>
                            <Grid container spacing={0} >
                                <Grid item xs={12} md={8} lg={6}>
                                    <Box sx={{marginTop:'8px'}}>
                                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                                            <Tab label="FlowCal Data" {...a11yProps(0)} sx={{ fontSize: '12px' }} />
                                            <Tab label="Envelope" {...a11yProps(1)} sx={{ fontSize: '12px' }} />
                                            <Tab label="FlowCal Row" {...a11yProps(2)} sx={{ fontSize: '12px' }} />
                                            <Tab label="Input" {...a11yProps(1)} sx={{ fontSize: '12px' }} />
                                            <Tab label="Output" {...a11yProps(2)} sx={{ fontSize: '12px' }} />
                                        </Tabs>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={4} lg={6} >
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: { xl: 'flex-end', lg: 'flex-end', md: 'center' }, alignItems: 'center', }}>
                                        <DateRange />
                                        <IconButton aria-label="delete" sx={{backgroundColor:'#4f22ed',marginLeft:"10px","&:hover":{backgroundColor:"#4f22ed"}}}>
                                            <SearchIcon />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TabPanel value={value} index={0}>
                            <CustomTable />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                        <CustomTable />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                        <CustomTable />
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Item four
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            Item five
                        </TabPanel>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Tabss