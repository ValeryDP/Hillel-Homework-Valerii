import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import {
    Button,
    MenuItem,
    TextField,
    Grid,
    InputLabel,
    Select,
    FormControl,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { fetchDestinations } from '../api/api';
import dayjs from 'dayjs';

const BookingForm = ({ onSubmit }) => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetchDestinations()
        .then((res) => setDestinations(res.data))
        .catch((err) => console.error(err));
    }, []);

    const validate = (values) => {
        const errors = {};
        if (!values.destination) {
        errors.destination = 'Required';
        }
        if (!values.checkIn) {
        errors.checkIn = 'Required';
        }
        if (!values.checkOut) {
        errors.checkOut = 'Required';
        }
        if (!values.adults) {
        errors.adults = 'Required';
        }
        if (!values.children) {
        errors.children = 'Required';
        }
        return errors;
    };

    return (
        <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{
            checkIn: null,
            checkOut: null,
        }}
        render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <Field name="destination">
                    {({ input, meta }) => (
                    <FormControl fullWidth error={meta.touched && meta.error} sx={{ minWidth: 120 }}>
                        <InputLabel>Destination</InputLabel>
                        <Select
                        {...input}
                        label="Destination"
                        value={input.value || ''}
                        onChange={input.onChange}
                        >
                        {destinations.map((d) => (
                            <MenuItem key={d.id} value={d.label}>
                            {d.label}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    )}
                </Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                <Field name="checkIn">
                    {({ input, meta }) => (
                    <DatePicker
                        label="Check In"
                        value={input.value ? dayjs(input.value) : null}
                        onChange={(date) =>
                        input.onChange(date ? date.toISOString() : null)
                        }
                        slotProps={{
                        textField: { fullWidth: true, error: meta.touched && !!meta.error, helperText: meta.touched && meta.error },
                        }}
                    />
                    )}
                </Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                <Field name="checkOut">
                    {({ input, meta }) => (
                    <DatePicker
                        label="Check Out"
                        value={input.value ? dayjs(input.value) : null}
                        onChange={(date) =>
                        input.onChange(date ? date.toISOString() : null)
                        }
                        slotProps={{
                        textField: { fullWidth: true, error: meta.touched && !!meta.error, helperText: meta.touched && meta.error },
                        }}
                    />
                    )}
                </Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                <Field name="adults">
                    {({ input, meta }) => (
                    <TextField
                        label="Adults"
                        type="number"
                        fullWidth
                        {...input}
                        error={meta.touched && !!meta.error}
                        helperText={meta.touched && meta.error}
                    />
                    )}
                </Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                <Field name="children">
                    {({ input, meta }) => (
                    <TextField
                        label="Children"
                        type="number"
                        fullWidth
                        {...input}
                        error={meta.touched && !!meta.error}
                        helperText={meta.touched && meta.error}
                    />
                    )}
                </Field>
                </Grid>

                <Grid item xs={12}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={submitting || pristine}
                >
                    Submit
                </Button>
                </Grid>
            </Grid>
            </form>
        )}
        />
    );
};

export default BookingForm;
