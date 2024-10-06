import {TodoState} from '../types/type';

export const loadTodosFromLocalStorage = (): TodoState | undefined => {
    try {
        const savedTodos = localStorage.getItem('todosState');
        if (savedTodos === null) {
            return undefined;
        }
        return JSON.parse(savedTodos) as TodoState;

    } catch (err) {
        console.error('Не удалось загрузить состояние', err);
        return undefined;
    }
};

export const saveTodosToLocalStorage = (state: TodoState): void => {
    try {
        const savedTodos = JSON.stringify(state);
        localStorage.setItem('todosState', savedTodos);
    } catch (err) {
        console.error('Не удалось сохранить состояние', err);
    }
};