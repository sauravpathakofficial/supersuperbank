import React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Section = () => {
    return <>
        <Box sx={{display:"flex"}}>
            <CardMedia style={{ height: "630px", width: "50%",borderRadius:"20px" }} component="img" image={"https://images.unsplash.com/photo-1627662055794-94ab33f5913a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"} title="Family" alt="Family"
                sx={{mx:1,my:4}}
            /> 
            <Container>
                <Typography
                    variant="h4"
                    noWrap
                    component="div"
                    sx={{  my: 4,mx:7,fontWeight:"bold" }}
                >
                  A better way to bank and borrow
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{color:"#7F7C82"}}>
                    Life is busy and unpredictable. At SuperSuperBank , we are on a mission to find better ways to meet your financial needs so you can spend less time banking and more time doing the things you love with the people you love.
                </Typography>
                 <Typography
                    variant="h6"
                    component="p"
                    sx={{color:"#7F7C82",my:4}}>
                    Life is busy and unpredictable. At SuperSuperBank , we are on a mission to find better ways to meet your financial needs so you can spend less time banking and more time doing the things you love with the people you love.
                </Typography> <Typography
                    variant="h6"
                    component="p"
                    sx={{color:"#7F7C82",my:4}}>
                    Life is busy and unpredictable. At SuperSuperBank , we are on a mission to find better ways to meet your financial needs so you can spend less time banking and more time doing the things you love with the people you love.
                </Typography>
                 <Typography
                    variant="h6"
                    component="p"
                    sx={{color:"#7F7C82"}}>
                    Life is busy and unpredictable. At SuperSuperBank , we are on a mission to find better ways to meet your financial needs so you can spend less time banking and more time doing the things you love with the people you love.
                </Typography>
            </Container>
        </Box>
    </>;
};

export default Section;
