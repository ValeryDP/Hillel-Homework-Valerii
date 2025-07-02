export const fetchTodosAPI = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve([
            { id: 1, text: 'Приклад завдання у листі', completed: false },
        ]);
        }, 500);
    });
};
