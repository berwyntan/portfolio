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
              Junior software engineer with a previous career in interior design. Self starter with interests in technology, 
              psychology and decision making.
              
            </Typography>
            <Typography             
              align="center"
              color="text.primary" 
            //   variant="h6"  
              sx={{ mb: 3 }}           
            >
              Transferable skills include: problem solving, project management,
              stakeholder management, design and business processes.
              
            </Typography>

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
              General Assembly: Software Engineering Immersive - 2022
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Nanyang Technological University: Mechanical Engineering - 2005 to 2009
            </Typography>

        </Container>
        
            
        
        
    )
}