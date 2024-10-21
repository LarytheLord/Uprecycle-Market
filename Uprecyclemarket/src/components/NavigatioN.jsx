import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';

export default function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ReEarth
        </Typography>
        <Button color="inherit" component={RouterLink} to="/" sx={{ marginRight: 2 }}>
          <img src="./src/assets/home.png" alt="Logo" style={{ width: 24, height: 24, marginRight: 8 }} />
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/marketplace" sx={{ marginRight: 2 }}>
          <img src="./src/assets/market.png" alt="Market" style={{ width: 24, height: 24, marginRight: 8 }} />
          Marketplace
        </Button>
        <Button color="inherit" component={RouterLink} to="/scrap-collection" sx={{ marginRight: 2 }}>
          <img src="./src/assets/recycle.png" alt="Sell" style={{ width: 24, height: 24, marginRight: 8 }} />
          Sell Scrap
        </Button>
        <Button color="inherit" component={RouterLink} to="/dashboard" sx={{ marginRight: 2 }}>
          <img src="./src/assets/dashboard.png" alt="Logo" style={{ width: 24, height: 24, marginRight: 8 }} />
          Dashboard
        </Button>
        <Button color="inherit" component={RouterLink} to="/profile">
          <img src="./src/assets/login.png" alt="Logo" style={{ width: 24, height: 24, marginRight: 8 }} />
          Profile
        </Button>
      </Toolbar>
    </AppBar>
  );
}
