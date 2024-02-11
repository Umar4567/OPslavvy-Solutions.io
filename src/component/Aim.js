import { Box } from '@mui/material'
import React from 'react'

const Aim = () => {
  return (
    <Box sx={{
        textAlign:"center",
        p:3,
        
        "& h3":{
            fontWeight:"bold",
            my:2,
            fontSize:"2rem",
            textDecoration:"underline",
        },
        "& P":{
            textAlign:'justify',

        },
        "& li":{
            textAlign:'justify',

        },
        "@media (max-width:600px)":{
            mt:0,
            "& h3":{
                fontSize:"1.5rem"
            }
        }
    }}>

        <h3>Vision</h3>
        <p>
        To be the leading Ecommerce consultancy, empowering startups to thrive in the digital marketplace. We envision a future where businesses seamlessly integrate online operations, achieve 
        sustainable growth, and surpass their Ecommerce goals with confidence."
        </p>
        <h3>Mission</h3>
        <p>
        At Opslavvy, our mission is to provide unparalleled support to Ecommerce startups by 
        delivering exceptional website management, operations, and marketing services. We strive to 
        be the catalyst for our clients' success, fostering innovation, efficiency, and profitability in
         the ever-evolving world of online commerce. Our goals include achieving high client satisfaction 
         rates, establishing market leadership, and 
        consistently innovating to stay at the forefront of the industry."
        </p>
        </Box>
  )
}

export default Aim