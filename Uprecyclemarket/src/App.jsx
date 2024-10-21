import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/NavigatioN';
import HomePage from './components/HomePage';
import MarketplacePage from './components/MarketplacePage';
import ScrapCollectionPage from './components/ScrapCollectionPage';
import Dashboard from './components/Dashboard';
import ProfilePage from './components/ProfilePage';
import Login from './components/login';
import Register from './components/register';
import ContactPage from './components/ContactPage';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import StoreImageTextFirebase from './components/AddImages';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#2196f3',
    },
    background: {
      default: '#ffffff',
      paper: '#212121',
    },
  },
});

export default function App() {
  return (
    <AuthProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navigation />
          <Box component="main" flexGrow={1}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/scrap-collection" element={<ScrapCollectionPage />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } />
              {/* <Route path="/contact" element={<ContactPage />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/add-scrap-images" element={
                <ProtectedRoute>
                  <StoreImageTextFirebase />
                </ProtectedRoute>
              } />
              
            </Routes>
            
          </Box>
          <Box component="footer" bgcolor="primary.main" color="white" p={2} textAlign="center">
            <Typography variant="body2">
              © 2024 RecycleMarketplace. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Router>
      <ToastContainer />
    </ThemeProvider>
    </AuthProvider>
  );
}
