import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPeople } from '../features/swapi/swapiSlice';
import {
    Button,
    Typography,
    List,
    ListItem,
    ListItemText,
    CircularProgress,
    Container,
    Card,
    CardContent
    } from '@mui/material';

    export default function SwapiPage() {
    const dispatch = useDispatch();
    const { people, loading, error } = useSelector(state => state.swapi);

    const handleLoad = () => {
        dispatch(loadPeople());
    };

    return (
        <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Персонажі Star Wars</Typography>
        <Button
            variant="contained"
            onClick={handleLoad}
            disabled={loading}
            sx={{ mb: 2 }}
        >
            {loading ? 'Завантаження...' : 'Завантажити персонажів'}
        </Button>

        {error && (
            <Typography color="error" gutterBottom>
            Помилка: {error}
            </Typography>
        )}

        {loading && <CircularProgress />}

        {!loading && people.length > 0 && (
            <List>
            {people.map((person, index) => (
                <Card key={index} sx={{ mb: 2 }}>
                <CardContent>
                    <Typography variant="h6">{person.name}</Typography>
                    <List dense>
                        <ListItem><ListItemText primary={`Зріст: ${person.height}`} /></ListItem>
                        <ListItem><ListItemText primary={`Маса: ${person.mass}`} /></ListItem>
                        <ListItem><ListItemText primary={`Колір волосся: ${person.hair_color}`} /></ListItem>
                        <ListItem><ListItemText primary={`Колір шкіри: ${person.skin_color}`} /></ListItem>
                        <ListItem><ListItemText primary={`Цвет глаз: ${person.eye_color}`} /></ListItem>
                        <ListItem><ListItemText primary={`Рік народження: ${person.birth_year}`} /></ListItem>
                        <ListItem><ListItemText primary={`Стать: ${person.gender}`} /></ListItem>
                    </List>
                </CardContent>
                </Card>
            ))}
            </List>
        )}
        </Container>
    );
}
