import React from 'react';
import { Box, Typography, Grid, Link as MuiLink } from '@mui/material';
import { Instagram } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#FC902B', padding: '20px 0', marginTop: '40px' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <MuiLink component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={Link} to="/about" sx={{ textDecoration: 'none', color: 'inherit' }}>
            About
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={Link} to="/services" sx={{ textDecoration: 'none', color: 'inherit' }}>
            Services
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={Link} to="/contact" sx={{ textDecoration: 'none', color: 'inherit' }}>
            Contact
          </MuiLink>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="body1" gutterBottom>
          Contact us: britney@nerdconsulting.tech
        </Typography>
        <MuiLink href="https://www.instagram.com/nerdconsulting" target="_blank" rel="noopener noreferrer" sx={{ color: 'inherit' }}>
          <Instagram sx={{ fontSize: 30 }} />
        </MuiLink>
      </Box>
    </Box>
  );
};

export default Footer;