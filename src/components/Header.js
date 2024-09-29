import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import LinkPayIcon from './LinkPayIcon';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" alignItems="center" sx={{ flexGrow: 1}}>
                    <LinkPayIcon size={32} />
                    <Typography variant="h6" component="div" sx={{ ml: 1 }}>
                    LinkPay
                    </Typography>
                </Box>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
