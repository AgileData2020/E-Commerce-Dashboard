import { Box, Typography, Checkbox, Grid, IconButton, Button } from '@mui/material'
import React, { useState } from 'react'
import '././style.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const navigate = useNavigate();
  return (
    <>

      <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center", height: '500px', width: '515px', margin: 'auto' }}>
        <Box sx={{
          width: '500px',
          baxShadow: 10, backgroundImage: "url('bg5.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          borderRadius: '26px',
          position: 'absolute', zIndex: 0, height: '300px',

        }}>
        </Box>
        <Box sx={{
          width: '400px',
          baxShadow: 10,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '26px', height: '200px',
          zIndex: 1,
          alignItems: 'center',
        }}>
          <img src="hydrologo2.png" alt="hydro" style={{ width: '100px', }} />
          <Box >
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>Hydrocarbon</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", color: '#fff', fontSize: '25px', }} >itenlligence  </Typography>
          </Box>
          <Grid container >
            <Grid item xs={12} textAlign={"center"}>
              <Box className='main-div-checkbox' sx={{ width: '58px', borderRadius: 3, margin: 'auto', padding: '2px 0' }}>
                <Checkbox className='chekbox'
                  checked={checked}
                  onChange={handleCheckboxChange}
                  icon={<span style={{ color: 'inherit' }}>☐</span>}
                  checkedIcon={
                    <span style={{ color: green[600] }}>
                      {/* Replace the icon with your desired green icon */}
                      ✓
                    </span>
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ marginTop: '20px', textAlign: "left", fontWeight: '600' }} >Upload Data file: </Typography>
              <Typography variant="body1" sx={{ textAlign: "left", }} >Upload your data file to get started </Typography>
            </Grid>
            <Grid item xs={12} marginTop={1}>
              <Box sx={{ border: "1px dashed #696b71", width: '370px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', padding: "20px 10px", borderRadius: '10px' }}>
                <Grid container spacing={0} >
                  <Grid item xs={12} textAlign={"center"}>
                    <IconButton aria-label="delete" size="large" sx={{
                      marginTop: '5px', margin: 'auto', backgroundColor: '#c6c6c6', color: '#fff', ":hover":
                        { backgroundColor: '#cdcdcd', },

                    }}>
                      <ArrowUpwardIcon fontSize="inherit" />
                    </IconButton></Grid>
                  <Grid item xs={12} textAlign={"center"}>
                    <Typography variant="body1" sx={{ textAlign: "center", }} >Drop your files to Uplaod</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Grid container mt={1}>
                <Grid item xs={12} textAlign={"center"}>
                  <Button variant="contained" sx={{ padding: '5px 25px' }} onClick={() => navigate('/dashboard')}>Select Files</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Upload