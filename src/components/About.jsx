import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import profile from '../assets/profile.jpg'

export default function About () {
    return(
        <Container sx={{ py: 4 }} maxWidth="md">
            <Typography
              variant="h4"
              align="center"
              color="text.primary"
              sx={{ mb: 3 }}
            //   gutterBottom
            >
              Berwyn Tan
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center"}}>
                <Avatar
                    alt="Berwyn Tan"
                    src={profile}
                    sx={{ width: 156, height: 156 }}
                    
                />
            </Box>
            
            <Typography             
              align="center"
              color="text.primary" 
            //   variant="h6"  
              sx={{ my: 2 }}           
            >
              Junior software engineer with a previous career in commercial interior design. Wide skill set includes MERN stack software development, project management, and operations. Adept problem solver with ~10 years of site experience, stakeholder management and space planning built on a foundation in mechanical engineering (systems).

              
            </Typography>
            {/* <Typography             
              align="center"
              color="text.primary" 
            //   variant="h6"  
              sx={{ mb: 3 }}           
            >
              Transferable skills include: problem solving, project management,
              stakeholder management, design and business processes.
              
            </Typography> */}

            <Typography
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Tech Stack
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              MongoDB | Express | React | Node
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Cypress
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              HTML | CSS | Javascript | jQuery | Git
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{ mt: 2 }}
            >
              Education
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
            CS50's Introduction to Computer Science - HarvardX CS50x (Verified track): Nov - Dec 2022              
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
            Software Engineering Immersive - General Assembly: Jun - Dec 2022
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
            Bachelor of Mechanical Engineering (3rd class Honours, GPA: 3.47) - Nanyang Technological University

            </Typography>

        </Container>
        
            
        
        
    )
}