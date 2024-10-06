import './TodoItems.css';
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Todo} from "../../types/type";

const TodoItems = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const filter = useSelector((state: RootState) => state.todos.filter);

    const filterFunctions: Record<string, (todo: Todo) => boolean> = {
        all: () => true,
        completed: (todo) => todo.isCompleted,
        active: (todo) => !todo.isCompleted,
    };

    const filteredTodos = todos.filter(filterFunctions[filter]);

    return (
        <ul className="todo__list">
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id}
                          todo={todo}
                />
            ))}
        </ul>
    );
}

export default TodoItems;