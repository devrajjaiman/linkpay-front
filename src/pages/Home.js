import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to LinkPay
      </Typography>
      <Typography variant="body1" paragraph>
        LinkPay is your solution for easy and secure payments.
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  );
}

export default Home;