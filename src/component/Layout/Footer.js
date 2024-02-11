import React from 'react'
import {Box,Typography} from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
   <>
    <Box sx={{textAlign:'center',bgcolor:"black",color:"white",p:2 }}>
        <Box sx={{my:3,"& svg":{
            fontSize:"60px",
            cursor:"pointer",
            mr:2,
        },
            "& svg:hover":{
                color:'gold',
                transform:'translateX(5px)',
                transition:'all 400ms'
            
        }}}>
<InstagramIcon/>
<TwitterIcon/>
<GitHubIcon/>
<YouTubeIcon/>
        </Box>
        <Typography variant='h6'sx={{'@media(max-width:600px)':{
            fontSize:'1rem'
        }}}>
            All Rights Reserved &copy; OPslavvy Solutions
        </Typography>
    </Box>
   </>
  )
}

export default Footer
