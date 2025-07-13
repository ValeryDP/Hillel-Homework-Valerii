import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BookingForm from '../components/BookingForm';
import { useDispatch } from 'react-redux';
import { sendBookingRequest } from '../redux/slices/bookingSlice';

const MainPage = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(sendBookingRequest(values));
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
            Booking Form
        </Typography>
        <Typography variant="body1" gutterBottom>
            Please fill in the details to find your hotel.
        </Typography>
        <BookingForm onSubmit={handleSubmit} />
        </Container>
    );
};

export default MainPage;
