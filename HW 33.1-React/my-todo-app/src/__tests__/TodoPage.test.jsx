import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import TodoPage from '../pages/TodoPage';

const renderWithProvider = (ui) => render(<Provider store={store}>{ui}</Provider>);

test('Сторінка має заголовок Мій TODO лист', () => {
    renderWithProvider(<TodoPage />);
    expect(screen.getByText(/Мій TODO лист/i)).toBeInTheDocument();
});

test('У поле введення можна ввести цифри і букви', () => {
    renderWithProvider(<TodoPage />);
    const input = screen.getByLabelText(/Нове завдання/i);
    fireEvent.change(input, { target: { value: 'Test123' } });
    expect(input.value).toBe('Test123');
});

test('При натисканні на "Додати" без тексту alert', () => {
    window.alert = vi.fn();
    renderWithProvider(<TodoPage />);
    const button = screen.getByText(/Додати/i);
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith('Не можна додати порожнє завдання');
});

test('Після введення тексту і натискання "Додати" створюється новий елемент у списку', () => {
    renderWithProvider(<TodoPage />);
    const input = screen.getByLabelText(/Нове завдання/i);
    const button = screen.getByText(/Додати/i);
    fireEvent.change(input, { target: { value: 'Нове завдання' } });
    fireEvent.click(button);
    expect(screen.getAllByText('Нове завдання')[0]).toBeInTheDocument();
});

test('Можна відзначати завдання виконаним (чекбокс)', () => {
    renderWithProvider(<TodoPage />);
    const input = screen.getByLabelText(/Нове завдання/i);
    const button = screen.getByText(/Додати/i);
    fireEvent.change(input, { target: { value: 'Тест чекбокса' } });
    fireEvent.click(button);
    const checkbox = screen.getAllByRole('checkbox')[0];
    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
});
