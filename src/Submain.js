import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SavingsIcon from '@mui/icons-material/Savings';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Submain = () => {
    return <>
        <Container >
           <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ my: 4,mx:7,  display: { xs: 'none', md: 'flex' },fontWeight:"bold" }}
          >
           We're here to make your life better. How can we help today?
            </Typography>
            <Container sx={{mx:3, my:7,display:'flex',gap:3 }}>
            <Box sx={{background: 'white',my: 3, borderRadius: '15px',  width: '220px', height: '200px', borderColor: 'black'
            }} >
                <CardContent >
                    <Typography sx={{ fontSize: 18,color:'#F76E11',fontWeight:'bold' }} color="text.secondary" gutterBottom>
                    Home Loans
                    </Typography>
                    <IconButton  size="large">
                            <HomeIcon sx={{fontSize:100,color:'#FF9F45',fontWeight:'bold'}} />
                    </IconButton>    
                </CardContent>
            </Box>    
            <Box sx={{background: 'white',my: 3, borderRadius: '15px',  width: '220px', height: '200px', borderColor: 'black'
            }} >
                <CardContent >
                    <Typography sx={{ fontSize: 18,color:'#F76E11',fontWeight:'bold' }} color="text.secondary" gutterBottom>
                    Credit Cards
                    </Typography>
                    <IconButton  size="large">
                            <CreditCardIcon sx={{fontSize:100,color:'#FF9F45',fontWeight:'bold'}} />
                    </IconButton>    
                </CardContent>
            </Box>
            <Box sx={{
                    background: 'white', my: 3, borderRadius: '15px', width: '220px', height: '200px', borderColor: 'black'
            }} >
                <CardContent >
                    <Typography sx={{ fontSize: 18,color:'#F76E11',fontWeight:'bold' }} color="text.secondary" gutterBottom>
                    Personal Banking
                    </Typography>
                    <IconButton  size="large">
                            <SavingsIcon sx={{fontSize:100,color:'#FF9F45',fontWeight:'bold'}} />
                    </IconButton>    
                </CardContent>
            </Box>
            <Box sx={{
                    background: 'white', my: 3, borderRadius: '15px', width: '220px', height: '200px', borderColor: 'black'
            }} >
                <CardContent >
                    <Typography sx={{ fontSize: 18,color:'#F76E11',fontWeight:'bold' }} color="text.secondary" gutterBottom>
                    All Loans
                    </Typography>
                    <IconButton  size="large">
                            <MonetizationOnIcon sx={{fontSize:100,color:'#FF9F45',fontWeight:'bold'}} />
                    </IconButton>    
                </CardContent>
            </Box>    
            </Container>
        </Container>
    </> ;
};

export default Submain;
