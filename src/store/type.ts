export interface Todo {
    id: string;
    text: string;
    isCompleted: boolean;
}

export interface TodoState {
    todos: Todo[];
}