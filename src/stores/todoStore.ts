import { create } from "zustand";
import TodoType from "../types/todo.type";

interface TodoStore {
    todoList: TodoType[];
    toggleComplete: (id: number) => void;
    add: (title: string) => void;
    remove: (id: number) => void;
    edit: (id: number, title: string) => void;
}

const useStore = create<TodoStore>((set) => ({
    todoList: [
        { id: 1, title: "Professional Work No. 1", completed: false },
        { id: 2, title: "Professional Work No. 2", completed: true },
    ],
    toggleComplete: (id) =>
        set((state) => ({
            todoList: state.todoList.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
        })),
    add: (title) =>
        set((state) => ({
            todoList: [
                { id: state.todoList.length + 1, title, completed: false },
                ...state.todoList,
            ],
        })),
    remove: (id) =>
        set((state) => ({
            todoList: state.todoList.filter((todo) => todo.id !== id),
        })),
    edit: (id, title) =>
        set((state) => ({
            todoList: state.todoList.map((todo) =>
                todo.id === id ? { ...todo, title } : todo
            ),
        })),
}));

export default useStore;
