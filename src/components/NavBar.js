import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Speaking', to: '/speaking' },
  { label: 'Contact', to: '/contact' },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#FC902B' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component={Link} to="/" sx={{ color: 'black', textDecoration: 'none' }}>
            Nerd Consulting
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <Button key={item.to} component={Link} to={item.to}
                aria-current={location.pathname === item.to ? 'page' : undefined}
                sx={{ color: 'black', fontWeight: location.pathname === item.to ? 'bold' : 'normal' }}>
                {item.label}
              </Button>
            ))}
          </Box>
          <IconButton aria-label="Open navigation" onClick={() => setMenuOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'black' }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <List sx={{ minWidth: 230 }} aria-label="Main navigation">
          {navItems.map(item => (
            <ListItemButton key={item.to} component={Link} to={item.to} onClick={() => setMenuOpen(false)}
              selected={location.pathname === item.to}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};
export default NavBar;
