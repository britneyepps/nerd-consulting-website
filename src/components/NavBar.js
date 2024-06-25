import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#FC902B' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component={Link} to="/" sx={{ color: 'black', textDecoration: 'none' }}>
          Nerd Consulting
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '20px' }}>
          <Button component={Link} to="/" sx={{ color: 'black' }}>Home</Button>
          <Button component={Link} to="/about" sx={{ color: 'black' }}>About</Button>
          <Button component={Link} to="/services" sx={{ color: 'black' }}>Services</Button>
          <Button component={Link} to="/contact" sx={{ color: 'black' }}>Contact</Button>
        </Box>
        <IconButton edge="end" color="inherit" sx={{ display: { xs: 'flex', md: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;