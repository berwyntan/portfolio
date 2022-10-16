import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Layout () {

    return (
        <>
        <AppBar position="sticky">
        <Toolbar>
          <Box sx={{justifyContent: 'flex-start', flexGrow: 1}}>
            <Typography variant="h6" color="inherit" noWrap align="left" sx={{ ml:2}}>
                PORTFOLIO
            </Typography>
          </Box>     
          <Box sx={{justifyContent: 'flex-end'}}>
            <IconButton color='inherit' edge='start' sx={{ mr: 2 }}>
                <LinkedInIcon />
            </IconButton>      
            <IconButton color='inherit' edge='start' sx={{ mr: 2 }} >
                <GitHubIcon />
            </IconButton>      
            <IconButton color='inherit' edge='start' sx={{ mr: 2 }} >
                <EmailIcon />
            </IconButton>     
          </Box>           
        </Toolbar>
        </AppBar>
        <Outlet />
        </>
    )
}