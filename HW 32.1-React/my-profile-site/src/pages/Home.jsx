// src/pages/Home.jsx

import React from 'react';
import { Typography, Card, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';

export default function Home() {
    const personalInfo = {
        name: 'Масло Валерій',
        age: 25,
        city: 'Дніпро, Украина',
        email: 'valerii.maslo@gmail.com'
    };

    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Git'
    ];

    return (
        <Card sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
        <CardContent>
            <Typography variant="h4" gutterBottom>
            Резюме
            </Typography>

            <Typography variant="h6">Прізвище та ім'я:</Typography>
            <Typography>{personalInfo.name}</Typography>

            <Typography variant="h6" sx={{ mt: 2 }}>Вік:</Typography>
            <Typography>{personalInfo.age}</Typography>

            <Typography variant="h6" sx={{ mt: 2 }}>Місто, країна:</Typography>
            <Typography>{personalInfo.city}</Typography>

            <Typography variant="h6" sx={{ mt: 2 }}>Email:</Typography>
            <Typography>{personalInfo.email}</Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6">Навички:</Typography>
            <List>
            {skills.map((skill, index) => (
                <ListItem key={index} disablePadding>
                <ListItemText primary={skill} />
                </ListItem>
            ))}
            </List>
        </CardContent>
        </Card>
    );
}
