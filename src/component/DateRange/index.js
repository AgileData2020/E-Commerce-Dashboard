import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import './style.css'
import { Box } from '@mui/material';


const DateRange = () => {
  const [value, setValue] = React.useState(null);
  return (
  <>  
    {/* <LocalizationProvider  dateAdapter={AdapterDayjs} >
      <DemoContainer
        components={['DateRangePicker', 'DateRangePicker', 'DateRangePicker']}
        
      >
        <DemoItem component="DateRangePicker">
          <DateRangePicker calendars={2} />
        </DemoItem>
        
      </DemoContainer>
    </LocalizationProvider> */}
     <LocalizationProvider dateAdapter={AdapterDayjs} className="Blue-Berry" >
      <DemoContainer components={['DateRangePicker']}  >
        <DateRangePicker localeText={{ start: 'To', end: 'From' }} className='Date_Range_picker' />
      </DemoContainer>
    </LocalizationProvider>
    </>
  );
}

export default DateRange