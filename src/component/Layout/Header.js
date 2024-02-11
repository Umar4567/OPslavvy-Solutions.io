
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import "../../styles/Headerstyle.css";
import MenuIcon from '@mui/icons-material/Menu';
import React,{useState} from 'react';
const Header = () => {
    const [mobileOpen,setMobileOpen]=useState(false)
   const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
   }
   const drawer =(
<Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
<Typography variant='h5' component='div'
                           
                            sx={{flexGrow:1,my:2}}
                            >
                            <AddBusinessIcon />
                            OPslavvy Solutions
                        </Typography>
                       
                            <ul className="mobile-navigation">
                                <li>
                                    <NavLink activeClassName='active'  to={"/"}>Home</NavLink ></li>
                                <li> <NavLink  to={"/About"}>About</NavLink ></li>
                                <li><NavLink  to={"/Services"}>Services</NavLink ></li>
                                <li><NavLink  to={"/Contact"}>Contact</NavLink></li>
                                
                            </ul>
                        </Box>

    )
       
    
    return (
        <>
            <Box>
                <AppBar component={'nav'} sx={{ bgcolor: 'grey' }}>
                   
                    <Toolbar>
                        <IconButton color='inherit' aria-label='open drawer'
                         edge='start' sx={{mr:2,display:{sm:'none'}}}
                         onClick={handleDrawerToggle}
                         >
<MenuIcon/>
                        </IconButton>
                        <Typography variant='h5' component='div'
                            sx={{ flexGrow: 1 }}>
                            <AddBusinessIcon />
                            OPslavvy Solutions
                        </Typography>
                        <Divider/>
                        <Box  sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className="navigation-menu">
                                <li>
                                    <NavLink activeClassName='active' to={"/"}>Home</NavLink></li>
                                <li> <NavLink to={"/About"}>About</NavLink></li>
                                <li><NavLink to={"/Services"}>Services</NavLink></li>
                                <li><NavLink to={"/Contact"}>Contact</NavLink></li>
                               
                                
                            </ul>
                        </Box>
                    </Toolbar>

                </AppBar>
                <Box component='nav'>
<Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}
 sx={{display:{xs:'block',sm:'none'},"& .MuiDrawer-paper":{boxSizing:"border-box",
width:"200px"},
 
 }}>
    {drawer}
</Drawer>
                </Box>
                <Box >
                    <Toolbar/>
                </Box>
                
            </Box>
        </>

    )
}

export default Header