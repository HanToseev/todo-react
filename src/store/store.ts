import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Todo, TodoState} from './type';
import {loadTodosFromLocalStorage, saveTodosToLocalStorage} from "../components/utils/localStorage";

const initialState: TodoState = {
    todos: [],
    filter: 'all'
};

const localStorageState = loadTodosFromLocalStorage();

const todoSlice = createSlice({
    name: 'todos',
    initialState: localStorageState || initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{ text: string }>) => {
            const newTodo: Todo = {
                id: new Date().toISOString(),
                text: action.payload.text,
                isCompleted: false,
            };
            state.todos.push(newTodo)
        },
        toggleTodo: (state, action: PayloadAction<{ id: string }>) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            if (todo) {
                todo.isCompleted = !todo.isCompleted;
            }
        },
        deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        completeAllTodos: (state) => {
            const isAllCompleted = state.todos.every((todo) => todo.isCompleted);
            state.todos.forEach((todo) => (todo.isCompleted = !isAllCompleted));
        },
        clearCompletedTodos(state) {
            state.todos = state.todos.filter(todo => !todo.isCompleted)
        },
        setFilter: (state, action: PayloadAction<'all' | 'completed' | 'active'>) => {
            state.filter = action.payload;
        },
    },
});

export const {
    addTodo,
    toggleTodo,
    deleteTodo,
    completeAllTodos,
    clearCompletedTodos,
    setFilter
} = todoSlice.actions;

const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
    },
});

store.subscribe(() => {
    const state = store.getState().todos;
    saveTodosToLocalStorage(state);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;