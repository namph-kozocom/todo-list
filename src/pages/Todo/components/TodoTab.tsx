import useStore from "../../../stores/todoStore";
import Tab from "../../../types/tab.type";

interface TodoTabProps {
    tabList: Tab[];
    activeTab: number;
    setActiveTab: (id: number) => void;
}

function TodoTab({ tabList, activeTab, setActiveTab }: TodoTabProps) {
    const { todoList } = useStore();
    const counts = {
        all: todoList.length,
        active: todoList.filter((todo) => !todo.completed).length,
        completed: todoList.filter((todo) => todo.completed).length,
    };

    return (
        <div className="flex w-full rounded-xl overflow-hidden my-4">
            {tabList.map((tab) => {
                let count;
                switch (tab.id) {
                case 1:
                    count = counts.all;
                    break;
                case 2:
                    count = counts.active;
                    break;
                default:
                    count = counts.completed;
                }

                return (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 p-2 cursor-pointer transition-all ${
                            activeTab === tab.id
                                ? "bg-red-400 text-white hover:bg-red-500"
                                : "bg-gray-100 hover:bg-gray-200"
                        }`}
                    >
                        {tab.name} ({count})
                    </button>
                );
            })}
        </div>
    );
}

export default TodoTab;
