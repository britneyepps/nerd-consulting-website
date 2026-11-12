import React from 'react';
import { Box, Typography, Link as MuiLink, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  const links = [
    ['Home', '/'],
    ['About', '/about'],
    ['Services', '/services'],
    ['Speaking', '/speaking'],
    ['Contact', '/contact'],
  ];

  return (
    <Box component="footer" sx={{ backgroundColor: '#FC902B', padding: '20px', textAlign: 'center' }}>
      <Grid container spacing={2} justifyContent="center">
        {links.map(([name, path]) => (
          <Grid item key={path}>
            <MuiLink component={Link} to={path} sx={{ color: 'black', textDecoration: 'none' }}>
              {name}
            </MuiLink>
          </Grid>
        ))}
      </Grid>
      <Typography sx={{ color: 'black', marginTop: '10px' }}>
        Contact Email: britney@nerdconsulting.tech
      </Typography>
      <MuiLink href="https://www.instagram.com/nerdconsulting" target="_blank"
        rel="noopener noreferrer" sx={{ color: 'black', textDecoration: 'none' }}>
        Instagram
      </MuiLink>
    </Box>
  );
};
export default Footer;
