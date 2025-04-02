import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoTab from "./components/TodoTab";
import useStore from "../../stores/todoStore";

function Todo() {
    const tabList = [
        { id: 1, name: "All" },
        { id: 2, name: "Active" },
        { id: 3, name: "Completed" },
    ];

    const { todoList } = useStore();
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (id: number) => {
        setActiveTab(id);
    };

    const filteredTodos = todoList.filter(todo => {
        if (activeTab === 2) return !todo.completed;
        if (activeTab === 3) return todo.completed;
        return true;
    });

    return (
        <div className="flex w-full h-screen justify-center items-center bg-gradient-to-bl from-red-200 to-yellow-200">
            <div className="w-full max-w-3xl max-h-screen p-8 bg-white shadow rounded-xl flex flex-col justify-center items-center">
                <h1 className="mb-4 text-4xl font-bold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                    TODOIST
                </h1>
                <TodoTab tabList={tabList} activeTab={activeTab} setActiveTab={handleTabClick} />
                <AddTodo />
                <TodoList list={filteredTodos} />
            </div>
        </div>
    );
}

export default Todo;
