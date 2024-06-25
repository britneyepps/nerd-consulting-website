import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import your logo

const NavBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', marginBottom: '40px', top: 0, zIndex: 1300 }}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Box display="flex" alignItems="center">
              <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
              <Typography variant="h6" sx={{ color: 'black' }}>
                Nerd Consulting
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Button color="inherit" component={Link} to="/" sx={{ color: 'black' }}>Home</Button>
            <Button color="inherit" component={Link} to="/about" sx={{ color: 'black' }}>About</Button>
            <Button color="inherit" component={Link} to="/services" sx={{ color: 'black' }}>Services</Button>
            <Button color="inherit" component={Link} to="/contact" sx={{ color: 'black' }}>Contact</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;