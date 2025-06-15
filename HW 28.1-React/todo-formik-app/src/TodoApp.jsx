import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './TodoApp.css';

export default function TodoApp() {
    const [todos, setTodos] = useState([]);

    const formik = useFormik({
        initialValues: {
        task: ''
        },
        validationSchema: Yup.object({
        task: Yup.string()
            .min(5, "Мінімум 5 символів")
            .required("Обов'язково"),
        }),
        onSubmit: (values, { resetForm }) => {
        setTodos([...todos, values.task]);
        resetForm();
        },
    });

    const handleDelete = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
        setTodos(updatedTodos);
    };

    return (
        <div className="page">
        <div className="container">
            <h2 className="title">Мій TODO-лист</h2>

            <form onSubmit={formik.handleSubmit} className="form">
            <input
                type="text"
                name="task"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.task}
                placeholder="Моє завдання"
                className="input"
            />
            {formik.touched.task && formik.errors.task && (
                <div className="error">{formik.errors.task}</div>
            )}

            <button type="submit" className="button">
                Додати завдання
            </button>
            </form>

            <ol className="list">
                {todos.map((todo, index) => (
                    <li key={index} className="list-item">
                    <div className="item-text">{todo}</div>
                    <button
                        onClick={() => handleDelete(index)}
                        className="delete-button"
                    >
                        Прибрати
                    </button>
                    </li>
                ))}
            </ol>
        </div>
        </div>
    );
}
