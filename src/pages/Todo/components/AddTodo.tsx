import { useState } from "react";
import useStore from "../../../stores/todoStore";

function AddTodo() {
    const { add } = useStore();
    const [title, setTitle] = useState('');

    const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (title.trim() !== '') {
            add(title.trim());
            setTitle('');
        }
    };

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

    return (
        <form className="flex w-[70%] min-w-[300px] mt-2">
            <input onChange={(e) => handleChangeTitle(e)} type="text" value={title} placeholder="What do you need to do?" className="flex-1 outline-none border border-gray-300 rounded-l-xl p-2" />
            <button onClick={(e) => handleAdd(e)} type="submit" className="bg-red-400 hover:bg-red-500 cursor-pointer text-white py-2 px-8 rounded-r-xl">Add</button>
        </form>
    );
}

export default AddTodo;