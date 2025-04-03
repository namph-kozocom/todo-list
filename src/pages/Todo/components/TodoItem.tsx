import { CheckCircle, Circle, Edit, Save, Trash2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TodoType from "../../../types/todo.type";
import useStore from "../../../stores/todoStore";

interface TaskItemProps {
  todo: TodoType,
}

function TodoItem({ todo }: TaskItemProps) {
  const { toggleComplete, remove, edit } = useStore();
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeEditMode = () => {
    setIsEdit(!isEdit)
  }

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value)
  };

  const handleSave = () => {
    if (editTitle.trim() === '') return;
    edit(todo.id, editTitle.trim());
    setIsEdit(false);
  }

  const handelCancel = () => {
    setEditTitle(todo.title);
    setIsEdit(false);
  }

  useEffect(() => {
    if (isEdit) {
      inputRef.current?.focus();
    }
  }, [isEdit]);

  return (
    <li className="flex gap-2 justify-between items-center py-3 border-b border-[#76B7CD]">
      <div className="flex items-center gap-2 w-full">
        <button type="button" onClick={() => toggleComplete(todo.id)} className="text-orange-500 cursor-pointer">
          {todo.completed ? <CheckCircle size={20} /> : <Circle size={20} />}
        </button>
        <input
          ref={inputRef}
          value={editTitle}
          type="text" readOnly={!isEdit}
          onChange={(e) => handleChangeTitle(e)}
          onClick={isEdit ? () => { } : () => toggleComplete(todo.id)}
          className={`${todo.completed ? "line-through text-gray-400" : "text-gray-800"} flex-1 outline-none cursor-pointer`}
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={isEdit ? handleSave : handleChangeEditMode}
          type="button"
          className="text-gray-400 hover:text-blue-500 cursor-pointer"
        >
          {isEdit ? <Save size={18} /> : <Edit size={18} />}
        </button>
        <button 
          onClick={isEdit ? handelCancel : () => remove(todo.id)} 
          type="button" 
          className="text-gray-400 hover:text-red-500 cursor-pointer"
        >
          {isEdit ? <X size={18} /> : <Trash2 size={18} />}
        </button>
      </div>
    </li>
  );
}

export default TodoItem;