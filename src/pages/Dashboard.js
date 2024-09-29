import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function Dashboard() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="body1">
          Welcome to your LinkPay dashboard. Here you can manage your payments and view your transaction history.
        </Typography>
      </Paper>
    </Container>
  );
}

export default Dashboard;