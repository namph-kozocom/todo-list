import TodoItem from "./TodoItem";
import TodoType from "../../../types/todo.type";

interface TodoListProb {
    list: TodoType[];
}

function TodoList({ list }: TodoListProb) {

    return (
        <div className="bg-[#F1ECE6] p-6 rounded-xl shadow w-full mt-6 h-[500px] overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <ul>
                {list.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;