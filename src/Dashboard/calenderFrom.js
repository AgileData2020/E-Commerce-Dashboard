import React from 'react'
import ModalCalender from '../component/Mdal'
import { Box, Grid } from '@mui/material'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

function CalenderFrom() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          Edit
        </Grid>
        <Grid item xs={12} md={12}>
          Update Date 
        </Grid>
        <Grid item xs={12} md={6}>
        
          <LocalizationProvider dateAdapter={AdapterDayjs} sx={{
          }} >
            {/* <DemoContainer components={['DateRangePicker']} sx={{}}  > */}
            <DateRangePicker localeText={{ start: 'To', end: 'From' }} className="DemoContainer"sx={{width:400}} />
            {/* </DemoContainer> */}
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CalenderFrom
