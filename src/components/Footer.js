import React from 'react';
import { Box, Typography, Link as MuiLink, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FC902B',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <MuiLink component={Link} to="/" sx={{ color: 'black', textDecoration: 'none' }}>
            Home
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={Link} to="/about" sx={{ color: 'black', textDecoration: 'none' }}>
            About
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={Link} to="/services" sx={{ color: 'black', textDecoration: 'none' }}>
            Services
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={Link} to="/contact" sx={{ color: 'black', textDecoration: 'none' }}>
            Contact
          </MuiLink>
        </Grid>
      </Grid>
      <Typography sx={{ color: 'black', marginTop: '10px' }}>
        Contact Email: britney@nerdconsulting.tech
      </Typography>
      <MuiLink href="https://www.instagram.com/nerdconsulting" target="_blank" rel="noopener noreferrer" sx={{ color: 'black', textDecoration: 'none' }}>
        Instagram
      </MuiLink>
    </Box>
  );
};

export default Footer;