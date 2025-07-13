import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const HotelCard = ({ hotel }) => {
    return (
        <Card sx={{ height: '100%' }}>
        <CardContent>
            <Typography variant="h6">{hotel.name}</Typography>
            <Typography variant="body2" color="text.secondary">
            {hotel.address}, {hotel.city}
            </Typography>
            {hotel.hotel_rating !== null && (
            <Typography variant="body2">Rating: {hotel.hotel_rating} ⭐</Typography>
            )}
            {hotel.phone_number && (
            <Typography variant="body2">Phone: {hotel.phone_number}</Typography>
            )}
        </CardContent>
        </Card>
    );
};

export default HotelCard;
