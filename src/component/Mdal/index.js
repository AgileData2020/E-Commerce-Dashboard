import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CalenderFrom from '../../Dashboard/calenderFrom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '20px'
};

const ModalCalender = ({ open, setOpen, children }) => {

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log('open', children)
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ borderRadius: '20px' }}
      ><>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width:580,
          height: 240,
          borderRadius: '20px',
          backgroundColor: 'white',
          opacity: '0.5',
        }}>
          </Box>



          <Box sx={style}>
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

            {<CalenderFrom />}
            <div>sddddddddddddddd</div>
          </Box>
          </>       
      </Modal>
    </div>
  );
}

export default ModalCalender;