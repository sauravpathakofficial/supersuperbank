import React from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Login = ({open,handleClose}) => {
    return (
      <Modal
        open={open}
        onClose={handleClose} 
      >
        <Box sx={{position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'white',
            border: '2px solid #000',
            boxShadow: 24,
            borderRadius:"20px",
            p: 4,
      }}>
          <form >
            <TextField label="Enter BankId" variant="filled" sx={{width:'370px',my:2,mx:1}} required />
            <TextField label="Enter password" variant="filled" sx={{width:'370px',my:2,mx:1}} required />
          </form>
          <div>
            <Button variant="contained" sx={{width:"150px",mx:3,p:1,backgroundColor:"#171010"}} onClick={handleClose}>
                Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary"  sx={{width:"150px",mx:2,p:1,backgroundColor:"#171010"}}>
                Login
            </Button>
         </div>
        </Box>
      </Modal>
  );
};

export default Login;
