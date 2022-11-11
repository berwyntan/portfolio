import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';

export default function Layout () {

    

    return (
        <>
        <AppBar position="sticky">
        <Toolbar>
          
          <Box sx={{display: 'flex', justifyContent: 'flex-start', flexGrow: 1}}>           
            <Button component="a" href="/" color='inherit' size='large' variant='solid' sx={{ '&:hover': { color: '#d7d8d9' }}}>PORTFOLIO</Button>
            <Button component="a" href="/about" color='inherit' size='large' variant='solid' sx={{ '&:hover': { color: '#d7d8d9' }}}>PROFILE</Button>
            <Button component="a" href="https://www.dropbox.com/s/885phqwg3o8rwag/CV%2010%20Nov%202022.pdf?dl=0" 
                target="_blank" color='inherit' size='large' variant='solid' sx={{ '&:hover': { color: '#d7d8d9' }}}>CV</Button>
          </Box>  
            
          <Box sx={{justifyContent: 'flex-end'}}>
            <IconButton color='inherit' edge='start' sx={{ mr: 2}} >
                <Link href="https://www.linkedin.com/in/berwyn-tan/" color='inherit' target="_blank" rel="noopener" sx={{ '&:hover': { color: '#d7d8d9' }}}>
                    <LinkedInIcon />
                </Link>                
            </IconButton>   

            <IconButton color='inherit' edge='start' sx={{ mr: 2 }} >
                <Link href="https://github.com/berwyntan" color='inherit' target="_blank" rel="noopener" sx={{ '&:hover': { color: '#d7d8d9' }}}>
                    <GitHubIcon /> 
                </Link>               
            </IconButton>  
                
            <IconButton color='inherit' edge='start' sx={{ mr: 2 }} >
                <Link href="mailto:berwyntan@gmail.com" color='inherit' target="_blank" rel="noopener" sx={{ '&:hover': { color: '#d7d8d9' }}}>
                    <EmailIcon />
                </Link>                
            </IconButton>     
          </Box>           
        </Toolbar>
        </AppBar>
        <Outlet />
        </>
    )
}