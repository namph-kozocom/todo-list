import { create } from "zustand";
import TodoType from "../types/todo.type";

interface TodoStore {
    nextId: number;
    todoList: TodoType[];
    toggleComplete: (id: number) => void;
    add: (title: string) => void;
    remove: (id: number) => void;
    edit: (id: number, title: string) => void;
}

const useStore = create<TodoStore>((set) => ({
    nextId: 3,
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
        set((state) => {
            const newTodo = { id: state.nextId, title, completed: false };
            return {
                todoList: [newTodo, ...state.todoList],
                nextId: state.nextId + 1,
            };
        }),
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
