import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" to='/'>
          Wellness GYM
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const Footer = () => {

    return(

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: 'orange',
            marginTop: 'auto'
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              Wellness GYM el gimnasio donde lograras tus metas.
            </Typography>
            <Copyright />
          </Container>
        </Box>
      
    )
}

export default Footer