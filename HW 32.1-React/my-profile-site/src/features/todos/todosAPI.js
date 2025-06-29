export const fetchTodosAPI = () => {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve([
            { id: 1, text: 'Вивчення React', completed: false },
            { id: 2, text: 'Створення властного сайту', completed: false },
        ]);
        }, 500);
    });
};

export const addTodoAPI = (text) => {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve({ id: Date.now(), text, completed: false });
        }, 300);
    });
};
