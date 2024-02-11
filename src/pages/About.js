import React from 'react'
import Layout from '../component/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
    return (
        <Layout>
            <Box sx={{
                 textAlign:"center",
                p:3,
                "& h4":{
                    fontWeight:"bold",
                    my:2,
                    fontSize:"2rem"
                },
                "& P":{
                    textAlign:'justify',

                },
                "& li":{
                    textAlign:'justify',

                },
                "@media (max-width:600px)":{
                    mt:0,
                    "& h4":{
                        fontSize:"1.5rem"
                    }
                }
            }}>
                <Typography variant='h4'>
                    ABOUT US
                </Typography>
                <p>
                    We are a dynamic and forward-thinking Ecommerce Specialists
                    that specializes in providing end-to-end solutions for Ecommerce sellers. With
                    a unique blend of expertise in website management, operations, and marketing,
                    we aim to be the one-stop destination for entrepreneurs looking to establish and optimize
                    their online presence.
                </p>
                
                <p>
              
                <Typography variant='h5' marginTop="20px">
                    What Set as Appart :
                </Typography>  <ul>
                <li>Comprehensive Ecommerce Management. </li> 
                 <li>Holistic Approach to Business Growth. </li>
                 <li>Solutions to daily operational challenges.</li>
                 <li>Continuous Innovation and Adaptation to Industry Trends. </li>
                 </ul>
                </p>

            </Box>
        </Layout>
    )
}

export default About