export const fetchTodos = async () => {
    return [
        { id: 1, text: 'Приклад першого завдання', completed: false },
        { id: 2, text: 'Приклад другого завдання', completed: true }
    ];
};

export const createTodo = async (text) => {
    return { id: Date.now(), text, completed: false };
};
