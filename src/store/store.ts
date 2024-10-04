import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Todo, TodoState} from './type';

const initialState: TodoState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
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
            state.todos.forEach(todo => (todo.isCompleted = true))
        },
        clearCompletedTodos(state) {
            state.todos = state.todos.filter(todo => !todo.isCompleted)
        },
    },
});

export const {
    addTodo,
    toggleTodo,
    deleteTodo,
    completeAllTodos,
    clearCompletedTodos
} = todoSlice.actions;

const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;