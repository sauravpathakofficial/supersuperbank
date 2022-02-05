import React from 'react';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Footer = () => {
    return (<Box sx={{background:"black" ,height:"300px",display:'flex',gap:2,px:3}}>
        <Box sx={{my: 3,mx:2, py:3,borderRadius: '15px',  width: '300px', height: '200px', borderColor: 'black'
            }}>
        <CardContent>
            <Typography sx={{fontSize: 20 ,color:"white",}} >
               Call us: 800.347.9222
                </Typography>
            <Typography sx={{my:4,fontSize: 20 ,color:"white",fontWeight:"bold",}} >
              Member Contact  Hours
                </Typography>
            <Typography sx={{fontSize: 16 ,color:"white",}} >
              Monday - Thursday: 8 am to 5:30 pm PT
              Friday: 8 am to 6 pm PT
              Saturday: 9 am to 2 pm PM
            </Typography>
            
        </CardContent>
        </Box>
        
        <Box sx={{my: 3,mx:2, py:3,borderRadius: '15px',  width: '300px', height: '200px', borderColor: 'black'
            }}>
        <CardContent>
            <Typography sx={{fontSize: 20 ,color:"white",fontWeight:"bold"}} >
              Services
                </Typography>
            <Typography sx={{my:5,fontSize: 16 ,color:"white",}} >
                Home Loans
                Commercial Real Estate
                Online and Mobile Banking
                Personal Banking
            </Typography>
            
        </CardContent>
        </Box>
         <Box sx={{my: 3,mx:2, py:3,borderRadius: '15px',  width: '300px', height: '200px', borderColor: 'black'
            }}>
        <CardContent>
            <Typography sx={{fontSize: 20 ,color:"white",}} >
               Call us: 800.347.9222
                </Typography>
            <Typography sx={{my:4,fontSize: 20 ,color:"white",fontWeight:"bold",}} >
              Member Contact  Hours
                </Typography>
            <Typography sx={{fontSize: 16 ,color:"white",}} >
              Monday - Thursday: 8 am to 5:30 pm PT
              Friday: 8 am to 6 pm PT
              Saturday: 9 am to 2 pm PM
            </Typography>
            
        </CardContent>
        </Box>
        <Box sx={{my: 3,mx:2, py:3,borderRadius: '15px',  width: '300px', height: '200px', borderColor: 'black'
            }}>
        <CardContent>
            <Typography sx={{fontSize: 20 ,color:"white",fontWeight:"bold"}} >
              Services
                </Typography>
            <Typography sx={{my:5,fontSize: 16 ,color:"white",}} >
                Home Loans
                Commercial Real Estate
                Online and Mobile Banking
                Personal Banking
            </Typography>
            
        </CardContent>
        </Box>
       
        
  </Box>);
};

export default Footer;
