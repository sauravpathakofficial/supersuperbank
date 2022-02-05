import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import Signup from './Signup';
import Login from './Login';


const pages = ['Bank', 'Borrow', 'Discover'];


const Header = () => {
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenl = () => setOpenl(true);
  const handleClosel = () => setOpenl(false);
  const [openl, setOpenl] = React.useState(false);

  return (
    <AppBar position="static" sx={{backgroundColor:'#191919' , }}>
      <Container maxWidth="xl" sx={{py:2,m:0}}>
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
          >
            SuperSuperBank
          </Typography>
          <Box sx={{mx:20, flexGrow: 1, display: { xs: 'none', md: 'flex'  } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{mx:3,my: 2, color: 'white', display: 'block', fontSize: 18 }}
              >
                {page}
              </Button>
            ))}
                  </Box>
        <Button variant="contained" sx={{ml:-4,mr:2}} disableElevation onClick={handleOpen} >
          Join
        </Button>     
         <Signup open={open} handleClose={handleClose} /> 
                  
        <Button onClick={handleOpenl} variant="outlined" href="#outlined-buttons" startIcon= {<LoginIcon />}>
            Login
          </Button>   
        <Login open={openl} handleClose={handleClosel} />  
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;