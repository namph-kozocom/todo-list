import { useMemo } from "react";
import useStore from "../../../stores/todoStore";
import Tab from "../../../types/tab.type";

interface TodoTabProps {
    tabList: Tab[];
    activeTab: number;
    setActiveTab: (id: number) => void;
}

function TodoTab({ tabList, activeTab, setActiveTab }: TodoTabProps) {
    const { todoList } = useStore();

    const counts = useMemo(() => ({
        all: todoList.length,
        active: todoList.filter((todo) => !todo.completed).length,
        completed: todoList.filter((todo) => todo.completed).length,
    }), [todoList]);

    const countTab: { [key: number]: number } = {
        1: counts.all,
        2: counts.active,
        3: counts.completed,
    }

    return (
        <div className="flex w-full rounded-xl overflow-hidden my-4">
            {tabList.map((tab) => {

                return (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 flex justify-center items-center py-4 cursor-pointer transition-all ${activeTab === tab.id
                                ? "bg-red-400 text-white hover:bg-red-500"
                                : "bg-gray-100 hover:bg-gray-200"
                            }`}
                    >
                        {tab.name} ({countTab[tab.id]})
                    </button>
                );
            })}
        </div>
    );
}

export default TodoTab;
