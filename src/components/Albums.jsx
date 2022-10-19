import { useState } from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';


import cardData from '../data';
import { padding } from '@mui/system';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];



export default function Album() {

  return (
      <>  
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Hi, I am Berwyn.
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Exploring technology. Switched from interior design to software engineering. 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link href="/about" color='inherit' underline="none">
                <Button variant="contained">PROFILE</Button>
              </Link>  
              
              {/* <Button variant="outlined">Get in touch</Button> */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cardData.map((card) => {
              
              // state and handlers to load gif on individual card hover
              const [isActive, setIsActive] = useState(false);

              const handleMouseover = () => {
                setIsActive(true);
                // console.log("mouse over")
              }
              const handleMouseOut = () => {
                setIsActive(false);
                // console.log("mouse out")
              }

              return (
              <Grid item key={card.appLink} xs={12} sm={6} md={4}>
                <Tooltip disableFocusListener disableTouchListener title="Keep hovering to preview">
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  onMouseOver={handleMouseover}
                  onMouseOut={handleMouseOut}
                >
                  <CardHeader 
                    title={card.header}
                    subheader={card.subHeader}                                        
                    sx={{ maxHeight: 400 }}
                  />    
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                      maxHeight: 400,
                      padding: 0.2
                    }}
                    src={ isActive ? card.gif : card.preview }
                    alt="project-image"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant='overline'>
                      Tech stack:
                    </Typography>
                    <Typography gutterBottom variant="body1">
                      {card.techStack}
                    </Typography>
                    <Typography variant='overline'>
                      About:
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button component="a" href={card.appLink} size="small" target="_blank" rel="noopener" variant="contained" sx={{ '&:hover': { color: '#ebeced' }}}>App</Button>
                    <Button component="a" href={card.githubLink} size="small" target="_blank" rel="noopener" variant="contained" sx={{ '&:hover': { color: '#ebeced' }}}>Github</Button>
                  </CardActions>
                </Card>
                </Tooltip>
              </Grid>
            )})}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box> */}
      {/* End footer */}
    </>
    
  );
}