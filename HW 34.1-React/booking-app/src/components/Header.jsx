import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';

const Header = () => {
    return (
        <AppBar position="static">
        <Container maxWidth="lg">
            <Toolbar disableGutters>
            <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{
                textDecoration: 'none',
                color: 'inherit',
                flexGrow: 1,
                fontWeight: 600,
                }}
            >
                Booking App
            </Typography>
            <Button color="inherit" component={RouterLink} to="/">
                Home
            </Button>
            <Button color="inherit" component={RouterLink} to="/about">
                About
            </Button>
            <Button color="inherit" component={RouterLink} to="/hotels">
                Hotels
            </Button>
            </Toolbar>
        </Container>
        </AppBar>
    );
};

export default Header;
