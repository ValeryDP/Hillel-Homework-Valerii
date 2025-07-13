import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutPage = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
            About Booking App
        </Typography>
        <Typography variant="body1" gutterBottom>
            This booking app is the final training project of Hillel IT School, created by Front-End Developer course student Valery Maslo, demonstrating the complete React-Redux-Saga workflow.
            It allows users to select destinations, arrival and departure dates, specify the number of adults and children,
            and dynamically retrieve a list of available hotels from the server.
        </Typography>
        <Box mt={2}>
            <Typography variant="body2" color="text.secondary">
            Stack: React, React Router, Redux Toolkit, Redux Saga, React Final Form, Material UI, Axios, JSON Server.
            </Typography>
        </Box>
        </Container>
    );
};

export default AboutPage;
