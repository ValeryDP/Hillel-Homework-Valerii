import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box
        component="footer"
        sx={{
            p: 2,
            textAlign: 'center',
            borderTop: '1px solid #ddd',
            mt: 4
        }}
        >
        <Typography variant="body2" color="textSecondary">
            Контакти: valerii.maslo@gmail.com | Telegram: @ValeryDP | GitHub: ValeryDP
        </Typography>
        </Box>
    );
}
