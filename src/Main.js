// https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
const Main = (props) => {


return (
  <Card >
        <div style={{ position: "relative" }}>
         <CardMedia style={{ height: "630px", }} component="img" image={"https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} title="Family" alt="Family"
            /> 
         <div style={{ position: "absolute", top: 250, left: "50%", transform: "translateX(-50%)", fontSize:'50px',fontWeight:'bolder',color:'#D1E8E4'}}
      >
        It's good to be home
            </div>
        <Button variant="contained" sx={{position: "absolute", color: "white", top: 350, left: "50%", transform: "translateX(-50%)", backgroundColor:"#FF5C58",fontSize:18,p:2,':hover': {
      bgcolor: 'FFB085', 
      color: 'white',
    }}} disableElevation >
          Explore Home Loans
        </Button> 

       </div>
</Card>
)};
export default Main;