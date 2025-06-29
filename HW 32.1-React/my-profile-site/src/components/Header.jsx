import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
    return (
        <AppBar position="static">
        <Toolbar>
            <Button color="inherit" component={RouterLink} to="/">
            Головна
            </Button>
            <Button color="inherit" component={RouterLink} to="/todo">
            TODO
            </Button>
            <Button color="inherit" component={RouterLink} to="/swapi">
            SWAPI
            </Button>
        </Toolbar>
        </AppBar>
    );
}
