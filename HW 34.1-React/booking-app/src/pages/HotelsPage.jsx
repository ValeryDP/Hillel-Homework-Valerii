import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Grid, CircularProgress, Alert } from '@mui/material';
import HotelCard from '../components/HotelCard';

const HotelsPage = () => {
    const { hotels, loading, error } = useSelector((state) => state.booking);

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
            Hotels
        </Typography>

        {loading && (
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
            <CircularProgress />
            </Grid>
        )}

        {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
            {error}
            </Alert>
        )}

        {!loading && hotels.length === 0 && (
            <Typography variant="body1">No hotels found for the selected destination.</Typography>
        )}

        <Grid container spacing={2} sx={{ mt: 2 }}>
            {hotels.map((hotel) => (
            <Grid item xs={12} sm={6} md={4} key={hotel.id}>
                <HotelCard hotel={hotel} />
            </Grid>
            ))}
        </Grid>
        </Container>
    );
};

export default HotelsPage;
