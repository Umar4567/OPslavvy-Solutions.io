import React from 'react'
import Layout from '../component/Layout/Layout'
import { Box, Typography } from '@mui/material'

const Services = () => {
  return (
    <Layout>
            <Box sx={{
                 textAlign:"center",
                p:3,
                "& h4":{
                    fontWeight:"bold",
                    my:2,
                    fontSize:"2rem",
                    textDecoration:"underline"
                },
                
                "& P":{
                    textAlign:'justify',

                },
                "& li":{
                    textAlign:'justify',

                },
                "& ul":{
                  
                  textAlign:'center',

              },
                "@media (max-width:600px)":{
                    mt:0,
                    "& h4":{
                        fontSize:"1.5rem"
                    }
                }
            }}>
                <Typography variant='h4'>
                Our Offered Services
                </Typography>
               
                <p>
              
                <Typography variant='h5' marginTop="20px" align='center' fontWeight='bold'>
                Operations  Management and Solutions
                </Typography>  
                <ul>{'\u2023'} Operations Set-up and Partner integrations. </ul> 
                 <ul>{'\u2023'} Warehouse set-up and Inventory Management. </ul>
                 <ul>{'\u2023'} Order Fulfilment and Management.</ul>
                 <ul>{'\u2023'} Returns Management </ul>
                 <ul>{'\u2023'} Streamlined Ecommerce Processes </ul>
                 <ul>{'\u2023'} Reporting and Data Analytics for Informed Decision-Making </ul>
                 <ul>{'\u2023'} Returns Management </ul>
                 <Typography variant='h5' marginTop="20px" align='center' fontWeight='bold'>
                Operations  Management and Solutions
                </Typography> 
                <ul>{'\u2023'} Website development and Managementns. </ul> 
                 <ul>{'\u2023'} User Experience (UX) Design. </ul>
                 <ul>{'\u2023'} Performance Optimization.</ul>
                 <ul>{'\u2023'} Ongoing Maintenance and Support.</ul>
                 <Typography variant='h5' marginTop="20px" align='center' fontWeight='bold'>
              Marketing
                </Typography> 
                <ul>{'\u2023'} Digital Marketing Strategies. </ul> 
                 <ul>{'\u2023'} Social Media Management. </ul>
                 <ul>{'\u2023'} SEO and SEM.</ul>
                 <ul>{'\u2023'} Campaign Development and Optimisation. </ul>
                </p>

                

            </Box>
        </Layout>
  )
}

export default Services
